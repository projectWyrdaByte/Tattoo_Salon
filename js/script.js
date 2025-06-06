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
          <a href="https://www.instagram.com/_untamed_ink_/" target="_blank"><img class="logo" alt="logo" src="/images/ig-logo.png" /></a>
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
            <img src="/images/circle.png" alt="profile-logo" />
          </div>
          <div class="profile-info">
            <div class="title row">
              <a href="https://www.instagram.com/_untamed_ink_/" target="_blank" class="ig-name"><h2>_untamed_ink_</h2></a>
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
                Wear your story inked <br />
                Wear it with pride <br />
                untamedink.vercel.app 
              </div>
            </div>
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
            <span>22</span>
            posts
          </li>
          <li>
            <span>6</span>
            followers
          </li>
          <li>
            <span>0</span>
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
          <img alt="gallery-post" class="gallery-post" src="/images/oldschool1.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/oldschool2.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/oldschool3.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/oldschool4.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/oldschool5.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/oldschool6.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/oldschool7.jpeg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/outline1.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/outline2.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/outline3.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/outline4.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/outline5.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/outline6.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/outline7.jpeg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/realism1.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/realism2.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/realism3.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/realism4.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/realism5.jpg" />
        </div>
        <div class="gallery-item">
          <img alt="gallery-post" class="gallery-post" src="/images/realism6.jpeg" />
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
    popUp.classList.add('closed');
    setTimeout(() => {
      popUp.remove(); // Remove pop-up after animation
      showNavIconAndMenu();

    }, 500);
  });




  // Create a modal for displaying images
  const imageModal = document.createElement('div');
  imageModal.classList.add('image-modal');
  imageModal.innerHTML = `
    <div class="image-modal-content">
      <span class="close-button">&times;</span>
      <img class="modal-image" src="" alt="Image">
    </div>
  `;
  document.body.appendChild(imageModal);

  const modalImage = imageModal.querySelector('.modal-image');
  const closeBtn = imageModal.querySelector('.close-button');

  // Close modal when the close button is clicked
  closeBtn.addEventListener('click', () => {
    imageModal.style.display = 'none';
  });

  // Close modal when clicking outside the image
  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      imageModal.style.display = 'none';
    }
  });

  // Add click event to open gallery images in a modal
  const galleryImages = document.querySelectorAll('.gallery-post');
  galleryImages.forEach(galleryImage => {
    galleryImage.addEventListener('click', () => {
      modalImage.src = galleryImage.src;
      imageModal.style.display = 'block';
    });
  });
}




