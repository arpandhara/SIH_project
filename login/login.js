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
let forms_middle_1 = document.querySelector(".forms_middle_1");
let forms_middle_2 = document.querySelector(".forms_middle_2");
let headings = document.querySelector(".forms_head h3")
// Hide forms_middle_2 initially
gsap.set(forms_middle_2, { autoAlpha: 0 });

capsules.forEach(capsule => {
    capsule.addEventListener("click", function (e) {

        const tl = gsap.timeline();

        // Animate out forms_middle_1
        tl.to(forms_middle_1, {
            x: -450,
            autoAlpha: 0,
            duration: 1,
            ease: "power3.inOut"
        });

        // Animate in forms_middle_2, starting at the same time
        tl.fromTo(forms_middle_2,
            { x: 450, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 1, ease: "power3.inOut" },
            "<" // <-- This synchronizes the start of both animations
        );

        tl.from(".forms_middle_2 > *", {
            y: 30,
            opacity: 0,
            stagger: 0.2, // Each element animates 0.2s after the previous one
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.5")
        
        step.textContent = "Step 2/2"
        headings.textContent = ""
        language = (e.currentTarget.className).slice(8)
    });
});