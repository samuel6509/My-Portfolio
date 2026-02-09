// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import { router } from "./Router";

// side bar close & open logic
const buttonToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".my-sidebar");

buttonToggle?.addEventListener("click", () => {
    sidebar?.classList.toggle("collapsed");
});

// getting route for page
window.addEventListener("load", router);
window.addEventListener("hashchange", router);