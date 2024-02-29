$(document).ready(function() {
    var lines = [
        "I believe the poem is an act of the mind.",
        "I think it is easier to talk about the end of a poem than it is to talk about its beginning.",
        "Because the poem ends on the page, but it begins off the page, it begins in the mind.",
        "The mind acts, the mind wills a poem, often against our own will; somehow this happens, somehow a poem gets written in the middle of a chaotic holiday party that has just run out of ice, and it's your house.",
        "An act of the mind.",
        "To move, to make happen, to make manifest.",
        "Be an act of Congress.",
        "A state of real existence rather than possibility.",
        "And poets love possibility!",
        "They love to wonder and explore.",
        "Hard lot!",
        "But the poem, no matter how full of possibility, has to exist!",
        "To conduct oneself, to behave.",
        "How a poem acts marks its individual character.",
        "A poem by Glandolyn Blue does not sound like a poem by Timothy Sure.",
        "To pretend, feign, impersonate.",
        "That, too, yes and always, because self-consciousness is its own pretension, and has been from its beginning;",
        "the human mind is capable of a great elastic theatre.",
        "As the poet Ralph angel puts it,",
        "“The poem is an interpretation of weird theatrical shit.”",
        "the weird theatrical shit is what goes on around us every day of our lives;",
        "an animal of only instinct, Johnny Ferret, has in his actions drama, but no theater;",
        "theater requires that you draw a circle around the action and observe it from outside the circle;",
        "in other words, self-consciousness is theatre."
    ];

    var index = 0;

    $('#act').click(function() {
        if (index < lines.length) {
            $('<div class="line">' + lines[index] + '</div>').hide().appendTo('.content2').fadeIn(1000);
            index++;

            // Automatically scroll to the bottom of .content2
            var content2 = $('.content2');
            content2.scrollTop(content2.prop("scrollHeight"));
        }
        
    });
});
