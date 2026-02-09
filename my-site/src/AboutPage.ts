export function showAbout()
{
  // div mounting logic
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>this is a test</h1>
  <p>testing to see if ti works</p>
  `
}