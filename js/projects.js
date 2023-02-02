import projectDatas from "./projectDatas.js";

document.querySelector(".card").innerHTML = projectDatas
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

    `
  )
  .join("");