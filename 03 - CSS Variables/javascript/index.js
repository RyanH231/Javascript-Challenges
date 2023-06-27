let root = document.querySelector(":root");

let spacing = document.querySelector("#spacing");
let blur = document.querySelector("#blur");
let colour = document.querySelector("#base");

function SetImage()
{
    root.style.setProperty("--blur", `${blur.value}px`);
    root.style.setProperty("--size", `${spacing.value / 5}px`);
    root.style.setProperty('--col', `${colour.value}`);
}