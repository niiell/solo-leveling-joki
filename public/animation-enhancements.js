// Animation Enhancements for Solo Leveling Joki

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getScrollOffsetY() {
  // Responsive offset for fixed header height
  if (window.innerWidth < 600) {
    return 60; // smaller offset for small screens
  } else if (window.innerWidth < 900) {
    return 70; // medium offset for medium screens
  } else {
    return 80; // default offset for large screens
  }
}

// Throttle function to limit event firing rate
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  if (prefersReducedMotion() || isMobile()) {
    // Disable or simplify animations for reduced motion or mobile devices
    return;
  }

  // Animate smooth scroll to sections on nav menu click
  const navLinks = document.querySelectorAll('nav[aria-label="Primary navigation"] a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { scale: 1.05, boxShadow: "0 0 8px rgba(230, 126, 34, 0.7)", duration: 0.3 });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { scale: 1, boxShadow: "none", duration: 0.3 });
    });
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: targetElement, offsetY: getScrollOffsetY() },
          ease: "power2.out"
        });
      }
    });
  });

  // Animate button hover and click feedback for WhatsApp buttons and CTA button
  const clickableButtons = document.querySelectorAll('.whatsapp-button a, .cta-button');
  clickableButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { scale: 1.1, boxShadow: "0 0 15px #e67e22", duration: 0.3 });
    });
    button.addEventListener('mousedown', () => {
      gsap.to(button, { scale: 0.95, duration: 0.1, ease: "power1.out" });
    });
    button.addEventListener('mouseup', () => {
      gsap.to(button, { scale: 1.1, duration: 0.1, ease: "power1.out" });
    });
    button.addEventListener('mouseleave', () => {
      gsap.to(button, { scale: 1, boxShadow: "none", duration: 0.3 });
    });
  });

  // New: Optimize scroll event with throttling for performance
  window.addEventListener('scroll', throttle(() => {
    // Example: Animate nav background color change on scroll
    const nav = document.querySelector('nav[aria-label="Primary navigation"]');
    if (nav) {
      if (window.scrollY > 50) {
        gsap.to(nav, { backgroundColor: "#1a1a2e", duration: 0.5 });
      } else {
        gsap.to(nav, { backgroundColor: "transparent", duration: 0.5 });
      }
    }
  }, 200));

});
