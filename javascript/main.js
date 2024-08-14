function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Function to handle scroll event
function handleScroll() {
    let headerContainer = document.querySelector('.header-container');
    let headerLogoDark = document.querySelector('.header-logo-dark');
    let headerLogoLight = document.querySelector('.header-logo-light');

    if (window.scrollY) {
        headerContainer.classList.add('shrink');

        headerLogoDark.classList.add('d-none');

        headerLogoLight.classList.remove('d-none');
        headerLogoLight.classList.add('d-block');

        mainHeader.classList.remove('navbar-dark');
        mainHeader.classList.add('navbar-light', 'bg-white');
    } else {
        headerContainer.classList.remove('shrink');

        headerLogoLight.classList.add('d-none');

        headerLogoDark.classList.remove('shrink', 'd-none');
        headerLogoDark.classList.add('d-block');

        headerLogoDark.classList.remove('shrink');

        mainHeader.classList.remove('navbar-light', 'bg-white');
        mainHeader.classList.add('navbar-dark');
    }

    let aboutText = document.getElementById('aboutText');

    if (aboutText && window.scrollY > 6100) {
        aboutText.classList.add('shrink');
        aboutText.classList.add('shrink');
    } else if (aboutText) {
        aboutText.classList.remove('shrink');
        aboutText.classList.remove('shrink');
    }

    if (aboutText && window.scrollY > 6500) {
        aboutText.classList.add('shrink-reverse');
    }
}

// Add debounced scroll event listener
window.addEventListener('scroll', debounce(handleScroll, 18));