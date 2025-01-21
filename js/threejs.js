    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x744c9a);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 6);
    directionalLight.position.set(5, 10, 4);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 4);
    directionalLight2.position.set(-121, 128, -138);
    scene.add(directionalLight2);

    // GLTF Model Loader
    const loader = new THREE.GLTFLoader();
    loader.load('./tattoo/small.glb', function (gltf) {
        const model = gltf.scene;
        model.scale.set(2, 2, 2);
        model.position.set(0, -1, 0);
        scene.add(model);
    }, undefined, function (error) {
        console.error('An error occurred:', error);
    });



    // OrbitControls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;

    // Force initial position after a slight delay
    setTimeout(() => {
        camera.position.set(-40.37, 41.73, -36.98);
        camera.lookAt(-59.72, 40.26, -36.67);
        controls.target.set(-59.72, 40.26, -36.67);

        camera.updateProjectionMatrix();
        controls.update();
    }, 100);

    // Display the camera position
    const cameraPositionDiv = document.getElementById('cameraPosition');

    // Animate the scene
    function animate() {
        requestAnimationFrame(animate);

        // Update TWEEN
        TWEEN.update();

        // Update the camera position display
        cameraPositionDiv.innerHTML = `
            Camera Position: 
            X: ${camera.position.x.toFixed(2)}, 
            Y: ${camera.position.y.toFixed(2)}, 
            Z: ${camera.position.z.toFixed(2)}
        `;

        controls.update();
        renderer.render(scene, camera);
    }

    animate();

    // Camera animation function
    function animateCamera() {
        console.log('Animation started'); // Debug log

        if (typeof TWEEN === 'undefined') {
            console.error('TWEEN is not loaded!');
            return;
        }

        // Starting position and target
        const startPos = {
            x: camera.position.x,
            y: camera.position.y,
            z: camera.position.z,
            targetX: controls.target.x,
            targetY: controls.target.y,
            targetZ: controls.target.z
        };

        // Ending position and target
        const endPos = {
            x: 48.76,
            y: 65.56,
            z: 56.23,
            targetX: -57.31,
            targetY: 12.14,
            targetZ: -71.57
        };

        // Create the tween
        new TWEEN.Tween(startPos)
            .to(endPos, 2000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(() => {
                camera.position.set(startPos.x, startPos.y, startPos.z);
                controls.target.set(startPos.targetX, startPos.targetY, startPos.targetZ);
                camera.lookAt(startPos.targetX, startPos.targetY, startPos.targetZ);
                controls.update();
            })
            .onComplete(() => {
                console.log('Animation completed');
            })
            .start();

        const button = document.getElementById('animateCamera');
        button.style.display = 'none';
    }

    // Make sure the button is properly added and event listener is working
    document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('animateCamera');
        if (button) {
            button.addEventListener('click', () => {
                console.log('Button clicked'); // Debug log
                animateCamera();
            });
        } else {
            console.error('Button not found!'); // Debug log
        }
    });