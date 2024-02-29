document.addEventListener('DOMContentLoaded', function() {
    // Define the options for the Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the target is visible
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the target is visible, apply the fadeInUp animation
                entry.target.style.animation = 'fadeInUp 1.5s ease forwards';
                // Unobserve the target to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Get the elements to observe
    const targets = document.querySelectorAll('.container, .theend, .part1, .part2, .whitetext, .white');

    // Observe each target element
    targets.forEach(target => {
        observer.observe(target);
    });
});