const countries = [
  { "code": "AF", "dial_code": "+93", "number_length": 9 },
  { "code": "AL", "dial_code": "+355", "number_length": 9 },
  { "code": "DZ", "dial_code": "+213", "number_length": 9 },
  { "code": "AS", "dial_code": "+1-684", "number_length": 7 },
  { "code": "AD", "dial_code": "+376", "number_length": 6 },
  { "code": "AO", "dial_code": "+244", "number_length": 9 },
  { "code": "AI", "dial_code": "+1-264", "number_length": 7 },
  { "code": "AQ", "dial_code": "+672", "number_length": 6 },
  { "code": "AG", "dial_code": "+1-268", "number_length": 7 },
  { "code": "AR", "dial_code": "+54", "number_length": 10 },
  { "code": "AM", "dial_code": "+374", "number_length": 8 },
  { "code": "AW", "dial_code": "+297", "number_length": 7 },
  { "code": "AU", "dial_code": "+61", "number_length": 9 },
  { "code": "AT", "dial_code": "+43", "number_length": 10 },
  { "code": "AZ", "dial_code": "+994", "number_length": 9 },
  { "code": "BA", "dial_code": "+387", "number_length": 8 },
  { "code": "BB", "dial_code": "+1-246", "number_length": 7 },
  { "code": "BD", "dial_code": "+880", "number_length": 10 },
  { "code": "BE", "dial_code": "+32", "number_length": 9 },
  { "code": "BF", "dial_code": "+226", "number_length": 8 },
  { "code": "BG", "dial_code": "+359", "number_length": 9 },
  { "code": "BH", "dial_code": "+973", "number_length": 8 },
  { "code": "BI", "dial_code": "+257", "number_length": 8 },
  { "code": "BJ", "dial_code": "+229", "number_length": 8 },
  { "code": "BN", "dial_code": "+673", "number_length": 7 },
  { "code": "BO", "dial_code": "+591", "number_length": 8 },
  { "code": "BR", "dial_code": "+55", "number_length": 10 },
  { "code": "BS", "dial_code": "+1-242", "number_length": 7 },
  { "code": "BT", "dial_code": "+975", "number_length": 8 },
  { "code": "BW", "dial_code": "+267", "number_length": 8 },
  { "code": "BY", "dial_code": "+375", "number_length": 9 },
  { "code": "BZ", "dial_code": "+501", "number_length": 7 },
  { "code": "CA", "dial_code": "+1", "number_length": 10 },
  { "code": "CD", "dial_code": "+243", "number_length": 9 },
  { "code": "CF", "dial_code": "+236", "number_length": 8 },
  { "code": "CG", "dial_code": "+242", "number_length": 9 },
  { "code": "CH", "dial_code": "+41", "number_length": 9 },
  { "code": "CI", "dial_code": "+225", "number_length": 8 },
  { "code": "CL", "dial_code": "+56", "number_length": 9 },
  { "code": "CM", "dial_code": "+237", "number_length": 9 },
  { "code": "CN", "dial_code": "+86", "number_length": 11 },
  { "code": "CO", "dial_code": "+57", "number_length": 10 },
  { "code": "CR", "dial_code": "+506", "number_length": 8 },
  { "code": "CU", "dial_code": "+53", "number_length": 8 },
  { "code": "CV", "dial_code": "+238", "number_length": 7 },
  { "code": "CY", "dial_code": "+357", "number_length": 8 },
  { "code": "CZ", "dial_code": "+420", "number_length": 9 },
  { "code": "DE", "dial_code": "+49", "number_length": 10 },
  { "code": "DJ", "dial_code": "+253", "number_length": 8 },
  { "code": "DK", "dial_code": "+45", "number_length": 8 },
  { "code": "DM", "dial_code": "+1-767", "number_length": 7 },
  { "code": "DO", "dial_code": "+1-809", "number_length": 7 },
  { "code": "DZ", "dial_code": "+213", "number_length": 9 },
  { "code": "EC", "dial_code": "+593", "number_length": 9 },
  { "code": "EE", "dial_code": "+372", "number_length": 8 },
  { "code": "EG", "dial_code": "+20", "number_length": 10 },
  { "code": "ER", "dial_code": "+291", "number_length": 7 },
  { "code": "ES", "dial_code": "+34", "number_length": 9 },
  { "code": "ET", "dial_code": "+251", "number_length": 9 },
  { "code": "FI", "dial_code": "+358", "number_length": 9 },
  { "code": "FJ", "dial_code": "+679", "number_length": 7 },
  { "code": "FM", "dial_code": "+691", "number_length": 7 },
  { "code": "FR", "dial_code": "+33", "number_length": 9 },
  { "code": "GA", "dial_code": "+241", "number_length": 9 },
  { "code": "GB", "dial_code": "+44", "number_length": 10 },
  { "code": "GD", "dial_code": "+1-473", "number_length": 7 },
  { "code": "GE", "dial_code": "+995", "number_length": 9 },
  { "code": "GH", "dial_code": "+233", "number_length": 9 },
  { "code": "GM", "dial_code": "+220", "number_length": 7 },
  { "code": "GN", "dial_code": "+224", "number_length": 8 },
  { "code": "GQ", "dial_code": "+240", "number_length": 9 },
  { "code": "GR", "dial_code": "+30", "number_length": 10 },
  { "code": "GT", "dial_code": "+502", "number_length": 8 },
  { "code": "GW", "dial_code": "+245", "number_length": 7 },
  { "code": "GY", "dial_code": "+592", "number_length": 7 },
  { "code": "HN", "dial_code": "+504", "number_length": 8 },
  { "code": "HR", "dial_code": "+385", "number_length": 9 },
  { "code": "HT", "dial_code": "+509", "number_length": 8 },
  { "code": "HU", "dial_code": "+36", "number_length": 9 },
  { "code": "ID", "dial_code": "+62", "number_length": 10 },
  { "code": "IE", "dial_code": "+353", "number_length": 9 },
  { "code": "IL", "dial_code": "+972", "number_length": 9 },
  { "code": "IN", "dial_code": "+91", "number_length": 10 },
  { "code": "IQ", "dial_code": "+964", "number_length": 10 },
  { "code": "IR", "dial_code": "+98", "number_length": 10 },
  { "code": "IS", "dial_code": "+354", "number_length": 7 },
  { "code": "IT", "dial_code": "+39", "number_length": 10 },
  { "code": "JM", "dial_code": "+1-876", "number_length": 7 },
  { "code": "JO", "dial_code": "+962", "number_length": 9 },
  { "code": "JP", "dial_code": "+81", "number_length": 10 },
  { "code": "KE", "dial_code": "+254", "number_length": 9 },
  { "code": "KG", "dial_code": "+996", "number_length": 9 },
  { "code": "KH", "dial_code": "+855", "number_length": 9 },
  { "code": "KI", "dial_code": "+686", "number_length": 5 },
  { "code": "KM", "dial_code": "+269", "number_length": 7 },
  { "code": "KN", "dial_code": "+1-869", "number_length": 7 },
  { "code": "KP", "dial_code": "+850", "number_length": 9 },
  { "code": "KR", "dial_code": "+82", "number_length": 9 },
  { "code": "KW", "dial_code": "+965", "number_length": 8 },
  { "code": "KZ", "dial_code": "+7", "number_length": 10 },
  { "code": "LA", "dial_code": "+856", "number_length": 8 },
  { "code": "LB", "dial_code": "+961", "number_length": 8 },
  { "code": "LC", "dial_code": "+1-758", "number_length": 7 },
  { "code": "LI", "dial_code": "+423", "number_length": 7 },
  { "code": "LK", "dial_code": "+94", "number_length": 9 },
  { "code": "LR", "dial_code": "+231", "number_length": 8 },
  { "code": "LS", "dial_code": "+266", "number_length": 9 },
  { "code": "LT", "dial_code": "+370", "number_length": 8 },
  { "code": "LU", "dial_code": "+352", "number_length": 9 },
  { "code": "LV", "dial_code": "+371", "number_length": 8 },
  { "code": "LY", "dial_code": "+218", "number_length": 9 },
  { "code": "MA", "dial_code": "+212", "number_length": 9 },
  { "code": "MC", "dial_code": "+377", "number_length": 8 },
  { "code": "MD", "dial_code": "+373", "number_length": 8 },
  { "code": "ME", "dial_code": "+382", "number_length": 8 },
  { "code": "MG", "dial_code": "+261", "number_length": 9 },
  { "code": "MH", "dial_code": "+692", "number_length": 7 },
  { "code": "MK", "dial_code": "+389", "number_length": 8 },
  { "code": "ML", "dial_code": "+223", "number_length": 8 },
  { "code": "MM", "dial_code": "+95", "number_length": 9 },
  { "code": "MN", "dial_code": "+976", "number_length": 8 },
  { "code": "MO", "dial_code": "+853", "number_length": 8 },
  { "code": "MR", "dial_code": "+222", "number_length": 8 },
  { "code": "MT", "dial_code": "+356", "number_length": 8 },
  { "code": "MU", "dial_code": "+230", "number_length": 8 },
  { "code": "MV", "dial_code": "+960", "number_length": 7 },
  { "code": "MW", "dial_code": "+265", "number_length": 9 },
  { "code": "MX", "dial_code": "+52", "number_length": 10 },
  { "code": "MY", "dial_code": "+60", "number_length": 9 },
  { "code": "MZ", "dial_code": "+258", "number_length": 9 },
  { "code": "NA", "dial_code": "+264", "number_length": 9 },
  { "code": "NE", "dial_code": "+227", "number_length": 8 },
  { "code": "NG", "dial_code": "+234", "number_length": 10 },
  { "code": "NI", "dial_code": "+505", "number_length": 8 },
  { "code": "NL", "dial_code": "+31", "number_length": 9 },
  { "code": "NO", "dial_code": "+47", "number_length": 8 },
  { "code": "NP", "dial_code": "+977", "number_length": 10 },
  { "code": "NR", "dial_code": "+674", "number_length": 7 },
  { "code": "NZ", "dial_code": "+64", "number_length": 9 },
  { "code": "OM", "dial_code": "+968", "number_length": 8 },
  { "code": "PA", "dial_code": "+507", "number_length": 8 },
  { "code": "PE", "dial_code": "+51", "number_length": 9 },
  { "code": "PG", "dial_code": "+675", "number_length": 8 },
  { "code": "PH", "dial_code": "+63", "number_length": 10 },
  { "code": "PK", "dial_code": "+92", "number_length": 10 },
  { "code": "PL", "dial_code": "+48", "number_length": 9 },
  { "code": "PT", "dial_code": "+351", "number_length": 9 },
  { "code": "PY", "dial_code": "+595", "number_length": 9 },
  { "code": "QA", "dial_code": "+974", "number_length": 8 },
  { "code": "RO", "dial_code": "+40", "number_length": 9 },
  { "code": "RS", "dial_code": "+381", "number_length": 9 },
  { "code": "RU", "dial_code": "+7", "number_length": 10 },
  { "code": "RW", "dial_code": "+250", "number_length": 9 },
  { "code": "SA", "dial_code": "+966", "number_length": 9 },
  { "code": "SB", "dial_code": "+677", "number_length": 7 },
  { "code": "SC", "dial_code": "+248", "number_length": 7 },
  { "code": "SD", "dial_code": "+249", "number_length": 9 },
  { "code": "SE", "dial_code": "+46", "number_length": 9 },
  { "code": "SG", "dial_code": "+65", "number_length": 8 },
  { "code": "SI", "dial_code": "+386", "number_length": 8 },
  { "code": "SK", "dial_code": "+421", "number_length": 9 },
  { "code": "SL", "dial_code": "+232", "number_length": 8 },
  { "code": "SM", "dial_code": "+378", "number_length": 10 },
  { "code": "SN", "dial_code": "+221", "number_length": 9 },
  { "code": "SO", "dial_code": "+252", "number_length": 8 },
  { "code": "SR", "dial_code": "+597", "number_length": 7 },
  { "code": "SS", "dial_code": "+211", "number_length": 9 },
  { "code": "ST", "dial_code": "+239", "number_length": 7 },
  { "code": "SV", "dial_code": "+503", "number_length": 8 },
  { "code": "SY", "dial_code": "+963", "number_length": 9 },
  { "code": "SZ", "dial_code": "+268", "number_length": 8 },
  { "code": "TD", "dial_code": "+235", "number_length": 8 },
  { "code": "TG", "dial_code": "+228", "number_length": 8 },
  { "code": "TH", "dial_code": "+66", "number_length": 9 },
  { "code": "TJ", "dial_code": "+992", "number_length": 9 },
  { "code": "TL", "dial_code": "+670", "number_length": 7 },
  { "code": "TM", "dial_code": "+993", "number_length": 8 },
  { "code": "TN", "dial_code": "+216", "number_length": 8 },
  { "code": "TO", "dial_code": "+676", "number_length": 5 },
  { "code": "TR", "dial_code": "+90", "number_length": 10 },
  { "code": "TT", "dial_code": "+1-868", "number_length": 7 },
  { "code": "TV", "dial_code": "+688", "number_length": 5 },
  { "code": "TZ", "dial_code": "+255", "number_length": 9 },
  { "code": "UA", "dial_code": "+380", "number_length": 9 },
  { "code": "UG", "dial_code": "+256", "number_length": 9 },
  { "code": "US", "dial_code": "+1", "number_length": 10 },
  { "code": "UY", "dial_code": "+598", "number_length": 8 },
  { "code": "UZ", "dial_code": "+998", "number_length": 9 },
  { "code": "VA", "dial_code": "+379", "number_length": 9 },
  { "code": "VC", "dial_code": "+1-784", "number_length": 7 },
  { "code": "VE", "dial_code": "+58", "number_length": 10 },
  { "code": "VG", "dial_code": "+1-284", "number_length": 7 },
  { "code": "VI", "dial_code": "+1-340", "number_length": 7 },
  { "code": "VN", "dial_code": "+84", "number_length": 9 },
  { "code": "VU", "dial_code": "+678", "number_length": 5 },
  { "code": "WS", "dial_code": "+685", "number_length": 5 },
  { "code": "YE", "dial_code": "+967", "number_length": 9 },
  { "code": "ZA", "dial_code": "+27", "number_length": 9 },
  { "code": "ZM", "dial_code": "+260", "number_length": 9 },
  { "code": "ZW", "dial_code": "+263", "number_length": 9 }
]

