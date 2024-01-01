function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var links = document.getElementsByClassName("links");
var contents = document.getElementsByClassName("contents");

function opentab(name){
    for(link of links){
        link.classList.remove("active-link");
    }
    for(content of contents){
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(name).classList.add("active-tab");
}