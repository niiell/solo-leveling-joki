// GSAP Animations for Solo Leveling Joki

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
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
  const buttons = document.querySelectorAll('.whatsapp-button a');
  buttons.forEach(button => {
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
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card.querySelector('h3'), { y: 0, duration: 0.3, ease: "power1.out" });
      gsap.to(card.querySelector('.price'), { y: 0, duration: 0.3, ease: "power1.out" });
      gsap.to(card.querySelector('ul'), { y: 0, duration: 0.3, ease: "power1.out" });
    });
  });
});
