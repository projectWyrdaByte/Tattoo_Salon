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

                    <div class="carousel-container">
        				<div id="carousel" class="carousel">
            <button id="prev"><img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="arrow"></button>

            <div class="slide">
                <img src="/images/tattoo1.jpg">
			</div>
            <div class="prev slide">
                <img src="/images/tattoo2.jpeg">
            </div>
            <div class="selected slide">
                <img src="/images/tattoo3.jpeg">
            </div>
            <div class="next slide">
                <img src="/images/tattoo4.jpeg">
            </div>
            <div class="slide">
                <img src="/images/tattoo5.jpeg">
			</div>
        </div>
            <button id="next"><img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="arrow"></button>
    </div>
                 
                     <!-- Footer with Social Links -->
                     <div class="footer">
                         <div class="social-links">
                             <a href="#">
                                 <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="Pinterest">
                                 Facebook
                             </a>
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




    function moveToSelected(direction) {
        let selected = document.querySelector(".selected");
        let prev = selected.previousElementSibling;
        let next = selected.nextElementSibling;

        if (direction === "next") {
            if (next) {
                selected.classList.remove("selected");
                selected.classList.add("prev");

                next.classList.remove("next");
                next.classList.add("selected");

                if (prev) prev.classList.remove("prev");

                let newNext = next.nextElementSibling;
                if (newNext) {
                    newNext.classList.add("next");
                }
            }
        } else if (direction === "prev") {
            if (prev) {
                selected.classList.remove("selected");
                selected.classList.add("next");

                prev.classList.remove("prev");
                prev.classList.add("selected");

                if (next) next.classList.remove("next");

                let newPrev = prev.previousElementSibling;
                if (newPrev) {
                    newPrev.classList.add("prev");
                }
            }
        }

        updateButtons();
    }

    function updateButtons() {
        let prevButton = document.getElementById("prev");
        let nextButton = document.getElementById("next");
        let firstSlide = document.querySelector(".carousel .slide:first-child");
        let lastSlide = document.querySelector(".carousel .slide:last-child");

        // Disable/Enable buttons if at the start or end
        if (document.querySelector(".selected") === firstSlide) {
            prevButton.style.visibility = "hidden";
        } else {
            prevButton.style.visibility = "visible";
        }

        if (document.querySelector(".selected") === lastSlide) {
            nextButton.style.visibility = "hidden";
        } else {
            nextButton.style.visibility = "visible";
        }
    }

    document.getElementById("prev").addEventListener("click", () => moveToSelected("prev"));
    document.getElementById("next").addEventListener("click", () => moveToSelected("next"));



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

// Make sure 'images' is declared and initialized at the beginning of the script
const images = {
    "person1": {
        "name": "Mihai",
        "age": 25,
        "loves": "Music",
        "specializes": "tattoos",
        "image": "/images/artist_1.jpg",
        "projects": ["https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg", "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg"]
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
                <div class="pop-up">
                    <div class="abtUs" id="abtUs">
                        <div class="radio-group">
                            <label>
                              <input type="radio" name="option" value="person1" class="radio-input" checked>
                              <div class="radio-button">Mihai</div>
                            </label>
                            <label>
                              <input type="radio" name="option" value="person2" class="radio-input">
                              <div class="radio-button">Ana</div>
                            </label>
                            <label>
                              <input type="radio" name="option" value="person3" class="radio-input">
                              <div class="radio-button">Alex</div>
                            </label>
                        </div>
                        <div class="info">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="close-popup">Close</button>
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
                    <h2>${person.name}</h2>
                    <p>Vârsta: ${person.age}</p>
                    <p>Îi place: ${person.loves}</p>
                    <p>Specializat în: ${person.specializes}</p>
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
