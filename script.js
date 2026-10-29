
document.addEventListener("DOMContentLoaded", () => {

    // Elements that will animate while scrolling
    const elements = document.querySelectorAll(
        ".hero-content, .hero-image, .about, .services, .gallery, .contact"
    );

    // Add the animation class
    elements.forEach((element) => {
        element.classList.add("reveal");
    });

    // Detect when an element enters the screen
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    // Start observing each element
    elements.forEach((element) => {
        observer.observe(element);
    });

});
