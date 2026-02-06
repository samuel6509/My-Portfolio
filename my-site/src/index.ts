// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import "./HomePage.ts"; // HomePage.ts file

// side bar close & open logic
const buttonToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".my-sidebar");

buttonToggle?.addEventListener("click", () => {
    sidebar?.classList.toggle("collapsed");
});