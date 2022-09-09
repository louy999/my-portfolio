var linkNav = document.querySelectorAll(".nav-link ");
var collapse = document.querySelector(".navbar-collapse");
linkNav.forEach(function (nav) {
    nav.addEventListener("click", function () {
        linkNav.forEach(function (li) {
            li.classList.remove("active");
        });
        collapse === null || collapse === void 0 ? void 0 : collapse.classList.remove("show");
        nav.classList.add("active");
    });
});
var nav = document.querySelector("nav");
var timer = null;
function hideNavWhen() {
    window.addEventListener("scroll", function () {
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
window.addEventListener("mousemove", function (e) {
    if (e.y < 95) {
        nav.style.transform = "translateY(0)";
    }
    else {
        hideNavWhen();
    }
});
var allProduct = document.querySelectorAll("body >div");
console.log(allProduct);
var options = {
    root: null,
    threshold: 0.7
};
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        var _a;
        linkNav.forEach(function (li) {
            li.classList.remove("active");
        });
        (_a = document.querySelector(".".concat(entry.target.id))) === null || _a === void 0 ? void 0 : _a.classList.add("active");
    });
}, options);
window.addEventListener("scroll", function () {
    allProduct.forEach(function (Product) {
        observer.observe(Product);
    });
});
