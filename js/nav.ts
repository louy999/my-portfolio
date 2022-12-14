let linkNav = document.querySelectorAll(".nav-link ");
let collapse = document.querySelector(".navbar-collapse");
linkNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    linkNav.forEach((li) => {
      li.classList.remove("active");
    });
    collapse?.classList.remove("show");
    nav.classList.add("active");
  });
});
let nav = document.querySelector("nav") as HTMLDivElement;
var timer: any = null;
function hideNavWhen() {
  window.addEventListener("scroll", () => {
    if (timer !== null) {
      clearTimeout(timer);
      //   when scroll
      nav.style.transform = "translateY(0)";
    }
    if (window.scrollY >= 600) {
      timer = setTimeout(function () {
        nav.style.transform = "translateY(-100px)";
        //   when not scroll
      }, 4000);
    }
  });
}
hideNavWhen();
window.addEventListener("mousemove", (e) => {
  if (e.y < 95) {
    nav.style.transform = "translateY(0)";
  } else {
    hideNavWhen();
  }
});

let allProduct = document.querySelectorAll("body >div");
options = {
  root: null,
  threshold: 0.7,
};
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    linkNav.forEach((li) => {
      li.classList.remove("active");
    });
    document.querySelector(`.${entry.target.id}`)?.classList.add("active");
  });
}, options);
window.addEventListener("scroll", () => {
  allProduct.forEach((Product) => {
    observer.observe(Product);
  });
});
