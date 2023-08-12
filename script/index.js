import data from "./data.js";

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document
  .querySelector("#resume-about-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open(
      "https://drive.google.com/file/d/1wc9MMzWtt3nikwIZDKUz84ve8OA9EZ6D/view?usp=sharing",
      "_blank",
    );
  });

document
  .querySelector("#blog-forestessentindia")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open(
      "https://medium.com/@deepanshugulia04/how-does-a-commerce-person-make-a-website-7ef4c476f6b1",
      "_blank",
    );
  });

document
  .querySelector("#blog-nike")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open(
      "https://medium.com/@deepanshugulia04/journey-to-the-clone-of-nike-com-8cec1bbc099d",
      "_blank",
    );
  });

document.querySelector("#mailto").addEventListener("click", function (event) {
  event.preventDefault();
  window.open("mailto:deepanshugulia04@gamil.com", "_blank");
});

document
  .querySelector("#linkedin-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open("https://www.linkedin.com/in/deepanshu-gulia/", "_blank");
  });

document
  .querySelector("#github-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open("https://github.com/Deepu2560", "_blank");
  });

document
  .querySelector("#twitter-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open("https://twitter.com/DeepanshuGulia", "_blank");
  });

document
  .querySelector("#medium-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open("https://medium.com/@deepanshugulia04", "_blank");
  });

let currentProject = 0;

projectsDisplay(currentProject);

document.querySelector("#next-project").addEventListener("click", function () {
  if (currentProject < data.length - 1) {
    currentProject += 1;
    projectsDisplay(currentProject);
  }
});

document.querySelector("#prev-project").addEventListener("click", function () {
  if (currentProject > 0) {
    currentProject -= 1;
    projectsDisplay(currentProject);
  }
});

document.querySelector(
  "#total-projects",
).innerText = `Total ${data.length} Projects`;

function projectsDisplay(index) {
  let elem = data[index];

  var body = document.getElementById("project-display-main-div");
  body.innerHTML = null;

  var div = document.createElement("div");
  div.id = elem.id;

  var title = document.createElement("h2");
  title.innerText = elem.name;
  title.style.color = "#04aa6d";

  var description = document.createElement("div");

  var descriptionHead = document.createElement("h4");
  descriptionHead.innerText = "Description :- ";

  var descriptionPara = document.createElement("p");
  descriptionPara.innerText = elem.discription;

  description.append(descriptionHead, descriptionPara);

  var tech = document.createElement("p");
  tech.innerText = "Tech Stack :- " + elem.tech;

  var featureDiv = document.createElement("div");
  featureDiv.setAttribute("class", "product-features");

  var h4 = document.createElement("h4");
  h4.innerText = "features:-";

  var ul = document.createElement("ul");

  elem.features.map((featr) => {
    var li = document.createElement("li");
    li.innerText = featr;
    ul.append(li);
  });

  featureDiv.append(h4, ul);

  var deployedGithubLinks = document.createElement("div");
  deployedGithubLinks.className = "deploy-source-code";

  var gitHubButton = document.createElement("a");
  gitHubButton.innerHTML = "Github Link (Click me)";

  gitHubButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.open(elem.github, "_blank");
  });

  var deployedLink = document.createElement("a");
  deployedLink.innerHTML = "Deployed Link (Click me)";

  deployedLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.open(elem.deploy, "_blank");
  });

  deployedGithubLinks.append(gitHubButton, deployedLink);

  div.append(title, description, tech, featureDiv, deployedGithubLinks);

  var img = document.createElement("img");
  img.setAttribute("src", elem.image);

  body.append(img, div);
}
