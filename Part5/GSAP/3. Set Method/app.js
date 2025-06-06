// ------------------- NOTES -----------------------
// SET:
//  This method is use to set the properties of an element before animating.
// You can also use it to immediately set the properties of an element creating a zero duration animation.
// --------------------------------------------------

gsap.set(".box", {
    opacity:0,
    background: "yellow",
});

gsap.to(".box", {
    opacity: 1,
    background: "crimson",
    duration: 2,
    y: 100,
    repeat: -1,
    yoyo: true,
})