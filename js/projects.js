import projectDatas from './projectDatas.js';

document.querySelector('.card').innerHTML = projectDatas
  .map(
    (data) => `
    <section class="${data.class}" id="portfolio">
        <div class="project-img section-1">
          <img class='projesct-one-img' src="${data.imageMob}" alt="work background">
          <img class='image-dektop-1' src="${data.imageDesk}" alt="work background">
        </div>

      <div class="project-witeup section-1">
          <div class="projectone-header">
            <h2>${data.title}</h2>
          </div>
          <div class="projectone-header-Dk">
            <h2>${data.title}</h2>
          </div>

      <div class='project-details-container'>
            <ul class="project-details">
              <li>
                <h4 class="projectHeading">${data.canopy[0]}</h4>
              </li>
              <li><img src="${data.dot}" alt="counter"></li>
              <li>
                <p>${data.canopy[1]}</p>
              </li>
              <li><img src="${data.dot}" alt="counter"></li>
              <li>
                <p>${data.canopy[2]}</p>
              </li>
            </ul>

      <ul class="project-details-Dk">
              <li>
                <h4 class="projectHeading">${data.canopy[0]}</h4>
              </li>
              <li><img src="${data.dot}" alt="counter"></li>
              <li>
                <p>${data.canopy[1]}</p>
              </li>
              <li><img src="${data.dot}" alt="counter"></li>
              <li>
                <p>${data.canopy[2]}</p>
              </li>
            </ul>
          </div>
          <div class="project-text">
            <p>${data.para1}</p>
          </div>

      <div class="project-text-DK">
            <p>${data.para1}</p>
          </div> 


      <ul class="project-program-laguages">
            <li class="program-language">
              <p>${data.tech[0]}</p>
            </li>
            <li class="program-language">
              <p>${data.tech[1]}</p>
            </li>

            <li class="program-language-javascript">
              <p>${data.tech[2]}</p>
            </li>
          </ul> 

      <ul class="project-program-laguages-DK">
            <li class="program-language">
              <p>${data.tech[0]}</p>
            </li>
            <li class="program-language">
              <p>${data.tech[1]}</p>
            </li>

            <li class="program-language-javascript">
              <p>${data.tech[0]}</p>
            </li>
          </ul>
      
          <button type="submit" class="call-to-action" id="${data.id}">See Project</button>

        </div>

      </section>
      <div class="workDivider"></div>

    `,
  )
  .join('');

const displayPopup = (data) => {
  const popupSection = document.querySelector('#popups');
  popupSection.innerHTML = `
     <div class="modal-container">
            <div class="modal-head">
              <h1>${data.title}</h1>
              <button class="close">&times; </button>
            </div>
  
            <ul class="modal-dec">
              <li>${data.canopy[0]}</li>
              <li>
                <img class="modal-dot" src="./assets/icons/Counter.svg" alt="dot">
              </li>
              <li>${data.canopy[1]}</li>
              <li>
                <img class="modal-dot" src="./assets/icons/Counter.svg" alt="dot">
              </li>
              <li>${data.canopy[2]}</li>
            </ul>
            <div>
              <img class="modal-img modal-img-MO" src="${data.imageMob}" alt="project images">
              <img class="modal-img modal-img-DK" src="${data.imageDesk}" alt="project images">
            </div>
            <div class="modal-footer">
  
  
              <div class="modal-text footer-1">${data.para}</div>
              <div class="footer-2">
                <ul class="modal-technology">
                  <li class="tech">
                    <p>${data.tech[0]}</p>
                  </li>
                  <li class="tech">
                    <p>${data.tech[1]}</p>
                  </li>
  
                  <li class="tech javascript">
                    <p>${data.tech[2]}</p>
                  </li>
                </ul>
  
                <div class="modal-button">
                  <a href="${data.live}" class="modal-link">
                    <p>See Live</p>
                    <img src="./assets/icons/Icon.svg" alt="icons">
                  </a>
  
                  <a href="${data.source}" class="modal-link">
                    <p>See Source</p>
                    <img src="./assets/icons/Vector.svg" alt="icons">
                  </a>
                </div>
              </div>
            </div>
          </div>
  
    `;
  popupSection.style.display = 'block';
  popupSection.querySelectorAll('.close').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelector('.popups').style.display = 'none';
    });
  });
};

const projectButtons = document.querySelectorAll('.call-to-action');
projectButtons.forEach((projectButton) => {
  projectButton.addEventListener('click', (e) => {
    const index = parseInt(e.target.id, 10);

    displayPopup(projectDatas[index]);
  });
});