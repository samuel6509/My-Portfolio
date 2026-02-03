// side bar close & open logic
const buttonToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".my-sidebar");

buttonToggle?.addEventListener("click", () => {
    sidebar?.classList.toggle("collapsed");
});