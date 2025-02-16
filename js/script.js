showGallery()

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


function displayNav() {
	const nav = document.getElementById('nav');
	nav.style.display = 'flex';
}

function displayBtn() {
	const btn = document.getElementById('animateCamera');
	btn.style.display = 'block';
}



function showGallery() {
	const popUp = document.createElement('div');
	popUp.classList.add('popup');
	popUp.innerHTML = `
        <div class="popup-content">
            <div class="bg">
                <div class="pop-up">
				<div class="box">
 					<h1>Galerie</h1>

                     <!-- Gallery Container -->
                     <div class="gallery-container">
                         <button id="prev">⬅</button>
                         
                         <div class="gallery">
                             <img id="left-img" src="https://source.unsplash.com/random/200x150" alt="Side Image">
                             <img id="main-img" src="https://source.unsplash.com/random/400x300" alt="Main Image">
                             <img id="right-img" src="https://source.unsplash.com/random/200x150" alt="Side Image">
                         </div>
                 
                         <button id="next">➡</button>
                     </div>
                 
                     <!-- Footer with Social Links -->
                     <div class="footer">
                         <p>More on:</p>
                         <div class="social-links">
                             <a href="#">
                                 <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest">
                                 Pinterest
                             </a>
                             <a href="#">
                                 <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram">
                                 Instagram
                             </a>
                         </div>
                     </div>
				</div>
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

}


const images = [
	"https://source.unsplash.com/random/400x300?1",
	"https://source.unsplash.com/random/400x300?2",
	"https://source.unsplash.com/random/400x300?3",
	"https://source.unsplash.com/random/400x300?4",
	"https://source.unsplash.com/random/400x300?5"
];

let currentIndex = 0;

function updateImages() {
	document.getElementById("main-img").src = images[currentIndex];
	document.getElementById("left-img").src = images[(currentIndex - 1 + images.length) % images.length];
	document.getElementById("right-img").src = images[(currentIndex + 1) % images.length];
}

document.getElementById("prev").addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + images.length) % images.length;
	updateImages();
});

document.getElementById("next").addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % images.length;
	updateImages();
});

updateImages();







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




