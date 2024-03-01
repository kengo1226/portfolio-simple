// ハンバーガーメニュー
const menuBtn = document.querySelector(".menu-btn");
const header = document.querySelector(".header");

menuBtn.addEventListener('click', () => {
    header.classList.toggle("show");
});

// スクロールアニメーション
gsap.registerPlugin(ScrollTrigger);
// let target = gsap.utils.toArray(".ttl-anim");

// gsap.from(".ttl-anim", 1, {
//     opacity: 0,
//     scrollTrigger: {
//         trigger: ".main-visual",
//         start: "70% center",
//         markers: true,
//     },
// });

gsap.utils.toArray(".fadeIn").forEach(target => {
    gsap.from(target, 1, {
        scrollTrigger: {
            trigger: target,
            start: "top-=220 center",
            // markers: true,
        },
        opacity: 0,
    });
});
