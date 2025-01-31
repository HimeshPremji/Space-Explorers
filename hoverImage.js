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
    tab.addEventListener("mouseenter", () => {
      const text = tab.querySelector("h3").textContent.trim();
      if (images[text]) {
        hoverImage.style.backgroundImage = `url(${images[text]})`;
        hoverImage.style.opacity = "1";
      }
    });

    tab.addEventListener("mouseleave", () => {
      hoverImage.style.opacity = "0";
    });

    tab.addEventListener("mousemove", (e) => {
      gsap.to(hoverImage, {
        x: e.clientX + 20,
        y: e.clientY - 100,
        duration: 0.6,
        ease: "power2.out",
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".moon-info__tab");

  tabs.forEach((tab) => {
    const baby1 = tab.querySelector(".baby1");
    const baby2 = tab.querySelector(".baby2");
    const h3 = tab.querySelector("h3");

    tab.addEventListener("mouseenter", () => {
      gsap.to([baby1, baby2], {
        height: "50%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(h3, {
        color: "#ddd",
        duration: 0.3,
      });
    });

    tab.addEventListener("mouseleave", () => {
      gsap.to([baby1, baby2], {
        height: "0%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(h3, {
        color: "#333",
        duration: 0.3,
      });
    });
  });
});
