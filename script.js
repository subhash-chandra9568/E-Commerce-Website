const images = ["../images/image-1.avif", "../images/image-2.avif", "../images/image-3.avif"];

let index = 0;

let slideImage = document.getElementById("slide-img");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", function(){
    index = (index + 1) % images.length;
    slideImage.src = images[index];
});

prevBtn.addEventListener("click", function(){
    index = (index - 1) % images.length;
    slideImage.src = images[index];
});

setInterval(()=>{
    index = (index + 1) % images.length;
    slideImage.src = images[index];
},4000)


let lastScrollTop = 0;
let hideThreshold = 50; // Hide after scrolling 100px down
let showThreshold = 20;  // Show after scrolling 20px up
let isNavbarHidden = false;
const navbar = document.getElementById('block-header');

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollDiff = scrollTop - lastScrollTop;

    if (scrollDiff > hideThreshold && !isNavbarHidden) {
        navbar.style.top = "-160px";
        isNavbarHidden = true;
    } else if (scrollDiff < -showThreshold && isNavbarHidden) {
        // Scrolling up beyond 20px -> Show Navbar
        navbar.style.top = "0";
        isNavbarHidden = false;
    }

    lastScrollTop = scrollTop;
});

// window.onscroll = function(){
//     hideNavbar();
// };

// function hideNavbar(){
//     let navbar = document.getElementById("block-header");

//     if(window.scrollY > 600){
//         navbar.classList.add("fixed");
//     }
//     else{
//         navbar.classList.remove("fixed");
//     }
// };


let bar = document.getElementById("hide-bar");
let hamburger = document.getElementById("hamburger");
let closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", function(){
    bar.classList.add("show-bar")
});


closeBtn.addEventListener("click", function(){
    bar.classList.remove("show-bar")
});