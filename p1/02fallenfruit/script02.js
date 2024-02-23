$(document).ready(function() {
    $('.content2').jGravity({
        target: 'span', // Selector for the elements to apply gravity to
        ignoreClass: 'ignore', // Class to ignore (optional)
        weight: 25, // Gravity force, higher value means stronger gravity
        depth: 5, // Depth of elements that should be affected by gravity
        drag: true // Enable mouse drag on elements
        // Add more options as needed
    });
});
