document.addEventListener("DOMContentLoaded", function () {
    // Get the current URL
    var currentUrl = window.location.pathname;

    // Add the "active" class to the corresponding nav link
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function (navLink) {
        var navLinkUrl = navLink.getAttribute('href');

        if (currentUrl === navLinkUrl) {
            navLink.classList.add('active');
        }
    });
});