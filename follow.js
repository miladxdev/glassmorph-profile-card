let media = document.querySelectorAll(".media");
let followBtn = document.getElementById("follow");
let menuBtn = document.getElementById("right");
let notif = document.getElementById("notif");

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
            console.log("delete");
        }
        media[i].style.background = color2;
        if (i > 0) {
            media[i-1].style.background = color1;
        }
        i++;
        console.log(i);
    }

}

// show/hide notification
menuBtn.addEventListener("click", function() {
    
    if (notif.style.opacity != 1) {
        notif.style.top = 0;
        notif.style.opacity = 1;
    } else {
        notif.style.top = "-200px";
        notif.style.opacity = "0";
    }
});