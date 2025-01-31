document.addEventListener("DOMContentLoaded", () => {
  // gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
    wheelMultiplier: window.innerWidth < 768 ? 0.86 : 0.97, // Adjust wheel sensitivity for mobile
  });

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  scrollToTopBtn.addEventListener("click", () => {
    lenis.scrollTo("top", { duration: 2.4 });
    setTimeout(heroAnim, 900);
  });

  // Responsive animation handler
  function handleResponsiveAnimations() {
    const isMobile = window.innerWidth < 768;

    // Hero animations
    heroAnim = () => {
      gsap.from(".hero__title span", {
        duration: isMobile ? 1 : 1.5,
        y: isMobile ? 50 : 100,
        opacity: 0,
        stagger: isMobile ? 0.1 : 0.05,
        ease: "power4.out",
      });

      gsap.from(".hero img", {
        duration: isMobile ? 1 : 1.5,
        scale: isMobile ? 0.9 : 0.8,
        opacity: 0,
        stagger: isMobile ? 0.1 : 0.2,
        ease: "expo.out",
      });
    };
    heroAnim();
    const splitTypes = document.querySelectorAll(".text__effect p");
    splitTypes.forEach((char) => {
      const text = new SplitType(char, { types: "chars" });

      gsap.from(text.chars, {
        duration: 1,
        ease: "power4.out",
        opacity: 0.2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: char,
          start: "top 70%",
          end: "top 40%",
          scrub: 0.5,
        },
      });
    });

    // ScrollTrigger.create({
    //   trigger: "#collection",
    //   start: "top center",
    //   end: "bottom center",
    //   onEnter: () => gsap.to("body", { background: "black",}),
    //   onEnterBack: () => gsap.to("body", { background: "black",}),
    //   onLeave: () => gsap.to("body", { background: "white",}),
    //   onLeaveBack: () => gsap.to("body", { background: "white",})
    // })

    gsap.to(".fullwidth-image__overlay", {
      opacity: 0,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".fullwidth-image",
        start: "top 66%",
        end: "top top",
        scrub: true,
      },
    });
    gsap.from(".fullwidth-image img", {
      scale: isMobile ? 1.1 : 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".fullwidth-image",
        start: "top 66%",
        end: "top top",
        scrub: true,
      },
    });
    gsap.from(".fullwidth-image__text", {
      opacity: 0,
      y: isMobile ? 30 : 50,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".fullwidth-image",
        start: "top 66%",
        end: "top top",
        scrub: true,
      },
    });

    // Mission underline animation
    const missionPath = document.querySelector(".mission path");
    if (missionPath) {
      const pathLength = missionPath.getTotalLength();
      gsap.set(missionPath, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(missionPath, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: ".mission",
          scrub: 1,
          start: isMobile ? "top 80%" : "top 70%",
          end: isMobile ? "top 20%" : "top 30%",
        },
      });
    }
  }

  handleResponsiveAnimations();

  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
    lenis.resize();
  });
});
