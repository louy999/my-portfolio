let getRepo = async () => {
  let res = await fetch("https://api.github.com/users/louy999/repos");
  let data = await res.json();
  data.forEach((repo: any) => {
    if (repo.name === myFullProject[count]) {
      projectCard.innerHTML = `
        <div class="project-num shadow p-3 mb-5 bg-body rounded">
                <img src="https://raw.githubusercontent.com/louy999/${
                  repo.name
                }/master/design/desktop-design.jpg" alt="">
                <h3>${repo.name.split("-").join(" ")}</h3>
                <p class="about-project">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis blanditiis at eum, saepe culpa quod ullam molestias a voluptatibus esse.</p>
<button type="button"  class="btn btn-primary"><a  href="https://louy999.github.io/${
        repo.name
      }" target="_blank" >view more </a><i class="fa-solid fa-circle-arrow-right"></i></button>
        </div>`;
    }
  });
};

getRepo();
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
let options = {
  root: null,
  threshold: 0.7,
};

let projectCard = document.querySelector(".con-project") as HTMLDivElement;
let observers = new IntersectionObserver((entries: any) => {
  entries.forEach((entry: any) => {
    entry.target.style.top = "0";
  });
}, options);

observers.observe(projectCard);

let nextBTN = document.querySelector(".control .next") as HTMLSpanElement;
let pauseBTN = document.querySelector(".control .pause") as HTMLSpanElement;
let prevBTN = document.querySelector(".control .prev") as HTMLSpanElement;

pauseBTN.addEventListener("click", () => {
  clearInterval(setTimeProject);
});

let count = 0;

nextBTN.addEventListener("click", () => {
  algo();
  getRepo();
});
prevBTN.addEventListener("click", () => {
  algo();
  getRepo();
  count = count - 2;
});

function algo() {
  if (count === myFullProject.length - 1) {
    count = 0;
  } else if (count >= 0) {
    count++;
  } else if (count < 0) {
    count = myFullProject.length;
  }
}

let setTimeProject = setInterval(set, 5000);
function set() {
  count++;
  algo();
  getRepo();
}
