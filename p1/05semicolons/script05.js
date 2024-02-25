document.addEventListener('DOMContentLoaded', function() {
  // Get all trigger elements
  const semicolons = document.querySelectorAll('.semicolon');

  // Add click event listener to each trigger
  semicolons.forEach(semicolon => {
    semicolon.addEventListener('click', () => {
      // Get the next sibling element
      const nextParagraph = semicolon.nextElementSibling;

      // Toggle the visibility of the next paragraph
      if (nextParagraph) {
        nextParagraph.classList.toggle('hidden');
      }
    });
  });

  document.getElementById('revealAll').addEventListener('click', () => {
    const hiddenParagraphs = document.querySelectorAll('.hidden');
    hiddenParagraphs.forEach(paragraph => {
      paragraph.classList.remove('hidden');
    });
  });
});
