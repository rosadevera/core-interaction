document.addEventListener('DOMContentLoaded', function() {
    // Function to add animation to the appended text
    function addAnimation(element) {
        element.classList.add('text-animation');
    }

    // Get all trigger elements
    const semicolons = document.querySelectorAll('.semicolon');

    // Add click event listener to each trigger
    semicolons.forEach(semicolon => {
        semicolon.addEventListener('click', () => {
            // Get the next sibling element
            const nextParagraph = semicolon.nextElementSibling;

            // Toggle the visibility of the next paragraph
            if (nextParagraph) {
                nextParagraph.classList.remove('hidden');
                addAnimation(nextParagraph); // Apply animation to the revealed paragraph

                // Automatically scroll to the revealed paragraph
                nextParagraph.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // If the paragraph is revealed, apply event listeners to its semicolon
                const semicolonInside = nextParagraph.querySelector('.semicolon');
                if (semicolonInside) {
                    semicolonInside.addEventListener('click', () => {
                        // Get the next sibling element of the revealed paragraph
                        const nextHiddenParagraph = nextParagraph.nextElementSibling;

                        // Toggle the visibility of the next hidden paragraph
                        if (nextHiddenParagraph) {
                            nextHiddenParagraph.classList.remove('hidden');
                            addAnimation(nextHiddenParagraph); // Apply animation to the newly revealed paragraph

                            // Automatically scroll to the newly revealed paragraph
                            nextHiddenParagraph.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    });
                }
            }
        });
    });
});
