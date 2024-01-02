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

/*
const form = document.querySelector('form');

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function sendEmail(){

    const body = `Name: ${name.value}<br> Email: ${email.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "theradiantedge@gmail.com",
        Password : "3068D1EE01954FA1CA4360A2613DE8AB3006",
        To : 'theradiantedge@gmail.com',
        From : "theradiantedge@gmail.com",
        Body : body
    }).then(
      message => alert(message)
    );

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        sendEmail();
    });
}
*/