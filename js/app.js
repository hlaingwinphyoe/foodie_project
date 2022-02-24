let header = document.querySelector(".header");
let scrollToTop = document.querySelector(".scroll-to-top")

let waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        if(direction === "down"){
            header.classList.add("shadow");
            header.classList.add("animate__slideInDown")
            scrollToTop.style.display = "block"
            scrollToTop.classList.add("animate__slideInUp")
        }else{
            header.classList.remove("shadow");
            header.classList.remove("animate__slideInDown")
            scrollToTop.style.display = "none"
            scrollToTop.classList.remove("animate__slideInUp")
        }
    },
    offset: '25%'
});
ScrollReveal({
    origin : "top",
    distance: "40px",
    duration : 1000,
    reset : true
}).reveal(".content",{
    interval : 500
});