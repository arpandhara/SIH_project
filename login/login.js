// const welcome = document.querySelector(".welcome")
var tl = gsap.timeline()
tl.from(".welcome", {
    clipPath: "inset(0 100% 0 0)", // starts hidden
    duration: 2,
    ease: "power1"
});

tl.from(".welcome-tag-line", {
    clipPath: "inset(0 100% 0 0)",
    duration: 1.5,
    ease: "power1"
}, "-=0.7");


let register_btn = document.querySelector(".button")
let welcome = document.querySelector(".welcome")
let welcome_tag_line = document.querySelector(".welcome-tag-line")
let forms = document.querySelector(".forms")

register_btn.addEventListener("click", function () {
    welcome.style.display = "none"
    welcome_tag_line.style.display = "none"
    register_btn.style.display = "none"
    forms.style.display = "flex"
})


let capsules = document.querySelectorAll(".capsule")
let step = document.querySelector(".forms_head h5")
let language
let forms_middle_2 = document.querySelector(".forms_middle_2")
// Hide forms_middle_2 initially
forms_middle_2.style.display = "none"

capsules.forEach(capsule => {
    capsule.addEventListener("click", function (e) {
        gsap.to(".forms_middle_1", {
            x: -450,
            duration: 1,
            ease: "power3"
        });


        // Show forms_middle_2 and animate it in from right
        forms_middle_2.style.display = "flex"
        gsap.fromTo(
            ".forms_middle_2",
            { x: 450 },
            { x: 0, duration: 1, ease: "power3" }
        );

        step.textContent = "Step 2/2"

        language = (e.currentTarget.className).slice(8)
    });
});
