document.addEventListener('DOMContentLoaded', function() {
    // Get the begin link
    const beginLink = document.getElementById('beginLink');
    const headerIndex = document.getElementById('headerIndex');
    const goToSleepLink = document.querySelector('footer a');

    // Add click event listener to the begin link
    beginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        document.body.classList.toggle('changeBackground'); // Toggle the class to trigger the background color change
        headerIndex.classList.toggle('changeTextColor'); // Toggle the class to change text color for the header
    });

    // Add click event listener to the "go to sleep" link
    goToSleepLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        document.body.classList.remove('changeBackground'); // Remove the class to revert background color to black
        headerIndex.classList.remove('changeTextColor'); // Remove the class to revert text color to white
    });
});
