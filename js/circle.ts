const text = document.querySelector(".text p") as HTMLParagraphElement;
let textWrit = "louy hany - frontend developer - ";
let splitText = textWrit.split("");
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += `<span style="transform:rotate(${i * 11}deg)">${
    splitText[i]
  }</span>`;
}

let cv = document.querySelector(".cv ");
cv?.addEventListener("click", () => {
  window.location.href =
    "https://drive.google.com/file/d/1aS8hvUMw50Ky-_Px2gGw_8F_maSGorPm/view?usp=sharing";
});
