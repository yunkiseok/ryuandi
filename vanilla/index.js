/*
if (10 === 5 && "yun" === "yun") {
    console.log("hi");
} else if (10 <= 6 || "yun" === "yun") {
    console.log("ho");
} else {
    console.log("hhhh");
}

const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";
function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}
function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();
*/
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
    */
}
function init() {
    title.addEventListener("click", handleClick);
}
init();