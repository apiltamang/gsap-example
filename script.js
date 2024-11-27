document.addEventListener('DOMContentLoaded', () => {
    // Create a main timeline
    const mainTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 2
    });

    // Reset animation
    const reset = () => {
        gsap.set('.receipt', { y: 0, rotation: 0, scale: 1, x: 0 });
        gsap.set('.scanner-line', { opacity: 0, y: 0 });
        gsap.set('.form-field', { opacity: 0, x: 50 });
    };

    // Initial reset
    reset();

    // Receipt drop and position animation
    mainTimeline.to('.receipt', {
        y: 150,
        duration: 1,
        ease: "bounce.out"
    })
    .to('.receipt', {
        y: 130,
        duration: 0.5,
        ease: "power1.inOut"
    });

    // Scanning animation
    mainTimeline.to('.scanner-line', {
        opacity: 1,
        duration: 0.2
    })
    .to('.scanner-line', {
        y: 300,
        duration: 1.5,
        ease: "none"
    })
    .to('.scanner-line', {
        opacity: 0,
        duration: 0.2
    });

    // Receipt completion animation
    mainTimeline.to('.receipt', {
        rotation: 5,
        scale: 0.9,
        duration: 0.3,
        ease: "power1.inOut"
    })
    .to('.receipt', {
        rotation: -180,
        x: -200,
        y: 300,
        scale: 0.7,
        duration: 0.8,
        ease: "power1.inOut"
    });

    // Form fields animation
    mainTimeline.to('.form-field', {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power1.out"
    });

    // Reset animation after delay
    mainTimeline.to('.receipt', {
        y: 0,
        x: 0,
        rotation: 0,
        scale: 1,
        duration: 0.01,
        delay: 2
    })
    .to('.form-field', {
        opacity: 0,
        x: 50,
        duration: 0.01,
        stagger: 0
    });
});
