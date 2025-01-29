document.addEventListener('DOMContentLoaded', () => {
	const navIcon = document.getElementById('nav-icon');
	const nav = document.getElementById('nav');

	navIcon.addEventListener('click', () => {
		console.log('Before toggle - Nav Icon Open:', navIcon.classList.contains('open'));
		console.log('Before toggle - Nav Active:', nav.classList.contains('active'));

		navIcon.classList.toggle('open');
		nav.classList.toggle('active');

		console.log('After toggle - Nav Icon Open:', navIcon.classList.contains('open'));
		console.log('After toggle - Nav Active:', nav.classList.contains('active'));
	});

	displayNav();
	displayBtn();
});

showGallery()

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

function showGallery(){
	const popUp = document.createElement('div');
	popUp.classList.add('popup');
	popUp.innerHTML = `
        <div class="popup-content">
            <div class="bg">
                <div class="pop-up">
                    
 
                </div>
            </div>
        </div>
	<button class="close-popup">Close</button>`
		;

	// Append the pop-up to the body
	document.body.appendChild(popUp);

	// Close button functionality
	const closeButton = popUp.querySelector('.close-popup');
	closeButton.addEventListener('click', () => {
		popUp.classList.add('closed'); // This triggers the closing animation
		setTimeout(() => {
			popUp.remove(); // Remove the pop-up after animation
		}, 500); // Time to wait before removing element
	});

}

function animateToAboutUs() {
	console.log('Animation to Contacts started');

	// Close the navigation menu first
	const nav = document.getElementById('nav');
	const navIconContainer = document.querySelector('.nav-icon-container');
	const navIcon = document.getElementById('nav-icon');

	console.log('Before closing nav menu - Nav visibility:', nav.style.display);

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
		x: -26.05,
		y: 47.78,
		z: 4.98,
		targetX: -61.66,
		targetY: 44.77,
		targetZ: 4.94
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

			
		})
		.start();
}

function animateToContacts() {
	console.log('Animation to Contacts started');

	// Close the navigation menu first
	const nav = document.getElementById('nav');
	const navIconContainer = document.querySelector('.nav-icon-container');
	const navIcon = document.getElementById('nav-icon');

	console.log('Before closing nav menu - Nav visibility:', nav.style.display);

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
						console.log('Animating item', i);
						item.classList.add('visible');
					}, 800 + (i * 200));
				});
			}, 500);

			setTimeout(() => {
				console.log('Showing pop-up...');
				showPopUp();
			}, 500);
		})
		.start();
}

function showPopUp() {
	const popUp = document.createElement('div');
	popUp.classList.add('popup');
	popUp.innerHTML = `
        <div class="popup-content">
            <div class="bg">
                <div class="pop-up">
                    <div class="box1">
                        <div class="title">Get in touch</div>
                        <div class="info">
                            <div>
                                <div class="subtitle">Visit us</div>
                                <div>
                                    <div class="text">Come say hello at our office HQ.</div>
                                    <div class="text">Basarabia 4</div>
                                </div>
                            </div>
                            <div>
                                <div class="subtitle">Chat to us</div>
                                <div>
                                    <div class="text">Our friendly team is here to help.</div>
                                    <div class="text">hello@paysphere.com</div>
                                </div>
                            </div>
                            <div>
                                <div class="subtitle">Call us</div>
                                <div>
                                    <div class="text">Mon-Fri from 8am to 5pm.</div>
                                    <div class="text">060 000 000</div>
                                </div>
                            </div>
                            <div>
                                <div class="subtitle">Social media</div>
                                <div class="icons">
                                    <a href="https://www.facebook.com/"><img src="/images/facebook.png" class="icon"
                                            alt="Facebook Icon"></a>
                                    <a href="https://www.pinterest.com/"><img src="/images/pinterest.png" class="icon"
                                            alt="Pinterest Icon"></a>
                                    <a href="https://www.instagram.com/_untamed_ink_/"><img src="/images/ig.png" class="icon"
                                            alt="Instagram Icon"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Form -->
                    <div class="box2">
                        <div class="title">Programează-te</div>
                        <form id="contact-form">
                            <div class="firstname">
                                <div class="form_text">Prenume</div>
                                <div><input type="text" class="input" placeholder="Ion" name="name" required></div>
                            </div>
                            <div class="lastname">
                                <div class="form_text">Nume</div>
                                <div><input type="text" class="input" placeholder="Popescu" name="lastname" required>
                                </div>
                            </div>
                            <div>
                                <div class="form_text">Email</div>
                                <input type="email" class="input" placeholder="exemplu@gmail.com" name="email" required>
                            </div>
                            <div>
                                <div class="form_text">Nr. de telefon</div>
                                <div><input type="number" class="input" placeholder="060000000" name="phone" required></div>
                            </div>
                            <div>
                                <div class="form_title form_text">Mesaj</div>
                                <textarea name="message" placeholder="Mesajul dvs..." required></textarea>
                            </div>
                            <div class="policy">
                                <input type="checkbox" name="privacy" class="checkbox" required>
                                <span class="form_text">I'd like to receive more information about the company. I understand
                                    and agree to the <a href="/pages/privacy_policy.html">Privacy Policy</a>.</span>
                            </div>
                            <div>
                                <button class="btn" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
	<button class="close-popup">Close</button>`
		;

	// Append the pop-up to the body
	document.body.appendChild(popUp);

	// Close button functionality
	const closeButton = popUp.querySelector('.close-popup');
	closeButton.addEventListener('click', () => {
		popUp.classList.add('closed'); // This triggers the closing animation
		setTimeout(() => {
			popUp.remove(); // Remove the pop-up after animation
		}, 500); // Time to wait before removing element
	});

	// EmailJS Connection
	const form = popUp.querySelector('#contact-form');

	emailjs.init("I3DnisvYrfkPlxjpy");

	form.addEventListener('submit', function (event) {
		event.preventDefault();

		emailjs.sendForm('service_uqjphyf', 'template_qiobdx5', this)
			.then(function (response) {
				console.log('SUCCESS!', response.status, response.text);
				alert('Your message has been sent!');
			}, function (error) {
				console.error('FAILED...', error);
				alert('Failed to send the message.');
			});
	});
}