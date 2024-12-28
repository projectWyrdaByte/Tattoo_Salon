document.addEventListener('DOMContentLoaded', () => {

	const navIcon = document.getElementById('nav-icon');
	const nav = document.getElementById('nav');

	navIcon.addEventListener('click', () => {
		navIcon.classList.toggle('open');
		nav.classList.toggle('active');
	});

	displayNav();
	displayBtn();
});

function displayNav() {
	const nav = document.getElementById('nav');
	nav.style.display = 'flex';
}

function displayBtn() {
	const btn = document.getElementById('animateCamera');
	btn.style.display = 'block';
}



function animateCamera() {
	console.log('Animation started');
	
	// Hide the animation button immediately
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
			
			// Show nav icon first as an X
			const navIconContainer = document.querySelector('.nav-icon-container');
			const navIcon = document.getElementById('nav-icon');
			navIconContainer.style.display = 'block';
			navIcon.classList.add('open'); // Start as X
			
			// Small delay to ensure display: block has taken effect
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
					}, 800 + (i * 200)); // 800ms initial delay, then 200ms between each item
				});
			}, 500);
		})
		.start();
}