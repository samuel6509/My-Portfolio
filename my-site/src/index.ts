// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import {showHome} from "./HomePage.ts"; // HomePage.ts file

// homepage the default page
window.addEventListener("DOMContentLoaded", () => {
    showHome();
});

// side bar close & open logic
const buttonToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".my-sidebar");

buttonToggle?.addEventListener("click", () => {
    sidebar?.classList.toggle("collapsed");
});

// routing for my web pages
document.getElementById("home-page")?.addEventListener("click", showHome);