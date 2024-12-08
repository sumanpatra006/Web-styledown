let tl = gsap.timeline()


tl.from(".navbar", {
    duration: 1,
    y: -50,
    opacity: 0,
    // ease: "bounce.out",
    stagger: 0.3
},"one");

tl.from(".nav-links li",{
    y: -100,
    duration:0.7,
    opacity: 0,
    stagger:0.1
},"one")

tl.from(".home-content h2",{
    y:20,
    duration:0.5,
    opacity:0,
})

tl.from(".home-content p",{
    y:20,
    duration:0.3,
    opacity:0,
})

gsap.from("#about", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 85%",
        toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    // ease: "bounce.out",
});

const point = document.querySelector(".pointer")
window.addEventListener("mousemove",function(e){
    let x = e.x
    let y = e.y;  
    gsap.to(".pointer",{
        x:x,
        y:y
    })  
})


// Timeline animation for highlights
gsap.from(".timeline-item", {
    scrollTrigger: {
        trigger: ".timeline",
        start: "top 90%",
        toggleActions: "play none none none",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
});