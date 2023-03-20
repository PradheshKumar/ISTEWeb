const buttons = document.querySelectorAll(".button");
const popup = document.querySelector("#popup");
const popupTitle = popup.querySelector(".popup-title");
const popupBody = popup.querySelector(".popup-body");
const popupClose = popup.querySelector(".popup-close");

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    const title = button.textContent;
    let body;
    document.querySelector("#about").style = "visibility:hidden";
    // if (i === 0) {
    //   body =
    //     "A paper presentation is a form of academic presentation in which the presenter delivers a paper or research article on a particular topic to an audience. This type of presentation is often given at academic conferences, symposiums, and seminars, where researchers, scholars, and experts come together to share and discuss their latest research findings and ideas. Paper presentations typically involve a structured oral presentation of the research paper, where the presenter discusses the research question, objectives, methodology, findings, and conclusions. The presenter may use slides or visual aids to support the presentation, and there is usually time for questions and discussion at the end of the presentation.The purpose of a paper presentation is to disseminate research findings, share knowledge and ideas, and receive feedback and comments from peers and experts in the field. It is an opportunity for researchers to showcase their work, engage in scholarly discussions, and establish connections with others who share similar research interests.Paper presentations are an important part of the academic community and provide a platform for researchers to share their work, receive feedback, and contribute to the advancement of knowledge in their field.";
    // } else if (i === 1) {
    //   body =
    //     "Project Exhibition & Models are a way to showcase projects and prototypes to a wider audience, such as the general public, industry professionals, investors, and potential customers. These exhibitions and models can take various forms, including physical models, 3D-printed models, interactive models, and digital simulations.A project exhibition typically involves displaying physical or digital models of projects, along with supporting materials such as posters, brochures, videos, and presentations. The goal is to communicate the key features and benefits of the project to the audience, highlighting its innovative aspects, potential impact, and market viability. Visitors can interact with the models, ask questions, and provide feedback, which can help improve the project and increase its visibility.Models are also an important part of the design process, as they provide a tangible representation of ideas and concepts that can be shared and tested. For example, architects use physical and digital models to visualize and refine building designs, while engineers use prototypes to test and validate product designs. Models can also be used to communicate complex information to stakeholders who may not have technical expertise or background. Overall, project exhibitions and models are important tools for showcasing and communicating the value of projects to a wider audience, promoting innovation, and facilitating collaboration between different stakeholders.";
    // } else if (i === 2) {
    //   body =
    //     "A project presentation is a way to showcase and communicate the details and outcomes of a project to an audience. It typically involves a formal and structured presentation given by the project team to stakeholders, clients, or others who are interested in the project. A project presentation can take different formats depending on the context and purpose of the presentation. It can be a slide deck presentation, a live demonstration, a video presentation, or a combination of different formats. It usually includes an introduction of the project and its goals, a description of the project scope, methodology, and timeline, an overview of the project deliverables, and a discussion of the project outcomes, achievements, and lessons learned.The presentation should be engaging, clear, and concise, and tailored to the audience's needs and interests. It should highlight the key aspects of the project and the value it brings, as well as any challenges or obstacles faced during the project and how they were addressed. It is also important to leave time for questions and feedback from the audience to ensure that they have a good understanding of the project and its impact.";
    // } else if (i === 3) {
    //   body =
    //     "A workshop on Design Thinking is a hands-on and interactive session that introduces participants to the principles and methods of Design Thinking. Design Thinking is a problem-solving approach that emphasizes empathy, creativity, and experimentation to address complex challenges and create innovative solutions. The workshop typically includes a mix of presentations, discussions, and activities that allow participants to practice and apply the Design Thinking process. During the workshop, participants are usually divided into small teams and guided through a Design Thinking project, which involves identifying a real-world problem, conducting user research, ideating and prototyping solutions, and testing and iterating on the prototypes. The workshop facilitator provides guidance, feedback, and support to the teams throughout the process.";
    // }
    popupTitle.textContent = title;
    popupBody.innerHTML += body;
    popup.style.display = "flex";
  });
});

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
  document.querySelector("#about").style = "";
});
