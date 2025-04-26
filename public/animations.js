function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// GSAP Animations for Solo Leveling Joki

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  if (prefersReducedMotion() || isMobile()) {
    // Disable or simplify animations for reduced motion or mobile devices
    gsap.set("header.hero h1", {opacity: 1, y: 0});
    gsap.set(".pricing-card", {opacity: 1, y: 0, scale: 1});
    const whatsappButtons = document.querySelectorAll('.whatsapp-button a');
    whatsappButtons.forEach(button => {
      gsap.set(button, {scale: 1, boxShadow: "0 2px 5px rgba(0,0,0,0.2)"});
    });
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
      gsap.set(card.querySelector('h3'), {y: 0});
      gsap.set(card.querySelector('.price'), {y: 0});
      gsap.set(card.querySelector('ul'), {y: 0});
      const icon = card.querySelector('.icon-placeholder');
      if (icon) {
        gsap.set(icon, {scale: 1});
      }
    });
    return;
  }

  // Animate hero title fade and slide in
  gsap.from("header.hero h1", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "power3.out"
  });

  // Animate pricing cards with staggered scale and fade in
  gsap.from(".pricing-card", {
    duration: 1,
    y: 50,
    opacity: 0,
    scale: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.2
  });

  // Animate WhatsApp buttons hover effect
  const whatsappButtons = document.querySelectorAll('.whatsapp-button a');
  whatsappButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { scale: 1.1, boxShadow: "0 0 15px #25D366", duration: 0.3 });
    });
    button.addEventListener('mouseleave', () => {
      gsap.to(button, { scale: 1, boxShadow: "0 2px 5px rgba(0,0,0,0.2)", duration: 0.3 });
    });
  });

  // Animate pricing card content on hover
  const pricingCards = document.querySelectorAll('.pricing-card');
  pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card.querySelector('h3'), { y: -10, duration: 0.3, ease: "power1.out" });
      gsap.to(card.querySelector('.price'), { y: -10, duration: 0.3, ease: "power1.out" });
      gsap.to(card.querySelector('ul'), { y: -10, duration: 0.3, ease: "power1.out" });
      // Animate icon scaling
      const icon = card.querySelector('.icon-placeholder');
      if (icon) {
        gsap.to(icon, { scale: 1.1, duration: 0.3, ease: "power1.out" });
      }
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card.querySelector('h3'), { y: 0, duration: 0.3, ease: "power1.out" });
      gsap.to(card.querySelector('.price'), { y: 0, duration: 0.3, ease: "power1.out" });
      gsap.to(card.querySelector('ul'), { y: 0, duration: 0.3, ease: "power1.out" });
      // Animate icon scaling reset
      const icon = card.querySelector('.icon-placeholder');
      if (icon) {
        gsap.to(icon, { scale: 1, duration: 0.3, ease: "power1.out" });
      }
    });
  });

  // Animate button click feedback for WhatsApp buttons and CTA button
  const clickableButtons = document.querySelectorAll('.whatsapp-button a, .cta-button');
  clickableButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      gsap.to(button, { scale: 0.95, duration: 0.1, ease: "power1.out" });
    });
    button.addEventListener('mouseup', () => {
      gsap.to(button, { scale: 1, duration: 0.1, ease: "power1.out" });
    });
    button.addEventListener('mouseleave', () => {
      gsap.to(button, { scale: 1, duration: 0.1, ease: "power1.out" });
    });
  });

  // Advanced Scroll Animations using GSAP ScrollTrigger
  if (typeof gsap !== "undefined" && gsap.registerPlugin) {
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    gsap.utils.toArray("section").forEach(section => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      });
    });

    // Animate hero image or background with parallax effect
    const hero = document.querySelector("header.hero");
    if (hero) {
      gsap.to(hero, {
        backgroundPositionY: "50%",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }

    // Animation Timeline for coordinated animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".pricing-section",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    timeline.from(".pricing-section h2", {opacity: 0, y: 30, duration: 0.5});
    timeline.from(".pricing-card", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.5
    }, "-=0.3");

    // New: 3D rotation effect on hero title on mouse move
    const heroTitle = document.querySelector("header.hero h1");
    if (heroTitle) {
      heroTitle.style.transformStyle = "preserve-3d";
      heroTitle.parentElement.style.perspective = "1000px";

      heroTitle.parentElement.addEventListener("mousemove", (e) => {
        const rect = heroTitle.parentElement.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (-y / rect.height) * 15;
        const rotateY = (x / rect.width) * 15;
        gsap.to(heroTitle, {rotationX: rotateX, rotationY: rotateY, duration: 0.3, ease: "power1.out"});
      });

      heroTitle.parentElement.addEventListener("mouseleave", () => {
        gsap.to(heroTitle, {rotationX: 0, rotationY: 0, duration: 0.5, ease: "power1.out"});
      });
    }
  }
});
