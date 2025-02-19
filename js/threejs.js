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

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight2.position.set(-121, 128, -138);
scene.add(directionalLight2);





    // GLTF Model Loader
    const loader = new THREE.GLTFLoader();
    loader.load('./tattoo/idk_1-v2-v3.glb', function (gltf) {
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
    camera.position.set(-37.08, 40.97, -36.26);
    camera.lookAt(-60.97, 41.54, -34.94);
    controls.target.set(-60.97, 41.54, -34.94);

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


function animateCamera() {

	const button = document.getElementById('animateCamera');
	button.style.display = 'none';

	const startPos = {
		x: camera.position.x,
		y: camera.position.y,
		z: camera.position.z,
		targetX: controls.target.x,
		targetY: controls.target.y,
		targetZ: controls.target.z
	};

	const endPos = {
		x: 48.76,
		y: 65.56,
		z: 56.23,
		targetX: -57.31,
		targetY: 12.14,
		targetZ: -71.57
	};

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

			// Show nav icon as an X
			const navIconContainer = document.querySelector('.nav-icon-container');
			const navIcon = document.getElementById('nav-icon');
			navIconContainer.style.display = 'block';
			navIcon.classList.add('open'); // Start as X

			setTimeout(() => {
				navIconContainer.classList.add('visible');
			}, 50);

			// Show nav menu after a short delay
			setTimeout(() => {
				const nav = document.getElementById('nav');

				nav.style.display = 'flex';
				nav.classList.add('visible');
				nav.classList.add('active');

				// Animate nav items
				const navItems = Array.from(document.querySelectorAll('.nav-item'));
				navItems.forEach((item, i) => {
					setTimeout(() => {
						console.log('Animating item', i);
						item.classList.add('visible');
					}, 800 + (i * 200));
				});
			}, 500);
		})
		.start();
}


function animateToAboutUs() {
	console.log('Animation to Contacts started');

	// Close the navigation menu first
	const nav = document.getElementById('nav');
	const navIcon = document.getElementById('nav-icon');


	const navItems = Array.from(document.querySelectorAll('.nav-item'));
	navItems.forEach((item, i) => {
		setTimeout(() => {
			console.log('Hiding nav item', i);
			item.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)`;
			item.classList.remove('visible');
		}, i * 200); // Delay each item by 200ms
	});

	setTimeout(() => {
		console.log('Closing nav menu');
		nav.classList.remove('visible', 'active');
		nav.style.display = 'none';
		navIcon.classList.remove('open');
	}, navItems.length * 200 + 300); // Ensure this happens after the last item disappears

	// Define start and end positions
	const startPos = {
		x: camera.position.x,
		y: camera.position.y,
		z: camera.position.z,
		targetX: controls.target.x,
		targetY: controls.target.y,
		targetZ: controls.target.z
	};

	const endPos = {
		x: -33.9,
		y: 43.77,
		z: 7.38,
		targetX: -61.76,
		targetY: 44.02,
		targetZ: 8
	};

	// Start the tween animation
	new TWEEN.Tween(startPos)
		.to(endPos, 3000)
		.easing(TWEEN.Easing.Quadratic.InOut)
		.onUpdate(() => {
			camera.position.set(startPos.x, startPos.y, startPos.z);
			controls.target.set(startPos.targetX, startPos.targetY, startPos.targetZ);
			camera.lookAt(startPos.targetX, startPos.targetY, startPos.targetZ);
			controls.update();
		})
		.onComplete(() => {
			console.log('Animation completed');

			const navIconContainer = document.querySelector('.nav-icon-container');
			const navIcon = document.getElementById('nav-icon');
			navIconContainer.style.display = 'block';
			navIcon.classList.remove('open'); // Start as X

			setTimeout(() => {
				navIconContainer.classList.add('visible');
			}, 50);

			// Show nav menu after a short delay
			setTimeout(() => {
				const nav = document.getElementById('nav');

				nav.style.display = 'flex';
				nav.classList.remove('visible');
				nav.classList.remove('active');

				// Animate nav items
				const navItems = Array.from(document.querySelectorAll('.nav-item'));
				navItems.forEach((item, i) => {
					setTimeout(() => {
						console.log('Animating item', i);
						item.classList.add('visible');
					}, 800 + (i * 200));
				});
			}, 500);

			setTimeout(() => {
				showAboutUs();
			}, 500);
			
		})
		.start();
}

function animateToContacts() {

	// Close the navigation menu first
	const nav = document.getElementById('nav');
	const navIconContainer = document.querySelector('.nav-icon-container');
	const navIcon = document.getElementById('nav-icon');

	console.log('Before closing nav menu - Nav visibility:', nav.style.display);

	const navItems = Array.from(document.querySelectorAll('.nav-item'));
	navItems.forEach((item, i) => {
		setTimeout(() => {
			item.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)`;
			item.classList.remove('visible');
		}, i * 200); // Delay each item by 200ms
	});

	setTimeout(() => {
		nav.classList.remove('visible', 'active');
		nav.style.display = 'none';
		navIcon.classList.remove('open');
	}, navItems.length * 200 + 300); // Ensure this happens after the last item disappears

	// Define start and end positions
	const startPos = {
		x: camera.position.x,
		y: camera.position.y,
		z: camera.position.z,
		targetX: controls.target.x,
		targetY: controls.target.y,
		targetZ: controls.target.z
	};

	const endPos = {
		x: -49.83,
		y: 18.92,
		z: 47.35,
		targetX: -59.07,
		targetY: 17.05,
		targetZ: 49.31
	};

	// Start the tween animation
	new TWEEN.Tween(startPos)
		.to(endPos, 3000)
		.easing(TWEEN.Easing.Quadratic.InOut)
		.onUpdate(() => {
			camera.position.set(startPos.x, startPos.y, startPos.z);
			controls.target.set(startPos.targetX, startPos.targetY, startPos.targetZ);
			camera.lookAt(startPos.targetX, startPos.targetY, startPos.targetZ);
			controls.update();
		})
		.onComplete(() => {
			console.log('Animation completed');

			const navIconContainer = document.querySelector('.nav-icon-container');
			const navIcon = document.getElementById('nav-icon');
			navIconContainer.style.display = 'block';
			navIcon.classList.remove('open'); // Start as X

			setTimeout(() => {
				navIconContainer.classList.add('visible');
			}, 50);

			// Show nav menu after a short delay
			setTimeout(() => {
				const nav = document.getElementById('nav');

				nav.style.display = 'flex';
				nav.classList.remove('visible');
				nav.classList.remove('active');

				// Animate nav items
				const navItems = Array.from(document.querySelectorAll('.nav-item'));
				navItems.forEach((item, i) => {
					setTimeout(() => {
						item.classList.add('visible');
					}, 800 + (i * 200));
				});
			}, 500);

			setTimeout(() => {
				showPopUp();
			}, 500);
		})
		.start();
}


