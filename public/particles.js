// Particle system configuration
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const baseConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#2c3e50", "#1a1a2e", "#e67e22"] // Adjusted colors to better match Solo Leveling theme
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#1a1a2e", // Adjusted line color to better match theme
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    }
  }
};

const mobileConfig = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 600
      }
    },
    opacity: {
      anim: {
        enable: false
      }
    },
    size: {
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      speed: 1,
      attract: {
        enable: false
      }
    }
  }
};

function isLowPerformanceDevice() {
  // Simple heuristic: disable particles on devices with low memory or slow CPU
  if (navigator.deviceMemory && navigator.deviceMemory < 2) {
    return true;
  }
  if (window.navigator.hardwareConcurrency && window.navigator.hardwareConcurrency < 2) {
    return true;
  }
  return false;
}

const config = isLowPerformanceDevice() ? {} : (isMobile() ? {...baseConfig, ...mobileConfig} : baseConfig);

// Initialize particles
document.addEventListener('DOMContentLoaded', function() {
  if (Object.keys(config).length === 0) {
    // Disable particles on low performance devices
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
      particlesContainer.style.display = 'none';
    }
    return;
  }
  particlesJS('particles-js', config);
});
