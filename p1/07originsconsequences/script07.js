$(document).ready(function() {
    $(".paint span").on('mouseenter', function () {
        // Change color to #b41f2a
        $(this).animate({ 'color': '#b41f2a' }, 3000, 'linear');

        // Revert color back to #FFF6EC after 10 seconds
        // var spanElement = $(this);
        // setTimeout(function() {
        //     spanElement.animate({ 'color': '#FFF6EC' }, 3000, 'linear');
        // }, 7000); // 10 seconds in milliseconds
    });

    $(".paint2 span").on('mouseenter', function () {
        // Change color to #b41f2a
        $(this).animate({ 'color': '#b41f2a' }, 3000, 'linear');
    });

    $(".paint3 span").on('mouseenter', function () {
        // Change color to #b41f2a
        $(this).animate({ 'color': '#b41f2a' }, 3000, 'linear');

        // Revert color back to #FFF6EC after 10 seconds
        var spanElement = $(this);
        setTimeout(function() {
            spanElement.animate({ 'color': '#FFF6EC' }, 3000, 'linear');
        }, 7000); // 10 seconds in milliseconds
    });

    $(".paint4 span").on('mouseenter', function () {
        // Change color to #b41f2a
        $(this).animate({ 'color': '#b41f2a' }, 3000, 'linear');

        // Revert color back to #FFF6EC after 10 seconds
        var spanElement = $(this);
        setTimeout(function() {
            spanElement.animate({ 'color': '#FFF6EC' }, 3000, 'linear');
        }, 7000); // 10 seconds in milliseconds
    });
});