function animateToGallery() {

	// Close the navigation menu first
	const nav = document.getElementById('nav');
	const navIconContainer = document.querySelector('.nav-icon-container');
	const navIcon = document.getElementById('nav-icon');

	console.log('Before closing nav menu - Nav visibility:', nav.style.display);

	const navItems = Array.from(document.querySelectorAll('.nav-item'));
	navItems.forEach((item, i) => {
		setTimeout(() => {
			item.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)`;
			item.classList.remove('visible');
		}, i * 200); // Delay each item by 200ms
	});

	setTimeout(() => {
		nav.classList.remove('visible', 'active');
		nav.style.display = 'none';
		navIcon.classList.remove('open');
	}, navItems.length * 200 + 300); // Ensure this happens after the last item disappears

	// Define start and end positions
	const startPos = {
		x: camera.position.x,
		y: camera.position.y,
		z: camera.position.z,
		targetX: controls.target.x,
		targetY: controls.target.y,
		targetZ: controls.target.z
	};

	const endPos = {
		x: 2.98,
		y: 16.77,
		z: -11.86,
		targetX: 2.83,
		targetY: 11.03,
		targetZ: -11.89
	};

	// Start the tween animation
	new TWEEN.Tween(startPos)
		.to(endPos, 3000)
		.easing(TWEEN.Easing.Quadratic.InOut)
		.onUpdate(() => {
			camera.position.set(startPos.x, startPos.y, startPos.z);
			controls.target.set(startPos.targetX, startPos.targetY, startPos.targetZ);
			camera.lookAt(startPos.targetX, startPos.targetY, startPos.targetZ);
			controls.update();
		})
		.onComplete(() => {
			console.log('Animation completed');

			const navIconContainer = document.querySelector('.nav-icon-container');
			const navIcon = document.getElementById('nav-icon');
			navIconContainer.style.display = 'block';
			navIcon.classList.remove('open'); // Start as X

			setTimeout(() => {
				navIconContainer.classList.add('visible');
			}, 50);

			// Show nav menu after a short delay
			setTimeout(() => {
				const nav = document.getElementById('nav');

				nav.style.display = 'flex';
				nav.classList.remove('visible');
				nav.classList.remove('active');

				// Animate nav items
				const navItems = Array.from(document.querySelectorAll('.nav-item'));
				navItems.forEach((item, i) => {
					setTimeout(() => {
						item.classList.add('visible');
					}, 800 + (i * 200));
				});
			}, 500);

			setTimeout(() => {
				showGallery();
			}, 500);
		})
		.start();
}

