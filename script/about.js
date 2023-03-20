const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.querySelectorAll("p,ul").forEach((p) => {
      p.style.display = "";
    });
    if (panel.querySelector("img"))
      panel.querySelector("img").style = "display:none";
    panel.classList.add("active");
  });
  const removeActiveClasses = () => {
    panels.forEach((panel, i) => {
      panel.querySelectorAll("p,ul").forEach((p) => {
        p.style.display = "none";
      });
      if (panel.querySelector("img")) panel.querySelector("img").style = "";
      if (i == 0)
        panel.querySelector("img").style =
          "transform: rotate(270deg) scale(1.5);";
      panel.classList.remove("active");
    });
  };
});
