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
      "https://drive.google.com/file/d/1V526SmC1U3MukLDV15Z1sk0pDXrhRx1M/view?usp=sharing",
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

let data = [
  {
    id: "project-forestessentialindia",
    name: "Clone Forest Essential India",
    discription:
      "In this project, we made a clone of forestessentialindia.com. We made a 90%-95% clone of the official website. We made a fully dynamic website in which you can go over through all projects, you can sign in and signup, and much more.",
    tech: "HTML, CSS, Javascript, node.js",
    features: [
      "Dynamic navbar and footer",
      "Bespoke services and About us page",
      "Dynamic Cart and Wishlist page",
      "Payment and Gateway",
    ],
    image: "../image/forestessentialindia.jpeg",
    deploy: "https://forestessentialindiaclone.netlify.app/",
    github: "https://github.com/Deepu2560/forestessentialsindia",
  },
  {
    id: "project-nike-html",
    name: "Clone Nike",
    discription:
      "In this project, we made a clone of Nike.com. On our website, you get an overview page of every single category and on that page, you get the option to move for shoes or clothes of that category. On our website, you get a dynamic payment and gateway page too.",
    tech: "HTML, CSS, Javascript, Node.js, ES6 (advanse js), Import and export (advance js)",
    features: [
      "Dynamic Sign/Signin Page",
      "Dynamic Filter and Sort features",
      "Sneakers Page",
    ],
    image: "../image/nike.jpg",
    deploy: "https://nikemasaischoolclone.netlify.app/",
    github: "https://github.com/Deepu2560/Nike",
  },
  {
    id: "project-nike-ejs",
    name: "Clone Nike.com",
    discription:
      "In this project, we again made a clone of Nike.com. In this we used advanced javascript, MongoDB, ExpressJS, and ejs, this is the difference from the last Nike clone. We made a database on our own and we fetch that to get products data. All functionality is the same as previous.",
    tech: "Ejs, CSS, Javascript, Node.js, MongoDB, ExpressJS, Heroku",
    features: [
      "Dynamic Sign/Signin Page",
      "Made by use of backend",
      "Pages made in ejs",
      "Dynamic database made by mongodb and deployed heroku",
    ],
    image: "../image/nikeindia.jpg",
    deploy: "https://nikemasaischoolclone.netlify.app/",
    github: "https://github.com/Deepu2560/Nike",
  },
  {
    id: "project-netflix",
    name: "Clone Netflix",
    discription:
      "In this project, we used react, javascript, scss framework to build; this website. We made this clone 1 week and in our team we are 5 members. You can only watch trailers of movies in this clone.",
    tech: "REACT, MONGODB, SASS, NodeJS, Express",
    features: [
      "Dynamic Modern design Signup/Signup Page",
      "90% clone of original Netflix",
      "Web application made by use of react",
      "Dynamic database made by mongodb, express and heroku",
    ],

    image: "../image/netflix.jpg",
    deploy: "https://netflix-clone-eight-psi.vercel.app/",
    github: "https://github.com/Deepu2560/Netflix",
  },
  {
    id: "project-school-admin",
    name: "School Admin ",
    discription:
      "This is a school admin web application. This is a full-stack MERN project. I used react and redux for frontend, Material UI for backend, exprss and mongodb for backend. I deployed backend on heroku and frontend on vercel.",
    tech: "React, Redux, Material UI, Express, MongoDB, Node.js, Javascript, HTML, CSS",
    features: [
      "Used react for frontend and mongodb,exress for backend",
      "fully dynamic interface",
      "User friendly",
      "only admin can login(for testing purpose login credential are on github repo)",
    ],
    image: "../image/schoolAdmin.png",
    deploy: "https://teacher-manager-deepu2560.vercel.app/",
    github: "https://github.com/Deepu2560/school-admin",
  },
  {
    id: "project-hire-a-cook",
    name: "Hire A Cook",
    discription:
      "This is a unique website. We in a team made this website start from scratch. This is for masai school hackathon project. In this website you can book a cook on subscription bases and you have to also give information about for how many cook have to make food and in many times a day.",
    tech: "React, Redux, Material UI, Express, MongoDB, Node.js, Javascript, HTML, CSS, Socket.io",
    features: [
      "dynamic Signin/Signup page",
      "fully dynamic interface",
      "User friendly",
      "Dynamic product page",
    ],

    image: "../image/hireAcook.png",
    deploy: "https://hirecook.vercel.app/",
    github: "https://github.com/Deepu2560/Hire-A-Cook",
  },
  {
    id: "project-covid-tracker",
    name: "Covid-Tracker App",
    discription:
      "This is a solo project of covid tracker. In this project track covid cases for any country you looking for. In this web application you will see report for world wide, countinents wise, all countries reports and you can search for specific country of you want. Enjoy application by deployed link below.",
    tech: "React, React-Redux, Express, MongoDB, Node.js, Javascript, HTML, CSS, Heroku, Vercel",
    features: [
      "dynamic modern style Signin/Signup page",
      "dashing dashboard",
      "User friendly",
      "Search any Country",
    ],

    image: "../image/covidTracker.png",
    deploy: "https://deepu2560-covid-tracker.vercel.app/",
    github: "https://github.com/Deepu2560/covid-tracker",
  },
  {
    id: "project-todo-app",
    name: "Todo App",
    discription:
      "This website is a todo web application. In this application you can add task as pending then change status to doing then done and then you can delete. This web application have signin and signup feature too. Every user have its own data.",
    tech: "React, React-Redux, Express, MongoDB, Node.js, Javascript, HTML, CSS, Heroku, Vercel",
    features: [
      "dynamic modern style navbar",
      "Modern style home page",
      "pending, doing and done section layout",
      "full-stack web app",
    ],

    image: "../image/todoApp.png",
    deploy: "https://deepu2560-todo-app.vercel.app/",
    github: "https://github.com/Deepu2560/TODO-list",
  },
  {
    id: "project-calculator-app",
    name: "Calculator App",
    discription:
      "This is a project made by me. In this project you can able to calculate any mathematical operation very easily. You can also calculate square, square root, cube and cube of a number very easily.",
    tech: "React, Node.js, Javascript, HTML, CSS",
    features: [
      "dynamic modern style Calculator",
      "Square and cube any time between calculation",
      "square root and cube root any time between calculation",
    ],

    image: "../image/calculator.png",
    deploy: "https://deepu2560-calculator.vercel.app/",
    github: "https://github.com/Deepu2560/calculator",
  },
];

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
  gitHubButton.innerHTML = "Deployed Link (Click me)";

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
