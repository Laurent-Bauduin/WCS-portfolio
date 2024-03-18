const themeButton = document.querySelector(".theme");
const body = document.querySelector("body");

themeButton.addEventListener("click", () => {
    body.classList.toggle("dark");
})