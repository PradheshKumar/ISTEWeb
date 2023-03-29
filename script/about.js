const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
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
      if (i == 0 || i == 1)
        panel.querySelector("img").style =
          "transform: rotate(270deg) scale(2);";
      panel.classList.remove("active");
    });
  };
});
