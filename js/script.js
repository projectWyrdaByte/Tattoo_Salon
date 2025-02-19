

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
<button class="close-popup">&#10006;</button>

				<div class="box">
 					<main><div class="container">
      <div class="fixed">
        <div class="nav-content">
          <a href="https://www.instagram.com/_untamed_ink_/"><img class="logo" alt="logo" src="/images/ig-logo.png" /></a>
          <div>
            <button class="btn-primary">Log In</button>
            <button class="btn-ig">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
    
      <header>
        <div class="header-wrap">
          <div class="profile-pic">
            <img src="/images/artist_1.jpg" alt="profile-logo" />
          </div>
          <div class="profile-info">
            <div class="title row">
              <h2>_untamed_ink_</h2>
              <span class="verfied-icon"></span>
              <button class="btn-primary">Follow</button>
            </div>
            <div class="desktop-only">
              <div class="details row">
                <ul>
                  <li><span>22</span> posts</li>
                  <li><span>6</span> followers</li>
                  <li><span>0</span> following</li>
                </ul>
              </div>
              <div class="descriptions row last">
                <span>
                  Everyone has a story to tell.
                  <br />
                  Tag <a>#ShotoniPhone</a> to take part.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="profile-info mobile-only">
          <div class="descriptions row">
            <h1>apple</h1>
            <span>
              Everyone has a story to tell.
              <br />
              Tag <a>#ShotoniPhone</a> to take part.
            </span>
          </div>
        </div>
      </header>

      

      <div class="desktop-only">
        <div class="tabs">
          <div class="tab-item active" style="margin-right: 60px;">
            <svg
              aria-label="Posts"
              class="_8-yf5"
              fill="#262626"
              height="12"
              viewBox="0 0 48 48"
              width="12"
            >
              <path
                clip-rule="evenodd"
                d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span>POSTS</span>
          </div>
          <div class="tab-item" style="margin-right: 60px;">
            <svg
              aria-label="Posts"
              class="_8-yf5"
              fill="#8e8e8e"
              height="12"
              viewBox="0 0 48 48"
              width="12"
            >
              <path
                d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"
              ></path>
            </svg>
            <span>IGTV</span>
          </div>
          <div class="tab-item">
            <svg
              aria-label="Tagged"
              class="_8-yf5"
              fill="#8e8e8e"
              height="12"
              viewBox="0 0 48 48"
              width="12"
            >
              <path
                d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"
              ></path>
            </svg>
            <span>TAGGED</span>
          </div>
        </div>
      </div>
      <div class="mobile-tabs mobile-only">
        <ul>
          <li>
            <div>722</div>
            posts
          </li>
          <li>
            <div>25.1m</div>
            followers
          </li>
          <li>
            <div>6</div>
            following
          </li>
        </ul>
        <div class="actions">
          <svg
            aria-label="Posts"
            class="_8-yf5"
            fill="rgb(0, 149, 246)"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              clip-rule="evenodd"
              d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <svg
            aria-label="Posts"
            class="_8-yf5"
            fill="#8e8e8e"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"
            ></path>
          </svg>
          <svg
            aria-label="Tagged"
            class="_8-yf5"
            fill="#8e8e8e"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"
            ></path>
          </svg>
        </div>
      </div>

      <div class="gallery">
        <div class="gallery-item">
          <img alt="gallery-post" src="/images/artist_1.jpg" />
          <span class="media-icon"></span>
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" src="/images/tattoo1.jpg" />
          <span class="media-icon"></span>
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" src="/images/artist_2.jpg" />
          <span class="media-icon"></span>
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" src="/images/tattoo2.jpeg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" src="/images/tattoo3.jpeg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" src="/images/tattoo4.jpeg" />
          <span class="media-icon"></span>
        </div>
      </div>
    </main>

                </div>
            </div>

        </div>
	`
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







function showPopUp() {
	const popUp = document.createElement('div');
	popUp.classList.add('popup');
	popUp.innerHTML = `
        <div class="popup-content">
            <div class="bg">
                <div class="pop-up-contact">
                    <div class="box1">
                        <div class="title">Get in touch</div>
                        <div class="info">
                            <div>
                                <div class="subtitle">Vizitează-ne</div>
                                <div>
                                    <div class="text">bd. Alexandru cel Bun <br/> or. Ialoveni, R. Moldova</div>
                                </div>
                            </div>
                            <div>
                                <div class="subtitle">Contactează-ne</div>
                                <div>
                                    <div class="text">Noi așteaptăm mesajul tău la adresa:</div>
                                    <div class="text">untamedinkstudio@gmail.com</div>
                                </div>
                            </div>
                            <div>
                                <div class="subtitle">Sună la</div>
                                <div>
                                    <div class="text">060 000 000</div>
                                    <div class="text">Luni-Vineri: 09:00-18:00</div>
                                </div>
                            </div>
                            <div>
                                <div class="subtitle">Social media</div>
                                <div class="icons">
                                    <a href="https://www.facebook.com/profile.php?id=61573171680739" target="_blank"><img src="/images/facebook.png" class="icon"
                                            alt="Facebook Icon"></a>
                                    <a href="https://www.pinterest.com/untamedinkstudio/" target="_blank"><img src="/images/pinterest.png" class="icon"
                                            alt="Pinterest Icon"></a>
                                    <a href="https://www.instagram.com/_untamed_ink_/" target="_blank"><img src="/images/ig.png" class="icon"
                                            alt="Instagram Icon"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Form -->
                    <div class="box2">
                        <div class="title">Programeazâ-te</div>
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
                                <span class="form_text">Aș dori să primesc mai multe informații despre companie. Înțeleg și sunt de acord cu <a href="/pages/privacy_policy.html">Politica de confidențialitate.</a>.</span>
                            </div>
                            <div>
                                <button class="btn" type="submit">Trimite Mesaj</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
	<button class="close-popup">&#10006;</button>`
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