function showPopUp() {
  const popUp = document.createElement('div');
  popUp.classList.add('popup');
  popUp.innerHTML = `
    <div class="popup-content">
      <div class="bg">
        <div class="pop-up-contact">
          <div class="box1">
            <div class="title">Contactează-ne</div>
            <div class="info">
              <div>
                <div class="subtitle">Vizitează-ne</div>
                <div>
                  <a href="https://maps.app.goo.gl/PimnCLwfDJouARXq8" target="_blank" class="address">
                    <div class="text">bd. Alexandru cel Bun <br/> or. Ialoveni, R. Moldova</div>
                  </a>
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
                  <div class="text">079 992 446</div>
                  <div class="text">Luni-Vineri: 09:00-18:00</div>
                </div>
              </div>
              <div>
                <div class="subtitle">Social media</div>
                <div class="icons">
                  <a href="https://www.facebook.com/profile.php?id=61573171680739" target="_blank"><img src="/images/facebook.png" class="icon" alt="Facebook Icon"></a>
                  <a href="https://www.pinterest.com/untamedinkstudio/" target="_blank"><img src="/images/pinterest.png" class="icon" alt="Pinterest Icon"></a>
                  <a href="https://www.instagram.com/_untamed_ink_/" target="_blank"><img src="/images/ig.png" class="icon" alt="Instagram Icon"></a>
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
                <div><input type="text" class="input" placeholder="Popescu" name="lastname" required></div>
              </div>
              <div>
                <div class="form_text">Email</div>
                <input type="email" class="input" placeholder="exemplu@gmail.com" name="email" required>
              </div>
              <div>
                <div class="form_text">Nr. de telefon</div>
                <div class="phone">
                  <select id="country"></select>
                  <input class="p_number" name="phone" type="text" id="phone" min="1" placeholder="+37360123456" required>
                </div>             
              </div>
              <div>
                <div class="form_title form_text">Mesaj</div>
                <textarea name="message" placeholder="Mesajul dvs..." required></textarea>
              </div>
              <div class="policy">
                <input type="checkbox" name="privacy" class="checkbox" required>
                <span class="form_text">Aș dori să primesc mai multe informații despre companie. Înțeleg și sunt de acord cu <a class="privacy" href="/pages/privacy_policy.html">Politica de confidențialitate.</a></span>
              </div>
              <div>
                <button class="btn" type="submit">Trimite Mesaj</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="error" id="error"></div>
    <button class="close-popup">&#10006;</button>
  `;

  document.body.appendChild(popUp);

  const closeButton = popUp.querySelector('.close-popup');
  closeButton.addEventListener('click', () => {
    popUp.classList.add('closed');
    setTimeout(() => {
      popUp.remove();
      showNavIconAndMenu();
    }, 500);
  });

  const form = popUp.querySelector('#contact-form');
  const errorDiv = document.getElementById('error');
  const countrySelect = document.getElementById('country');
  const phoneInput = document.getElementById('phone');

  emailjs.init("I3DnisvYrfkPlxjpy");

  // Error box style
  errorDiv.style.position = 'fixed';
  errorDiv.style.top = '10px';
  errorDiv.style.left = '10px';
  errorDiv.style.backgroundColor = '#f8d7da';
  errorDiv.style.color = '#721c24';
  errorDiv.style.padding = '10px';
  errorDiv.style.border = '1px solid #f5c6cb';
  errorDiv.style.borderRadius = '5px';
  errorDiv.style.display = 'none';
  errorDiv.style.zIndex = '1000';

  const closeErrorButton = document.createElement('span');
  closeErrorButton.textContent = '×';
  closeErrorButton.style.cursor = 'pointer';
  closeErrorButton.style.marginLeft = '10px';
  closeErrorButton.style.fontWeight = 'bold';
  closeErrorButton.style.float = 'right';
  closeErrorButton.addEventListener('click', () => {
    errorDiv.style.display = 'none';
  });
  errorDiv.appendChild(closeErrorButton);

  function showError(message) {
    errorDiv.textContent = message;
    errorDiv.appendChild(closeErrorButton);
    errorDiv.style.display = 'block';
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 3000);
  }

  function showSuccessPopup(message) {
    const successDiv = document.createElement('div');
    successDiv.textContent = message;
    successDiv.style.position = 'fixed';
    successDiv.style.top = '10px';
    successDiv.style.right = '10px';
    successDiv.style.backgroundColor = '#d4edda';
    successDiv.style.color = '#155724';
    successDiv.style.padding = '10px 15px';
    successDiv.style.border = '1px solid #c3e6cb';
    successDiv.style.borderRadius = '5px';
    successDiv.style.zIndex = '101000';
    successDiv.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';

    const closeBtn = document.createElement('span');
    closeBtn.textContent = '×';
    closeBtn.style.marginLeft = '10px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.float = 'right';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.onclick = () => successDiv.remove();

    successDiv.appendChild(closeBtn);
    document.body.appendChild(successDiv);

    setTimeout(() => {
      successDiv.remove();
    }, 20000);
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const match = countries.find(c => phoneInput.value.startsWith(c.dial_code));
    const remaining = phoneInput.value.replace(match.dial_code, '').replace(/\D/g, '');

    if (remaining.length !== match.number_length) {
      showError(`Număr invalid. Necesare: ${match.number_length}.`);
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Se trimite...';

    emailjs.sendForm('service_uqjphyf', 'template_qiobdx5', this)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        showSuccessPopup('Mesajul a fost trimis cu succes!');
        form.reset();
        phoneInput.value = defaultCountry ? defaultCountry.dial_code : '';
      }, function (error) {
        console.error('FAILED...', error);
        showError('Eroare la trimiterea mesajului.');
      })
      .finally(() => {
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = 'Trimite Mesaj';
        }, 5000);
      });
  });

  countries.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.code;
    opt.textContent = `${c.code} (${c.dial_code})`;
    countrySelect.appendChild(opt);
  });

  const defaultCountry = countries.find(c => c.code === 'MD');
  if (defaultCountry) {
    countrySelect.value = defaultCountry.code;
    phoneInput.value = defaultCountry.dial_code;
  }

  countrySelect.addEventListener('change', () => {
    const selected = countries.find(c => c.code === countrySelect.value);
    if (selected) {
      const current = phoneInput.value;
      const match = countries.find(c => current.startsWith(c.dial_code));
      const remaining = match ? current.slice(match.dial_code.length).replace(/\D/g, '') : current.replace(/\D/g, '');
      phoneInput.value = `${selected.dial_code}${remaining}`;
    }
  });

  phoneInput.addEventListener('input', () => {
    const match = countries.find(c => phoneInput.value.startsWith(c.dial_code));
    if (match) {
      countrySelect.value = match.code;
    }
  });

  phoneInput.addEventListener('input', function () {
    const selected = countries.find(c => c.code === countrySelect.value);
    if (selected) {
      if (!this.value.startsWith(selected.dial_code)) {
        this.value = selected.dial_code;
      }
      const rest = this.value.slice(selected.dial_code.length).replace(/\D/g, '');
      this.value = selected.dial_code + rest;
    }
  });
}





