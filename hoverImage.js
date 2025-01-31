document.addEventListener("DOMContentLoaded", function () {
  const hoverImage = document.getElementById("hover-image");
  const moonTabs = document.querySelectorAll(".moon-info__tab");

  // Image sources
  const images = {
    "Moon Formation": "assets/MoonNasa/Photo1.jpg",
    "Lunar Surface": "assets/MoonNasa/Photo2.jpg",
    "Moon Phases": "assets/MoonNasa/Photo3.jpg",
    "Lunar Exploration": "assets/MoonNasa/Photo4.jpg",
    "Moon's Gravity": "assets/MoonNasa/Photo5.jpg",
    "Lunar Eclipses": "assets/MoonNasa/Photo6.jpg",
    "Future Missions": "assets/MoonNasa/Photo7.jpg",
  };

  moonTabs.forEach((tab) => {
    tab.addEventListener("mouseenter", (e) => {
      const text = tab.querySelector("h3").textContent.trim();
      if (images[text]) {
        hoverImage.style.backgroundImage = `url(${images[text]})`; // Corrected
        hoverImage.style.opacity = "1";
      }
    });

    tab.addEventListener("mouseleave", () => {
      hoverImage.style.opacity = "0";
    });

    tab.addEventListener("mousemove", (e) => {
      gsap.to(hoverImage, {
        x: e.clientX,
        y: e.clientY - 30,
        duration: 0.2,
        ease: "power2.out",
      });
    });
  });
});
