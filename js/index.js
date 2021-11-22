const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});




// gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
// gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
// gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
// gsap.from(".welcome", { opacity: 0, duration: 1, delay: 2.5, y: -50 });
// gsap.from(".next", { opacity: 0, duration: 1, delay: 3, y: -45 });
// gsap.from(".responsive", { opacity: 0, duration: 1, delay: 3.5, y: 50 }); 
// gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 4.5, y: 55 }); 



// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray('.standbox').forEach(standbox => {
//   ScrollTrigger.create({
//     trigger: standbox,
//     start: 'center center',
//     pin: true,
//     pinSpacing: false
//   });
// });


// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray('.sect').forEach(sect => {
//   ScrollTrigger.create({
//     trigger: sect,
//     start: 'center center',
//     pin: true,
//     pinSpacing: false
//   });
// });