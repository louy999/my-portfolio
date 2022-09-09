var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var getRepo = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://api.github.com/users/louy999/repos")];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _a.sent();
                data.forEach(function (repo) {
                    if (repo.name === myFullProject[count]) {
                        projectCard.innerHTML = "\n        <div class=\"project-num shadow p-3 mb-5 bg-body rounded\">\n                <img src=\"https://raw.githubusercontent.com/louy999/".concat(repo.name, "/master/design/desktop-design.jpg\" alt=\"\">\n                <h3>").concat(repo.name.split("-").join(" "), "</h3>\n                <p class=\"about-project\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis blanditiis at eum, saepe culpa quod ullam molestias a voluptatibus esse.</p>\n<button type=\"button\"  class=\"btn btn-primary\"><a  href=\"https://louy999.github.io/").concat(repo.name, "\" target=\"_blank\" >view more </a><i class=\"fa-solid fa-circle-arrow-right\"></i></button>\n        </div>");
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
getRepo();
var myFullProject = [
    "bookmark-landing-page-master",
    "cruds",
    "fylo-dark-theme-landing-page-master",
    "interactive-comments-section-main",
    "IP-ADDRESS-TRACKER-MASTER",
    "launch-countdown-timer-main",
    "rock-paper-scissors-master",
    "todo-app-main",
];
var options = {
    root: null,
    threshold: 0.7
};
var projectCard = document.querySelector(".con-project");
var observers = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        entry.target.style.top = "0";
    });
}, options);
observers.observe(projectCard);
var nextBTN = document.querySelector(".control .next");
var pauseBTN = document.querySelector(".control .pause");
var prevBTN = document.querySelector(".control .prev");
pauseBTN.addEventListener("click", function () {
    clearInterval(setTimeProject);
});
var count = 0;
nextBTN.addEventListener("click", function () {
    algo();
    getRepo();
});
prevBTN.addEventListener("click", function () {
    algo();
    getRepo();
    count = count - 2;
});
function algo() {
    if (count === myFullProject.length - 1) {
        count = 0;
    }
    else if (count >= 0) {
        count++;
    }
    else if (count < 0) {
        count = myFullProject.length;
    }
}
var setTimeProject = setInterval(set, 5000);
function set() {
    count++;
    algo();
    getRepo();
}
