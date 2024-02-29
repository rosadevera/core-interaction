document.addEventListener('DOMContentLoaded', function() {
    // Function to add animation to the appended text
    function addAnimation(element) {
        element.classList.add('text-animation');
    }

    // Function to reveal the next hidden paragraph
    function revealNextParagraph(element) {
        // Find the next hidden paragraph
        let nextParagraph = element.nextElementSibling;
        while (nextParagraph) {
            if (nextParagraph.classList.contains('hidden') && nextParagraph.tagName === 'P') {
                nextParagraph.classList.remove('hidden');
                addAnimation(nextParagraph); // Apply animation to the revealed paragraph
                nextParagraph.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            }
            nextParagraph = nextParagraph.nextElementSibling;
        }
    }

    // Add click event listener to semicolons in block1
    const semicolonsBlock1 = document.querySelectorAll('#block1 .semicolon');
    semicolonsBlock1.forEach(semicolon => {
        semicolon.addEventListener('click', () => {
            revealNextParagraph(document.getElementById('block1'));
        });
    });

    // Add click event listener to semicolons in block2
    const semicolonsBlock2 = document.querySelectorAll('#block2 .semicolon');
    semicolonsBlock2.forEach(semicolon => {
        semicolon.addEventListener('click', () => {
            revealNextParagraph(document.getElementById('block2'));
        });
    });

    // Get all trigger elements
    const semicolons = document.querySelectorAll('.semicolon');

    // Add click event listener to each trigger
    semicolons.forEach(semicolon => {
        semicolon.addEventListener('click', () => {
            // Get all elements following the clicked semicolon
            const elementsAfter = Array.from(semicolon.parentElement.children).slice(Array.from(semicolon.parentElement.children).indexOf(semicolon) + 1);
            
            // Find and reveal the next hidden paragraph(s)
            for (const element of elementsAfter) {
                if (element.classList.contains('hidden') && element.tagName === 'P') {
                    element.classList.remove('hidden');
                    addAnimation(element); // Apply animation to the revealed paragraph
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    break;
                }
            }
        });
    });

});
