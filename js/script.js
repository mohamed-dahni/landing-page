const elOnClick = document.querySelector(".menu-holder");
const megaMenu = document.querySelector("#mega-menu");

elOnClick.onclick = () => {
    if (megaMenu.className === "mega-menu") {
        megaMenu.className += " active";
    } else {
        megaMenu.className = "mega-menu";
    }
}