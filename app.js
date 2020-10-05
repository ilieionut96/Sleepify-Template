const animation1 = gsap.timeline({
    defaults: {
        duration: 1.2
    }
});

const animation2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-text",
        start: "center bottom"
    }
});

const animation3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".card",
      start: "center bottom"
    }
});

const animation4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".features-header",
      start: "center bottom"
    }
});

const animation5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".testimonials-header",
      start: "center bottom"
    }
});
  
const animation6 = gsap.timeline({
    scrollTrigger: {
      trigger: "figure",
      start: "center bottom"
    }
});

animation1.from(".animate", { 
    opacity: 0, y: 40, stagger: 0.4 
});

animation1.from(".main-head", { 
    opacity: 0, y: "-100%" 
}, "-=1");

animation1.from(".intro-img", { 
    opacity: 0, y: 40 
}, "-=1");

animation2.from(".about-text", { 
    opacity: 0, y: 40, duration: 1 
});

animation3.from(".card", { 
    opacity: 0, y: 40, duration: 1.2, stagger: 0.2 
});

animation4.from(".features-header", { 
    opacity: 0, y: 40, duration: 1 
});

animation5.from(".testimonials-header", { 
    opacity: 0, y: 40, duration: 1 
});

animation6.from("figure", { 
    opacity: 0, y: 40, duration: 1 
});