// Make sure 'images' is declared and initialized at the beginning of the script
const images = {
	"person1": {
		"name": "Mihai",
		"age": 25,
		"loves": "Music",
		"specializes": "tattoos",
		"image": "/images/artist_1.jpg",
		"projects": ["https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg"]
	},
	"person2": {
		"name": "Ana",
		"age": 23,
		"loves": "Art",
		"specializes": "piercings",
		"image": "/images/artist_2.jpg",
		"projects": ["https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg"]
	},
	"person3": {
		"name": "Alex",
		"age": 27,
		"loves": "Nature",
		"specializes": "tattoos",
		"image": "/images/artist_3.jpg",
		"projects": ["https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg"]
	}
};

function showAboutUs() {
	const popUp = document.createElement('div');
	popUp.classList.add('popup');
	popUp.innerHTML = `
        <div class="popup-content">
            <div class="bg">
                <div class="pop-up-abtUs">
                    <div class="abtUs" id="abtUs">
                        <div class="radio-group">
                            <label>
                              <input type="radio" name="option" value="person1" class="radio-input" checked>
                              <div class="radio-button radio1">Mihai</div>
                            </label>
                            <label>
                              <input type="radio" name="option" value="person2" class="radio-input">
                              <div class="radio-button">Ana</div>
                            </label>
                            <label>
                              <input type="radio" name="option" value="person3" class="radio-input">
                              <div class="radio-button radio2">Alex</div>
                            </label>
                        </div>
                        <div class="info">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="close-popup">&#10006;</button>
    `;

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

	// Function to update the .info div with the selected person's details
	function updateInfo(person) {
		const infoDiv = popUp.querySelector('.info');
		infoDiv.innerHTML = `
            <div class="data">
                <div class="image">
                    <img src="${person.image}" alt="${person.name}" class="person-image">
                </div>
                <div class="details">
                    <div class="person-name">${person.name}</div>
                    <div>Vârsta: ${person.age}</div>
                    <div>Îi place: ${person.loves}</div>
                    <div>Specializat în: ${person.specializes}</div>
                </div>
            </div>
            <div class="projects-container">
                <h3>Proiecte:</h3>
                <div class="projects">
                    ${person.projects.map(project => `<img src="${project}" class="project" id="project" alt="Project">`).join('')}
                </div>
            </div>
        `;
	}

	// Initial update with the first person's details
	updateInfo(images.person1);

	// Add event listeners to radio buttons
	const radioButtons = popUp.querySelectorAll('.radio-input');
	radioButtons.forEach(radio => {
		radio.addEventListener('change', (event) => {
			const selectedPerson = images[event.target.value];
			updateInfo(selectedPerson);
		});
	});
}
