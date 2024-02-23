$(document).ready(function() {
    // Event delegation for the initial button
    $('.content').on('click', '#beginBtn', function() {
        var $newText = $('<p>No one has yet to <button class="beginBtn">begin</button> a life who will not end it.</p>');
        $('#textContainer1').append($newText);
        scrollToElement($newText);
    });

    // Event delegation for the dynamically added buttons
    $('.content').on('click', '.beginBtn', function() {
        // Get the closest parent container
        var container = $(this).closest('div');
        // Find the next container index
        var nextIndex = parseInt(container.attr('id').replace('textContainer', '')) + 1;
        // Check if the button clicked is within the specific text container
        if (container.attr('id') === 'textContainer2') {
            var $newText = $('<p>Not every poem is finished—one poem is abandoned, another catches fire and is carried away by the wind, which may be an ending, but it is the ending of a poem without an end. <br><br>Paul Valéry, the French poet and thinker, once said that no poem is ever ended, that every poem is merely abandoned.</p><br><p><a href="../home.html"><span class="abandon"> [ abandon this poem? ] </span></a></p>');
            $('#textContainer3').append($newText);
            scrollToElement($newText);
        } else {
            var $newText = $('<p>In poetry, the number of <button class="beginBtn">begin</button>nings so far exceeds the number of endings that we cannot even conceive of it.</p>');
            $('#textContainer' + nextIndex).append($newText);
            scrollToElement($newText);
        }
    });

    // Function to scroll to the newly appended element
    function scrollToElement($element) {
        $('html, body').animate({
            scrollTop: $element.offset().top
        }, 500);
    }
});
