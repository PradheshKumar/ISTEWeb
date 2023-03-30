const buttons = document.querySelectorAll(".button");
const popup = document.querySelector("#popup");
const popupContent = document.querySelector(".popup-content");
const popupTitle = popup.querySelector(".popup-title");
const popupBody = popup.querySelector(".popup-body");
const popupClose = popup.querySelector(".popup-close");
let open = false;
let body1 = ` <h2>Guidelines</h2><ul><li>Abstract should be less than 500 words</li><li>The idea should be presented in a PowerPoint presentation with no more than 20-25 slides</li><li>Participants must bring their own laptops, and internet access will be provided</li><li>Team size maximum of 4 members</li><li>The presentation should be maximum of 8 minutes and 2 minutes will be QA session</li><li>Participants can bring their own creative templates.</li></ul><h2 class="eventSession">SESSION : FN</h2><div class="eventContact"><p>For Queries Contact:</p><p>Vinish U. Krishnan - Event Coordinator</p><p><i class="fas fa-phone"></i>+91 9360440436</p><p><i class="far fa-envelope"></i>2020me0096@svce.ac.in</p> `,
  body2 =
    '<h2>Guidelines</h2><ul><li>Team size maximum of 4 members</li><li>The project must be:<ul><li>Unique</li><li>Novel</li><li>Demonstratable</li><li>Logically explainable</li><li>Ethically feasible</li><li>Have societal impact</li></ul></li></ul><h2 class="eventSession">SESSION : AN</h2><div class="eventContact"><p>For Queries Contact:</p><p>Vardhini B - Event Coordinator</p><p><i class="fas fa-phone"></i>+91 8105721065</p><p><i class="far fa-envelope"></i> 2020bt0546@svce.ac.in</p></div>',
  body3 = `<h2>Guidelines</h2><ul><li>Prepare the poster with the template given.</li><li> Presentation time 8 mins</li><li> QA time 2 mins</li></ul><h2 class="eventSession">SESSION : AN</h2><div class="eventContact"><p>For Queries Contact:</p><p>Subasree S - Event Coordinator</p><p><i class="fas fa-phone"></i>+91 9123559164</p><p><i class="far fa-envelope"></i>2020bt0569@svce.ac.in</p></div>`,
  body4 = `<h2 class="eventSession">SESSION : FN</h2><div class="eventContact"><p>For Queries Contact:</p><p> K S Nithishwaran  - Event Coordinator</p><p><i class="fas fa-phone"></i>+91 6382587302</p><p><i class="far fa-envelope"></i>2020bt0593@svce.ac.in</p></div>`;
buttons.forEach((button, i) => {
  button.addEventListener("mouseover", () => {
    const title = button.textContent;
    let body;
    document.querySelector("#about").style = "visibility:hidden";
    if (i === 0) {
      body = body1;
    } else if (i === 1) {
      body = body2;
    } else if (i === 2) {
      body = body3;
    } else if (i === 3) {
      body = body4;
    }
    popupTitle.textContent = title;
    popupBody.innerHTML = body;
    popup.style.display = "flex";
    window.addEventListener("click", (e) => {
      console.log(e.target.parentNode.classList);
      if (!e.target.parentNode.classList.contains("eventCont")) {
        return;
      }
      popup.style.display = "none";
      document.querySelector("#about").style = "";
    });
  });
});
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
  document.querySelector("#about").style = "";
});
