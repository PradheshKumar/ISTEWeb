const buttons = document.querySelectorAll(".button");
const popup = document.querySelector("#popup");
const popupContent = document.querySelector(".popup-content");
const popupTitle = popup.querySelector(".popup-title");
const popupBody = popup.querySelector(".popup-body");
const popupClose = popup.querySelector(".popup-close");
const officeBtn = document.querySelector(".officeBtn");
let open = false;
let body1 = ` <div class="eventDet"><h2>Guidelines</h2><ul><li>Team size: Maximum of 4 members</li><li>Abstract should be less than 500 words</li><li>The idea should be presented in a PowerPoint presentation with no more than 20-25 slides</li><li>Participants must bring their own laptops, and internet access will be provided</li><li>Team size maximum of 4 members</li><li>The presentation should be maximum of 8 minutes and 2 minutes will be QA session</li><li>Candidates can use their own creative PPT templates for presentation.</li></ul></div><div class="eventContact"><div><p>For Queries Contact:</p><p>Vinish U. Krishnan - Event Coordinator</p><p><i class="fas fa-phone"></i>+91 9360440436</p><p><i class="far fa-envelope"></i>2020me0096@svce.ac.in</p></div><a href="./files/PaperPresentation.docx" download>tEmplAtE</a></div>`,
  body2 =
    '<div class="eventDet"><h2>Guidelines</h2><ul><li>Team size: Maximum of 4 members</li><li>The project must be:<ul><li>Unique</li><li>Novel</li><li>Demonstratable</li><li>Logically explainable</li><li>Ethically feasible</li><li>Have societal impact</li></ul></li></ul></div><div class="eventContact"><div><p>For Queries Contact:</p><p>Vardhini B - Event Coordinator</p><p><i class="fas fa-phone"></i>+91 8105721065</p><p><i class="far fa-envelope"></i> 2020bt0546@svce.ac.in</p></div></div></div>',
  body3 = `<div class="eventDet"><h2>Guidelines</h2><ul><li>Team size: Maximum of 4 members</li><li>Prepare the poster with the template given.</li><li> Presentation time : 8 minutes  </li><li> Q&A Session :2 minutes</li><li>Poster Dimensions: 3 feet x 4 feet</li></ul></div><div class="eventContact"><div><p>For Queries Contact:</p><p>Subasree S - Event Coordinator</p><p><i class="fas fa-phone"></i>+91 9123559164</p><p><i class="far fa-envelope"></i>2020bt0569@svce.ac.in</p></div><a href="./files/PosterPresentation.pptx" download>tEmplAtE</a></div>`,
  body4 = `<div class="eventDet">Design Thinking is a strategy for solving creative problems, focusing on collaboration between designers and users, and emphasising how users think, feel, and behave. This workshop gives insights into the cognitive behaviour of the brain and how it can be stimulated into creative thinking, which can help unlock new opportunities for creating integrated value for end products/solutions.<br><h1></h1><b> The Participants will learn various concepts such as :</b> <ul><li>The process of Design Thinking .</li><li>Its benefits and methodology.</li><li>Themes of thinking and developing design.</li></ul></div><div class="eventContact"><div><p>For Queries Contact:</p><p> K S Nithishwaran  - Event Coordinator</p><p><i class="fas fa-phone"></i>+91 6382587302</p><p><i class="far fa-envelope"></i>2020bt0593@svce.ac.in</p></div></div>`,
  body5 =
    "<table><thead><tr><th>Post</th><th>Name</th><th>Mail Id</th><th>Phone Number</th></tr></thead><tbody><tr><td><b>President</b></td><td>Sakthivel.S</td><td>2020bt0626@svce.ac.in</td><td>+91 9444718474</td></tr><tr><td rowspan='3'><b>Vice-President</b></td><td>Raaghav. V</td><td>2020me0723@svce.ac.in</td><td>+91 9790950298</td></tr><tr><td>Dhakshini. SS</td><td>2020bt0222@svce.ac.in</td><td>+91 7358593293</td></tr><tr><td>Ceralaathan. G</td><td>2020ad0793@svce.ac.in</td><td>+91 9840086030</td></tr><tr><td rowspan='3'><b>General Secretary</b></td><td>Madhumitha. K</td><td>2020bt0824@svce.ac.in</td><td>+91 7358255399</td></tr><tr><td>Rishab. S</td><td>2020me0678@svce.ac.in</td><td>+91 7806827490</td></tr><tr><td>Pavadharni. S</td><td>2020ad0646@svce.ac.in</td><td>+91 6369288100</td></tr><tr><td rowspan='3'><b>Joint Secretary</b></td><td>Jeya Prasath. R</td><td>2020bt0797@svce.ac.in</td><td>+91 9384808332</td></tr><tr><td>Rahul. K</td><td>2020cs0491@svce.ac.in</td><td>+91 8825411863</td></tr><tr><td>Deepika. M</td><td>2020ad0194@svce.ac.in</td><td>+91 9686437389</td></tr><tr><td rowspan='2'><b>Treasurer</b></td><td>Prasanth. S</td><td>2020cs0523@svce.ac.in</td><td>+91 9080436271</td></tr><tr><td>Jyotsna. R</td><td>2020bt0138@svce.ac.in</td><td>+91 9003085074</td></tr></tbody></table>";
