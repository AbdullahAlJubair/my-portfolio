// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.querySelector('.hamburger');
//     const mobileNav = document.querySelector('.mobileNav');

//     hamburger.addEventListener('click', function() {
//         mobileNav.classList.toggle('active');
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.querySelector('.hamburger');
//     const mobileNav = document.querySelector('.mobileNav');
//     const icon = hamburger.querySelector('i');

//     hamburger.addEventListener('click', function() {
//         mobileNav.classList.toggle('active');
//         if (mobileNav.classList.contains('active')) {
//             icon.classList.remove('fa-bars');
//             icon.classList.add('fa-xmark');
//         } else {
//             icon.classList.remove('fa-xmark');
//             icon.classList.add('fa-bars');
//         }
//     });
// });
// smooth scrolling code
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Navigation Menu functionality
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobileNav');
    const icon = hamburger.querySelector('i');

    function toggleMobileNav() {
        mobileNav.classList.toggle('active');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    }

    function closeMobileNav() {
        mobileNav.classList.remove('active');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }

    hamburger.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleMobileNav();
    });

    document.addEventListener('click', function (event) {
        const target = event.target;
        if (!mobileNav.contains(target) && !hamburger.contains(target)) {
            closeMobileNav();
        }
    });
});

// Logo Slider
$(document).ready(function () {
    $('#gallery').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 8000,
        pauseOnHover: false,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        variableWidth: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 1500,
                    speed: 4000
                }
            }
        ]
    });
});


// --------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector('.typewriter');
    const text = 'ABDULLAH AL ';
    const nickNameText = 'JUBAIR';
    const fullText = text + nickNameText;

    h1.innerHTML = ''; // Clear the h1 content

    let delay = 0;

    // Function to create and append spans with animation
    function createSpans(content, parent, className = '') {
        content.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.innerHTML = char === ' ' ? '&nbsp;' : char; // Preserve spaces
            if (className) span.classList.add(className);
            span.style.animation = `typing 0.5s ${delay}s forwards`;
            span.classList.add('char');
            delay += 0.1;
            parent.appendChild(span);
        });
    }

    // Create spans for the main text
    createSpans(text, h1);

    // Create spans for the nickName text
    const nickNameContainer = document.createElement('span');
    nickNameContainer.classList.add('nickName');
    createSpans(nickNameText, nickNameContainer, 'nickName');
    h1.appendChild(nickNameContainer);
});


    









