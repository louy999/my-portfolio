async function getRepo() {
  let res = await fetch("https://api.github.com/users/louy999/repos");
  let data = await res.json();
  data.forEach((repo: any) => {
    for (let i = 0; i < myFullProject.length; i++) {
      if (repo.name === myFullProject[i]) {
        projectCard.innerHTML += `
        <div class="project-num shadow p-3 mb-5 bg-body rounded">
                <img src="https://raw.githubusercontent.com/louy999/${
                  repo.name
                }/master/design/desktop-design.jpg" alt="">
                <h3>${repo.name.split("-").join(" ")}</h3>
                <p class="about-project">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis blanditiis at eum, saepe culpa quod ullam molestias a voluptatibus esse.</p>
<button type="button" class="btn btn-primary"><a  href="https://louy999.github.io/${
          repo.name
        }" target="_blank" >view</a><i class="fa-solid fa-circle-arrow-right"></i></button>
        </div>`;
      }
    }
  });
}
// getRepo();
let myFullProject = [
  "bookmark-landing-page-master",
  "cruds",
  "fylo-dark-theme-landing-page-master",
  "interactive-comments-section-main",
  "IP-ADDRESS-TRACKER-MASTER",
  "launch-countdown-timer-main",
  "rock-paper-scissors-master",
  "todo-app-main",
];

let projectCard = document.querySelector(".con-project") as HTMLDivElement;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1222) {
    projectCard.style.top = "0";
  }
});
