tailwind.config = {
  theme: {
    fontFamily: {
      primary: ["Jost", "sans-serif"],
      secondary: ["Satoshi", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
      colors: {
        primary: {
          black: "#151515",
          white: "#F5F5F5",
          grey: "#C8C8C8",
          yellow: "#EEBB0C",
          orange: "#EF6818",
        },
      },
      keyframes: {
        popUpAnime: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        popUpAnime: "popUpAnime .5s ease-in-out 1",
      },
    },
  },
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".buttonNext",
    prevEl: ".buttonPrev",
  },
});

function toggleNavMenu() {
  const checkbox = document.getElementById("checkbox");
  const navMenu = document.getElementById("navMenu");
  const toggle = document.querySelector(".toggle");
  const lgBreakpoint = 992; // Tailwind's 'lg' breakpoint

  function setInitialState() {
    if (window.innerWidth < lgBreakpoint) {
      navMenu.style.transition = "transform 0.5s ease-in-out";
      navMenu.style.transform = "translateY(-150%)";
    } else {
      navMenu.style.transition = "none";
      navMenu.style.transform = "none";
    }
  }

  function toggleMenu() {
    if (window.innerWidth < lgBreakpoint) {
      if (checkbox.checked) {
        navMenu.style.transform = "translateY(0)";
      } else {
        navMenu.style.transform = "translateY(-150%)";
      }
    }
  }

  // Toggle menu when checkbox state changes
  checkbox.addEventListener("change", toggleMenu);

  // Toggle menu when clicking the toggle button
  toggle.addEventListener("click", function (event) {
    if (window.innerWidth < lgBreakpoint) {
      event.preventDefault();
      checkbox.checked = !checkbox.checked;
      toggleMenu();
    }
  });

  // Function to close menu when clicking outside
  function closeMenuOutside(event) {
    if (window.innerWidth < lgBreakpoint) {
      if (!navMenu.contains(event.target) && !toggle.contains(event.target)) {
        checkbox.checked = false;
        toggleMenu();
      }
    }
  }

  // Add event listener for clicks outside the menu
  document.addEventListener("click", closeMenuOutside);

  // Handle window resize
  window.addEventListener("resize", function () {
    setInitialState();
    if (window.innerWidth >= lgBreakpoint) {
      checkbox.checked = false;
    }
  });

  // Initial setup
  setInitialState();
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", toggleNavMenu);
