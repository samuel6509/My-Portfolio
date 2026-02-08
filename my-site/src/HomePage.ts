import "./HomePage.css"
// home page content 
export function showHome()
{
  // div mounting logic
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="welcome-text">
      <h1 class="welcome" >Welcome!</h1>
      <p>Welcome to my portfolio! Here you will find a timeline of my programming journey
        all the way from beginner to where I am at now. I have written this portfolio in
        HTML & TypeScript as a Single Page Application to leverage a lightweight website
        which I can host on GitHub Pages.
       
        Please check out the pages I have made for this site as you hold me as a potential
        candidate for your orginization. If you wish to contact me please feel free to use
        my socials which can be found at the bottom of each page.
       
        Found below are my top 3 projects which are also briefly discussed within my CV,
        click an image & see where it takes you! All projects available on projects page.</p>
    </div>
    <div class="project-icons">
      <img src="/React-Laravel.png" alt="React-Laravel" class="rounded-circle mb-1">
      <img src="/summers_day_.png" alt="Computational-Creativity" class="rounded-circle mb-1">
      <img src="/python.png" alt="Solving-Problems" class="rounded-circle mb-1">
    </div>
  `
}