// "<table><thead><tr><th>Post</th><th>Name</th><th>Mail Id</th><th>Phone Number</th></tr></thead><tbody><tr><td><b>President</b></td><td>Sakthivel.S</td><td>2020bt0626@svce.ac.in</td><td>9876543210</td></tr><tr><td rowspan='3'><b>Vice-President</b></td><td>Raaghav. V</td><td>2020me0723@svce.ac.in</td><td>9876543210</td></tr><tr><td>Dhakshini. SS</td><td>2020bt0222@svce.ac.in</td><td>9876543210</td></tr><tr><td>Ceralaathan. G</td><td>2020ad0793@svce.ac.in</td><td>9876543210</td></tr><tr><td rowspan='3'><b>General Secretary</b></td><td>Madhumitha. K</td><td>2020bt0824@svce.ac.in</td><td>9876543210</td></tr><tr><td>Rishab. S</td><td>2020me0678@svce.ac.in</td><td>9876543210</td></tr><tr><td>Pavadharni. S</td><td>2020ad0646@svce.ac.in</td><td>9876543210</td></tr><tr><td rowspan='3'><b>Joint Secretary</b></td><td>Jeya Prasath. R</td><td>2020bt0797@svce.ac.in</td><td>9876543210</td></tr><tr><td>Rahul. K</td><td>2020cs0491@svce.ac.in</td><td>9876543210</td></tr><tr><td>Deepika. M</td><td>2020ad0194@svce.ac.in</td><td>9876543210</td></tr><tr><td rowspan='2'><b>Treasurer</b></td><td>Prasanth. S</td><td>2020cs0523@svce.ac.in</td><td>9876543210</td></tr><tr><td>Jyotsna. R</td><td>2020bt0138@svce.ac.in</td><td>9876543210</td></tr></tbody></table>";

officeBtn.addEventListener("mouseenter", () => {
  timer = setTimeout(function () {
    openBox(officeBtn, 4);
  }, 500);
});
officeBtn.addEventListener("click", () => {
  clearTimeout(timer);
  openBox(officeBtn, 4);
});
officeBtn.addEventListener("mouseleave", () => {
  clearTimeout(timer);
});
buttons.forEach((button, i) => {
  let timer;
  button.addEventListener("mouseenter", () => {
    timer = setTimeout(function () {
      openBox(button, i);
    }, 500);
  });
  button.addEventListener("click", () => {
    clearTimeout(timer);
    openBox(button, i);
  });
  button.addEventListener("mouseleave", () => {
    clearTimeout(timer);
  });
});
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
  document.querySelector("#about").style = "";
});

function openBox(button, i) {
  let title = button.textContent;
  let body;
  // document.querySelector("#about").style = "visibility:hidden";
  if (i === 0) {
    body = body1;
  } else if (i === 1) {
    body = body2;
  } else if (i === 2) {
    body = body3;
  } else if (i === 3) {
    body = body4;
  } else if (i === 4) {
    body = body5;
  }
  title = title.split("AN")[0];
  title = title.split("FN")[0];
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
}
