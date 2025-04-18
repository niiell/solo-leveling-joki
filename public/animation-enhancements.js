// Animation Enhancements for Solo Leveling Joki

document.addEventListener('DOMContentLoaded', () => {
  // Animate smooth scroll to sections on nav menu click
  const navLinks = document.querySelectorAll('nav[aria-label="Primary navigation"] a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: targetElement, offsetY: 80 },
          ease: "power2.out"
        });
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
});
