import { projects } from "./projects.js";

const work = document.querySelector(".work-container");
function renderProjects() {
  work.innerHTML = projects
    .map((project, index) => {
      const isLast = index === projects.length - 1;

      return `<div class="project">
    <div class="left"><h2 class="project-title">${project.title}</h2>
        <p class="project-description">${project.description}</p>
    </div>
    <div class="right">
    <a>Live Link</a>
    <a>Go to Repository</a>
    
    </div>


  </div>${isLast ? "" : `<hr>`}`;
    })
    .join("");
}
const copyright = document.querySelector(".copyright");
const currentYear = new Date().getFullYear();
copyright.innerHTML = `&copy; ${currentYear}`;

document.addEventListener("DOMContentLoaded", renderProjects);
