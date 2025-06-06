function displayNav() {
      const nav = document.getElementById('nav');
      nav.style.display = 'flex';
    }

    function displayBtn() {
      const btn = document.getElementById('animateCamera');
      btn.style.display = 'block';
    }

    const models = [
      {
        name: 'man',
        left_leg: '/tattoo/left_male_foot.glb',
        right_leg: '/tattoo/right_male_foot.glb',
        left_arm: '/tattoo/left_male_arm.glb',
        right_arm: '/tattoo/right_male_arm.glb',
        body: '/tattoo/male_body.glb',
      },
      {
        name: 'woman',
        left_leg: '/tattoo/left_female_foot.glb',
        right_leg: '/tattoo/right_female_foot.glb',
        left_arm: '/tattoo/left_female_arm.glb',
        right_arm: '/tattoo/right_female_arm.glb',
        body: '/tattoo/female_body.glb',
      }
    ]

    let scene, camera, renderer, model, controls;
    let raycaster, mouse, line, mouseHelper;
    let decalMaterial, currentDecal = null;
    let customTexture = null;
    let isDragging = false;

    const intersection = {
      intersects: false,
      point: new THREE.Vector3(),
      normal: new THREE.Vector3()
    };

    const position = new THREE.Vector3();
    const orientation = new THREE.Euler();
    const size = new THREE.Vector3(0.5, 0.5, 0.5); // Default decal size
    let aspectRatio = 1; // Add this line to store aspect ratio

    let currentModelType = null;
    let currentBodyPart = null;

    function init() {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.style.display = 'none';
      document.body.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 5);

      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.rotateSpeed = 0.5; // Slower rotation for better control
      controls.zoomSpeed = 0.8;
      controls.enabled = true;

      raycaster = new THREE.Raycaster();
      mouse = new THREE.Vector2();

      scene.add(new THREE.AmbientLight(0xffffff, 0.6));

      const lightPositions = [
        [5, 3, 0],    // right
        [-5, 3, 0],   // left
        [0, 3, 5],    // front
        [0, 3, -5],   // back
        [0, 5, 0],    // top
        [0, -3, 0]    // bottom
      ];

      lightPositions.forEach(pos => {
        const light = new THREE.DirectionalLight(0xffffff, 0.5);
        light.position.set(...pos);
        scene.add(light);
      });

      setupDecalFunctionality();
    }

    function setupDecalFunctionality() {
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(new Array(6).fill(0), 3));
      line = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial());
      scene.add(line);

      mouseHelper = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 10),
        new THREE.MeshNormalMaterial()
      );
      mouseHelper.visible = false;
      scene.add(mouseHelper);

      decalMaterial = new THREE.MeshPhongMaterial({
        specular: 0x444444,
        shininess: 30,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -4,
        wireframe: false,
        opacity: 1.0
      });

      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(
        '/images/exemplu.jpg',
        function (texture) {
          texture.encoding = THREE.sRGBEncoding;
          decalMaterial.map = texture;
          customTexture = texture;

          createDecal();
        }
      );

      window.addEventListener('pointerdown', startDrag);
      window.addEventListener('pointermove', moveDecal);
      window.addEventListener('pointerup', endDrag);
    }

    function createDecal() {
      if (!model) {
        return;
      }

      const targetObject = raycaster.intersectObject(model, true)[0]?.object;

      if (!targetObject) {
        console.error("No valid intersection found.");
        return;
      }

      if (!targetObject.geometry || !(targetObject.geometry instanceof THREE.BufferGeometry)) {
        console.error("Invalid geometry for decal creation.");
        return;
      }

      mouseHelper.position.copy(position);
      const n = intersection.normal.clone();
      n.multiplyScalar(10);
      n.add(position);
      mouseHelper.lookAt(n);
      orientation.copy(mouseHelper.rotation);

      size.set(0.5, 0.5, 0.5); // Default size

      const material = decalMaterial.clone();
      material.opacity = parseFloat(document.getElementById('decalOpacity').value);

      try {
        const m = new THREE.DecalGeometry(targetObject, position, orientation, size);
        const decalMesh = new THREE.Mesh(m, material);
        currentDecal = decalMesh;
        scene.add(decalMesh);
      } catch (error) {
        console.error("Error creating decal:", error);
      }
    }

    function startDrag(event) {
      checkIntersection(event.clientX, event.clientY);

      if (currentDecal && event.button === 0 && intersection.intersects) {
        isDragging = true;
        controls.enabled = false;
        document.getElementById('info').textContent = 'Moving decal...';
      } else {
        controls.enabled = true;
      }
    }

    function moveDecal(event) {
      checkIntersection(event.clientX, event.clientY);

      if (isDragging && intersection.intersects && currentDecal) {
        position.copy(intersection.point);

        const n = intersection.normal.clone();
        n.multiplyScalar(10);
        n.add(position);
        mouseHelper.position.copy(position);
        mouseHelper.lookAt(n);
        orientation.copy(mouseHelper.rotation);

        orientation.z = THREE.MathUtils.degToRad(parseFloat(document.getElementById('decalRotation').value));

        const targetObject = raycaster.intersectObject(model, true)[0]?.object;

        if (!targetObject || !targetObject.geometry || !(targetObject.geometry instanceof THREE.BufferGeometry)) {
          console.error("Invalid geometry for decal creation.");
          return;
        }

        try {
          const currentMaterial = currentDecal.material;

          scene.remove(currentDecal);
          if (currentDecal.geometry) currentDecal.geometry.dispose();

          const m = new THREE.DecalGeometry(targetObject, position, orientation, size);
          currentDecal = new THREE.Mesh(m, currentMaterial);
          scene.add(currentDecal);
        } catch (e) {
          console.error("Error updating decal:", e);
        }
      }
    }

    function endDrag() {
      if (isDragging) {
        isDragging = false;
        controls.enabled = true;
        document.getElementById('info').textContent = 'Drag to move decal on model surface';
      }
    }

    function checkIntersection(x, y) {
      if (!model) {
        return;
      }

      mouse.x = (x / window.innerWidth) * 2 - 1;
      mouse.y = -(y / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = [];
      raycaster.intersectObject(model, true, intersects);


      if (intersects.length > 0) {
        const p = intersects[0].point;
        mouseHelper.position.copy(p);
        intersection.point.copy(p);

        if (intersects[0].face) {
          intersection.normal.copy(intersects[0].face.normal);
        } else {
          intersection.normal.set(0, 1, 0); // Default normal
        }

        intersection.normal.transformDirection(intersects[0].object.matrixWorld);

        const positions = line.geometry.attributes.position;
        positions.array[0] = p.x;
        positions.array[1] = p.y;
        positions.array[2] = p.z;

        const n = intersection.normal.clone();
        n.multiplyScalar(10);
        n.add(p);

        positions.array[3] = n.x;
        positions.array[4] = n.y;
        positions.array[5] = n.z;
        positions.needsUpdate = true;

        intersection.intersects = true;
      } else {
        intersection.intersects = false;
      }
    }

    function clearCurrentDecal() {
      if (currentDecal) {
        scene.remove(currentDecal);
        if (currentDecal.geometry) currentDecal.geometry.dispose();
        if (currentDecal.material) currentDecal.material.dispose();
        currentDecal = null;
      }
    }

    function resetControls() {
      document.getElementById('decalSize').value = '0.5';
      document.getElementById('sizeValue').textContent = '0.5';
      size.set(0.5 * aspectRatio, 0.5, 0.5);

      document.getElementById('decalOpacity').value = '1';
      document.getElementById('opacityValue').textContent = '100';
      if (currentDecal && currentDecal.material) {
        currentDecal.material.opacity = 1.0;
        currentDecal.material.needsUpdate = true;
      }

      document.getElementById('decalRotation').value = '0';
      document.getElementById('rotationValue').textContent = '0';
      orientation.z = 0;

      if (currentDecal) {
        updateCurrentDecal();
      }
    }

    function setupEventListeners() {
      document.getElementById('toggleControls').addEventListener('click', function () {
        document.getElementById('controls').classList.toggle('closed');
      });

      document.getElementById('imageUpload').addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (event) {
            const img = new Image();
            img.onload = function () {
              aspectRatio = this.width / this.height;

              const currentSize = parseFloat(document.getElementById('decalSize').value);
              size.set(currentSize * aspectRatio, currentSize, currentSize);

              const texture = new THREE.Texture(this);
              texture.needsUpdate = true;
              texture.encoding = THREE.sRGBEncoding;

              if (currentDecal && currentDecal.material) {
                currentDecal.material.map = texture;
                currentDecal.material.needsUpdate = true;
                updateCurrentDecal();
              }

              decalMaterial.map = texture;
              decalMaterial.needsUpdate = true;

              if (customTexture) {
                customTexture.dispose();
              }
              customTexture = texture;
            };
            img.src = event.target.result;
          };
          reader.readAsDataURL(file);
        }
      });

      window.addEventListener('pointerdown', function (event) {
        placeDecal(event.clientX, event.clientY);
      });

      document.getElementById('decalSize').addEventListener('input', function () {
        const value = parseFloat(this.value);
        document.getElementById('sizeValue').textContent = value.toFixed(1);
        size.set(value * aspectRatio, value, value);

        if (currentDecal) {
          updateCurrentDecal();
        }
      });

      document.getElementById('decalOpacity').addEventListener('input', function () {
        const value = parseFloat(this.value);
        document.getElementById('opacityValue').textContent = Math.round(value * 100);

        if (currentDecal && currentDecal.material) {
          currentDecal.material.opacity = value;
          currentDecal.material.needsUpdate = true;
        }
      });

      document.getElementById('decalRotation').addEventListener('input', function () {
        const value = parseFloat(this.value);
        document.getElementById('rotationValue').textContent = value.toFixed(1);
        orientation.z = THREE.MathUtils.degToRad(value);

        updateCurrentDecal();
      });

      document.getElementById('resetControls').addEventListener('click', resetControls);

      document.getElementById('clearDecals').addEventListener('click', clearCurrentDecal);
    }

    function updateCurrentDecal() {
      if (!currentDecal || !model) {
        console.warn("No current decal or model is not loaded.");
        return;
      }

      raycaster.set(currentDecal.position, new THREE.Vector3(0, -1, 0));
      const intersects = raycaster.intersectObject(model, true);
      const targetObject = intersects[0]?.object;

      if (!targetObject) {
        console.warn("No valid target object found for decal update.");
        return;
      }

      const currentMaterial = currentDecal.material;

      scene.remove(currentDecal);
      if (currentDecal.geometry) currentDecal.geometry.dispose();

      try {
        const decalGeometry = new THREE.DecalGeometry(targetObject, position, orientation, size);
        currentDecal = new THREE.Mesh(decalGeometry, currentMaterial);
        scene.add(currentDecal);
      } catch (error) {
        console.error("Error updating decal:", error);
      }
    }

    init();
    setupEventListeners();
    setupModelControls();
    animate();

    function animate() {
      requestAnimationFrame(animate);
      if (controls) {
        controls.update();
      }
      renderer.render(scene, camera);
    }

    function placeDecal(x, y) {
      if (!model) return;

      mouse.x = (x / window.innerWidth) * 2 - 1;
      mouse.y = -(y / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(model, true);

      if (intersects.length === 0) return;

      const targetObject = intersects[0].object;

      if (!targetObject.geometry || !(targetObject.geometry instanceof THREE.BufferGeometry)) {
        return;
      }

      position.copy(intersects[0].point);

      const n = intersects[0].face.normal.clone();
      n.transformDirection(targetObject.matrixWorld);
      n.multiplyScalar(10);
      n.add(position);
      mouseHelper.position.copy(position);
      mouseHelper.lookAt(n);
      orientation.copy(mouseHelper.rotation);

      const currentRotation = parseFloat(document.getElementById('decalRotation').value);
      orientation.z = THREE.MathUtils.degToRad(currentRotation);

      if (currentDecal) {
        scene.remove(currentDecal);
        if (currentDecal.geometry) currentDecal.geometry.dispose();
      }

      const material = decalMaterial.clone();
      material.opacity = parseFloat(document.getElementById('decalOpacity').value);

      const currentSize = parseFloat(document.getElementById('decalSize').value);
      size.set(currentSize * aspectRatio, currentSize, currentSize);

      try {
        const decalGeometry = new THREE.DecalGeometry(targetObject, position, orientation, size);
        currentDecal = new THREE.Mesh(decalGeometry, material);
        scene.add(currentDecal);
      } catch (error) {
      }
    }

    function loadModel(modelPath) {
      if (model) {
        scene.remove(model);
      }

      const loader = new THREE.GLTFLoader();
      loader.load(
        modelPath,
        function (gltf) {
          model = gltf.scene;

          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          model.position.x -= center.x;
          model.position.y -= center.y;
          model.position.z -= center.z;
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 5 / maxDim;
          model.scale.set(scale, scale, scale);

          if (model.geometry && !(model.geometry instanceof THREE.BufferGeometry)) {
            model.geometry = new THREE.BufferGeometry().fromGeometry(model.geometry);
          }

          scene.add(model);

          document.getElementById('loading').style.display = 'none';
        },
        undefined,
        function (error) {
          document.getElementById('loading').textContent = 'Error loading model';
        }
      );
    }

    function setupModelControls() {
      document.getElementById('welcomeToggle').style.display = 'none';

      document.querySelectorAll('input[name="tabs"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
          currentModelType = e.target.value;
          document.getElementById('bodyParts').classList.remove('hidden');

          clearCurrentDecal();
          resetControls();

          if (currentBodyPart) {
            const selectedModel = models.find(m => m.name === currentModelType);
            if (selectedModel) {
              loadModel(selectedModel[currentBodyPart]);
            }
          }
        });
      });

      const bodyParts = ['left_leg', 'right_leg', 'left_arm', 'right_arm', 'body'];
      bodyParts.forEach(part => {
        document.getElementById(`select${part.charAt(0).toUpperCase() + part.slice(1)}`).addEventListener('click', () => {
          currentBodyPart = part;
          bodyParts.forEach(p => {
            document.getElementById(`select${p.charAt(0).toUpperCase() + p.slice(1)}`).classList.remove('active');
          });
          document.getElementById(`select${part.charAt(0).toUpperCase() + part.slice(1)}`).classList.add('active');

          clearCurrentDecal();
          resetControls();

          const selectedGender = document.querySelector('input[name="tabs"]:checked').value;
          const selectedModel = models.find(m => m.name === selectedGender);

          if (selectedModel) {
            const welcomeMessage = document.querySelector('.welcome-message');
            welcomeMessage.classList.add('hide');
            document.querySelector('.welcome-toggle').style.display = 'block';
            renderer.domElement.style.display = 'block';

            loadModel(selectedModel[part]);
            document.getElementById('decalControls').classList.remove('hidden');
          }
        });
      });
    }

    document.addEventListener('DOMContentLoaded', function () {
      const welcomeMessage = document.getElementById('welcomeMessage');
      const welcomeToggle = document.getElementById('welcomeToggle');

      welcomeToggle.addEventListener('click', function () {
        welcomeMessage.classList.remove('hide');
        welcomeToggle.style.display = 'none';
      });

      document.querySelector('.welcome-close').addEventListener('click', function () {
        const welcomeMessage = document.querySelector('.welcome-message');
        welcomeMessage.classList.add('hide');

        const welcomeToggle = document.querySelector('.welcome-toggle');
        welcomeToggle.style.display = 'block';
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
      const navIcon = document.getElementById('nav-icon');
      const nav = document.getElementById('nav');
      const navItems = document.querySelectorAll('.nav-item');
      const navIconContainer = document.querySelector('.nav-icon-container');

      setTimeout(() => {
        navIconContainer.style.display = 'block';
        setTimeout(() => {
          navIconContainer.classList.add('visible');
        }, 100);
      }, 1000);

      navIcon.addEventListener('click', function () {
        const nav = document.getElementById('nav');
        this.classList.toggle('open');

        if (this.classList.contains('open')) {
          nav.style.display = 'flex';
          setTimeout(() => {
            nav.classList.add('active');
            navItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
              }, 100 * index);
            });
          }, 10);
        } else {
          nav.classList.remove('active');
          navItems.forEach((item) => {
            item.classList.remove('visible');
          });
          setTimeout(() => {
            nav.style.display = 'none';
          }, 300);
        }
      });

      document.addEventListener('click', function (event) {
        const nav = document.getElementById('nav');
        const navIcon = document.getElementById('nav-icon');
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnNavIcon = navIcon.contains(event.target);

        if (!isClickInsideNav && !isClickOnNavIcon && nav.classList.contains('active')) {
          navIcon.classList.remove('open');
          nav.classList.remove('active');
          navItems.forEach((item) => {
            item.classList.remove('visible');
          });
          setTimeout(() => {
            nav.style.display = 'none';
          }, 300);
        }
      });

      navItems.forEach(item => {
        item.addEventListener('click', function () {
          navIcon.classList.remove('open');
          nav.classList.remove('active');
          navItems.forEach((item) => {
            item.classList.remove('visible');
          });
        });
      });
    });

    function navigateWithState(hash) {
      sessionStorage.setItem('fromSimulator', 'true');
      sessionStorage.setItem('navigateTo', hash);
      sessionStorage.setItem('directNavigation', 'true');
      window.location.href = '../index.html';
    }

    document.addEventListener('DOMContentLoaded', function () {
      const navItems = document.querySelectorAll('.nav-item');

      navItems.forEach(item => {
        item.addEventListener('click', function (e) {
          e.preventDefault();

          if (this.textContent.includes('ACASĂ')) {
            navigateWithState('home');
          }
          else if (this.textContent.includes('DESPRE NOI')) {
            navigateWithState('about');
          }
          else if (this.textContent.includes('GALERIE')) {
            navigateWithState('gallery');
          }
          else if (this.textContent.includes('CONTACTE')) {
            navigateWithState('contact');
          }
          else if (this.textContent.includes('SIMULATOR')) {
            window.location.href = 'sim.html';
          }
        });
      });
    });