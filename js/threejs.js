// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x181818);


// Camera setup
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

// Renderer   setup
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

// GLTF Model 
const loader = new THREE.GLTFLoader();
loader.load('./tattoo/final.glb', function (gltf) {
	const model = gltf.scene;
	model.scale.set(2, 2, 2);
	model.position.set(0, 0, 0);
	scene.add(model);

}, undefined, function (error) {
	console.error('An error occurred:', error);
});

// OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Initial position 
setTimeout(() => {
	camera.position.set(-4.77, 19.81, -1.35);
	camera.lookAt(-4.61, 19.11, -13.01);
	controls.target.set(-4.61, 19.11, -13.01);

	camera.updateProjectionMatrix();
	controls.update();
}, 100);

// Disable the camera navigation
controls.enableRotate = false;
controls.enableZoom = false;
controls.enablePan = false;

// Animate the scene
function animate() {
	requestAnimationFrame(animate);

	// Update TWEEN
	TWEEN.update();

	// Update the camera position display
	
	controls.update();
	renderer.render(scene, camera);
}

animate();

// Make sure the button is properly added and event listener is working
document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('animateCamera');
	if (button) {
		button.addEventListener('click', () => {
			console.log('Button clicked'); 
			animateCamera();
		});
	} else {
		console.error('Button not fondd!'); 
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
		x: 37.15,
		y: 26.12,
		z: 39.125,
		targetX: -6.4,
		targetY: 3.53,
		targetZ: -9.03
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
			navIcon.classList.add('open'); 

			setTimeout(() => {
				navIconContainer.classList.add('visible');
			}, 50);

			// Show nav menu after a short delay
			setTimeout(() => {
				const nav = document.getElementById('nav');

				nav.style.display = 'flex';
				nav.classList.add('visible');
				nav.classList.add('active');

				// Animate nav-items
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
		x: 4.24,
		y: 21.73,
		z: -6.39,
		targetX: 4.22,
		targetY: 21.34,
		targetZ: -13.02
	};

	let cameraPositionX = camera.position.x.toFixed(2);
	let cameraPositionY = camera.position.y.toFixed(2);
	let cameraPositionZ = camera.position.z.toFixed(2);
	let targetPositionX = controls.target.x.toFixed(2);
	let targetPositionY = controls.target.y.toFixed(2);
	let targetPositionZ = controls.target.z.toFixed(2);

	const isCameraInFinalPosition = (cameraPositionX == endPos.x) && (cameraPositionY == endPos.y) && (cameraPositionZ == endPos.z) &&
		(targetPositionX == endPos.targetX) && (targetPositionY == endPos.targetY) && (targetPositionZ == endPos.targetZ);

	if (isCameraInFinalPosition) {
		console.log('Camera is already in the final position');
		showAboutUs();
	} else {
		closeNavMenu(() => {
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

					showAboutUs();
				})
				.start();
		});
	}
}



function animateToContacts() {

	// Close the navigation menu first
	const nav = document.getElementById('nav');
	const navIconContainer = document.querySelector('.nav-icon-container');
	const navIcon = document.getElementById('nav-icon');


	const navItems = Array.from(document.querySelectorAll('.nav-item'));
	navItems.forEach((item, i) => {
		setTimeout(() => {
			item.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)`;
			item.classList.remove('visible');
		}, i * 200); // Delay each item by .2s
	});

	setTimeout(() => {
		nav.classList.remove('visible', 'active');
		nav.style.display = 'none';
		navIcon.classList.remove('open');
	}, navItems.length * 200 + 300); 

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
		x: 0.16,
		y: 13.65,
		z: -7.34,
		targetX: 0.21,
		targetY: 12.62,
		targetZ: -11.70
	};

	let cameraPositionX = camera.position.x.toFixed(2);
	let cameraPositionY = camera.position.y.toFixed(2);
	let cameraPositionZ = camera.position.z.toFixed(2);
	let targetPositionX = controls.target.x.toFixed(2);
	let targetPositionY = controls.target.y.toFixed(2);
	let targetPositionZ = controls.target.z.toFixed(2);

	const isCameraInFinalPosition = (cameraPositionX == endPos.x) && (cameraPositionY == endPos.y) && (cameraPositionZ == endPos.z) &&
		(targetPositionX == endPos.targetX) && (targetPositionY == endPos.targetY) && (targetPositionZ == endPos.targetZ);

	if (isCameraInFinalPosition) {
		console.log('Camera is already in the final position');
		showPopUp();
	} else {
		closeNavMenu(() => {
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
					showPopUp();
				})
				.start();
		});
	}
}

function animateToGallery() {

	// Close the navigation menu first
	const nav = document.getElementById('nav');
	const navIconContainer = document.querySelector('.nav-icon-container');
	const navIcon = document.getElementById('nav-icon');


	const navItems = Array.from(document.querySelectorAll('.nav-item'));
	navItems.forEach((item, i) => {
		setTimeout(() => {
			item.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)`;
			item.classList.remove('visible');
		}, i * 200); // Delay items by .2s
	});

	setTimeout(() => {
		nav.classList.remove('visible', 'active');
		nav.style.display = 'none';
		navIcon.classList.remove('open');
	}, navItems.length * 200 + 300); 

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
		x: -8.7,
		y: 14.05,
		z: -3.57,
		targetX: -8.8,
		targetY: 11,
		targetZ: -3.6
	};
	let cameraPositionX = camera.position.x.toFixed(2);
	let cameraPositionY = camera.position.y.toFixed(2);
	let cameraPositionZ = camera.position.z.toFixed(2);
	let targetPositionX = controls.target.x.toFixed(2);
	let targetPositionY = controls.target.y.toFixed(2);
	let targetPositionZ = controls.target.z.toFixed(2);

	const isCameraInFinalPosition = (cameraPositionX == endPos.x) && (cameraPositionY == endPos.y) && (cameraPositionZ == endPos.z) &&
		(targetPositionX == endPos.targetX) && (targetPositionY == endPos.targetY) && (targetPositionZ == endPos.targetZ);

	if (isCameraInFinalPosition) {
		console.log('Camera is already in the final position');
		showGallery();
	} else {
		closeNavMenu(() => {
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
					showGallery();
				})
				.start();
		});
	}
}

function showNavIconAndMenu() {
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
}

function closeNavMenu(callback) {
	const nav = document.getElementById('nav');
	const navIcon = document.getElementById('nav-icon');

	const navItems = Array.from(document.querySelectorAll('.nav-item'));
	navItems.forEach((item, i) => {
		setTimeout(() => {
			item.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)`;
			item.classList.remove('visible');
		}, i * 200); // Delay items by .2s
	});

	setTimeout(() => {
		nav.classList.remove('visible', 'active');
		nav.style.display = 'none';
		navIcon.classList.remove('open');
		callback();
	}, navItems.length * 200 + 300); 
}