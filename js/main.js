let buttonHide = document.querySelector(".click-me-to-hide");
let buttonShow = document.querySelector(".click-me-to-show");
let navigation = document.querySelector(".nav");
buttonHide.style.display = "none";

buttonHide.onclick = () => {
    navigation.style.display = "none";
    buttonShow.style.display = "inherit";
    buttonHide.style.display = "none";

}
buttonShow.onclick = () => {
    navigation.style.display = "flex";
    buttonShow.style.display = "none";
    buttonHide.style.display = "inherit";
}