function showAboutUs() {
  const popUp = document.createElement('div');
  popUp.classList.add('popup');
  popUp.innerHTML = `
        <div class="popup-content">
            <div class="bg">
                <div class="pop-up-abtUs">
                    <div class="abtUs" id="abtUs">
                          <div class="names-column">
                            <div class="name-item" data-person="person1">Mihai</div>
                            <div class="name-item" data-person="person2">Ana</div>
                            <div class="name-item" data-person="person3">Alex</div>
                        </div>
                        <div class="info-profile" style="display: none;"></div> 
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
    popUp.classList.add('closed');
    setTimeout(() => {
      popUp.remove(); // Remove the pop-up after animation
      showNavIconAndMenu();

    }, 500);
  });

  // display artist's info in the pop-up
  function updateInfo(person) {
    const infoDiv = popUp.querySelector('.info-profile');
    infoDiv.innerHTML = `
            <button class="back-button">Înapoi</button>
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
                <h3 class="project-title">Proiecte:</h3>
                <div class="projects">
                    ${person.projects.map(project => `<img src="${project}" class="project" alt="Project">`).join('')}
                </div>
            </div>
        `;
    infoDiv.style.display = 'block';
    popUp.querySelector('.names-column').style.display = 'none';

    // Back button functionality
    const backButton = infoDiv.querySelector('.back-button');
    backButton.addEventListener('click', () => {
      infoDiv.style.display = 'none';
      popUp.querySelector('.names-column').style.display = 'flex';
    });

    // Add click event to open project images in a modal
    const projectImages = infoDiv.querySelectorAll('.project');
    projectImages.forEach(projectImage => {
      projectImage.addEventListener('click', () => {
        modalImage.src = projectImage.src;
        imageModal.style.display = 'block';
      });
    });
  }

  // Add event listeners to name items
  const nameItems = popUp.querySelectorAll('.name-item');
  nameItems.forEach(item => {
    item.addEventListener('click', (event) => {
      const selectedPerson = images[event.target.dataset.person];
      updateInfo(selectedPerson);
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const directNavigation = sessionStorage.getItem('directNavigation');
  const navigateTo = sessionStorage.getItem('navigateTo');

  if (directNavigation === 'true' && navigateTo === 'home') {
    const animateButton = document.getElementById('animateCamera');
    if (animateButton) {
      animateButton.style.display = 'none';
    }
  }

  // Clear the navigation state
  sessionStorage.removeItem('directNavigation');
  sessionStorage.removeItem('navigateTo');
});
