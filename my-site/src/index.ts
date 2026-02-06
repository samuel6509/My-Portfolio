// side bar close & open logic
const buttonToggle = document.getElementById("sidebarToggle");
const sidebar = document.querySelector(".my-sidebar");

buttonToggle?.addEventListener("click", () => {
    sidebar?.classList.toggle("collapsed");
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h3>Welcome!</h3>
    <p>testing to see if I can figure it out</p>
  </div>
`