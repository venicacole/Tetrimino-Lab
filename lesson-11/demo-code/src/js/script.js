document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-aside');
    const aside = document.getElementById('slide-aside');

    toggleButton.addEventListener('click', function() {
        aside.classList.toggle('active');

        // Toggle the button text based on the aside's state
        if (aside.classList.contains('active')) {
            toggleButton.innerHTML = '&laquo;'; // "<<"
        } else {
            toggleButton.innerHTML = '&raquo;'; // ">>"
        }
    });
});
