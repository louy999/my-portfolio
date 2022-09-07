var text = document.querySelector(".text p");
var textWrit = "louy hany - frontend developer - ";
var splitText = textWrit.split("");
for (var i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span style=\"transform:rotate(".concat(i * 11, "deg)\">").concat(splitText[i], "</span>");
}
var cv = document.querySelector(".cv ");
cv === null || cv === void 0 ? void 0 : cv.addEventListener("click", function () {
    window.location.href =
        "https://drive.google.com/file/d/1aS8hvUMw50Ky-_Px2gGw_8F_maSGorPm/view?usp=sharing";
});
