// getting DOM elements
let media = document.querySelectorAll(".media");
let followBtn = document.getElementById("follow");
let menuBtn = document.getElementById("right");
let notif = document.getElementById("notif");
let container = document.getElementById("container");
let msgBtn = document.getElementById("msg-btn");

const color1 = "rgba(255, 255, 255, 0.1)";
const color2 = "rgba(255, 255, 255, 0.3)";

followBtn.addEventListener("click", following);

function following() {
    if (followBtn.innerHTML == "Follow") {
        followBtn.innerHTML = "Following";
        followBtn.style.background = color2;
        
    } else {
        followBtn.innerHTML = "Follow";
        followBtn.style.background = color1;
    }
    // create notification node
    let para = document.createElement("p");
    let node = document.createTextNode("you are following @vanessa.kirby");
    para.appendChild(node);
    notif.appendChild(para);

    // Animation
    let id = setInterval (animate, 200);
    let i = 0;

    function animate() {

        if (i  > media.length-1) {
            clearInterval(id);
            media[media.length-1].style.background = color1;
            console.log("Interval deleted");
        }

        if (i < media.length) media[i].style.background = color2;

        if (i > 0) media[i-1].style.background = color1; 

        i++;
    }
}

// show-hide notification
let active = false;

menuBtn.addEventListener("click", function() {

    active = !active;
    if (!active) { notif.innerHTML = ''; }
    
    if (notif.style.opacity != 1) {
        notif.style.top = 0;
        notif.style.opacity = 1;
    } else {
        notif.style.top = "-200px";
        notif.style.opacity = "0";
    }
});

// show-hide message box
msgBtn.addEventListener("click", function() {
    active = !active;
    if (active) {
        container.style.bottom = "20px";
    } else {
        container.style.bottom = "-160px";
    }
    
});