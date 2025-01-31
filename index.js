document.addEventListener("DOMContentLoaded", () => {

  // gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
    wheelMultiplier: window.innerWidth < 768 ? 0.8 : 1, // Adjust wheel sensitivity for mobile
  });

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  let scrollTimer;

  window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = "none";
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(
      () => (scrollToTopBtn.style.display = "block"),
      100
    );
  });

  scrollToTopBtn.addEventListener("click", () => {
    lenis.scrollTo("top", { duration: 1 });
  });

  // Responsive animation handler
  function handleResponsiveAnimations() {
    const isMobile = window.innerWidth < 768;

    // Hero animations
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

    const fullwidthTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".fullwidth-image",
        start: "top 66%",
        end: "top top",
        // markers: true,
        scrub: true,
      },
    });

    fullwidthTimeline

      .to(".fullwidth-image__overlay", { opacity: 0, duration: 3 })
      .from(".fullwidth-image img", { scale: isMobile ? 1.1 : 1.2 }, 0)
      .from(
        ".fullwidth-image__text",
        {
          opacity: 0,
          y: isMobile ? 30 : 50,
          duration: 2,
        },
        0.5
      );

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

    // Footer animations
    gsap.from(".footer", {
      paddingBottom: 0,
      duration: isMobile ? 2 : 3.5,
    });
    gsap.to(".footer__inner", {
      background: "pink",
      scrollTrigger: {
        trigger: ".footer",
        start: isMobile ? "top 0%" : "top 16%",
        end: isMobile ? "top center" : "top center",
        scrub: isMobile ? 1 : 0.4,
        ease: "power4.inOut",
      },
    });

    gsap.to(".footer__inner a", {
      color: "red",
      stagger: isMobile ? 0.2 : 0.1,
      scrollTrigger: {
        trigger: ".footer",
        start: isMobile ? "top 0%" : "top 16%",
        end: isMobile ? "top center" : "top center",
        scrub: isMobile ? 1 : 0.4,
        ease: "power4.inOut",
      },
    });
  }

  handleResponsiveAnimations();

  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
    lenis.resize();
  });
});
