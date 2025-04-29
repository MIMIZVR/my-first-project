document.querySelector('.logo-link').addEventListener('click', function(e) {
    e.preventDefault();
    const logoImage = document.querySelector('.logo img');
    if (logoImage) {
        logoImage.style.transform = 'rotate(360deg) scale(1.1)';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 600);
    }
});

// ყველა ნავიგაციის ლინკი
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // თავიდან აიცილებს ლინკის ნორმალურ ქცევას

        // მიიღეთ ჰეშ-ლინკი (მაგალითად: #about, #resume)
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // გადასვლა სექციაზე, და მაგისთვის ოდნავ გამოტოვოთ offset
        targetSection.scrollIntoView({
            behavior: 'smooth', // გასვლა ნელ-ნელა
            block: 'start', // როდესაც სექცია იწყება
        });

        // ნავიგაციის აქტიური კლასის ჩამატება
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});


// სოციალური მედიის ლინკები
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        const platform = event.target.closest('a').getAttribute('data-name');
        console.log(`თქვენ დააჭირეთ ${platform}-ის ლინკს!`);
        alert(`გადაგიყვანთ ${platform}-ზე!`);
    });
});

// სქროლის მიხედვით სექციების ხილვადობა
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll('.left-side, .right-side');
    sections.forEach(function (section) {
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const aboutText = "I'm a frontend developer based in sunny Tbilisi, Georgia.";
    let index = 0;
    const aboutParagraph = document.getElementById("about-text");

    function typeText() {
        if (index < aboutText.length) {
            aboutParagraph.innerHTML += aboutText.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    typeText();
});

// Lightbox ფუნქცია
const images = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

images.forEach(image => {
    image.addEventListener('click', (e) => {
        lightbox.style.display = 'flex';
        lightboxImg.src = e.target.src;
    });
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === closeBtn) {
        lightbox.style.display = 'none';
    }
});

// პაი-ჩარტის ჰოვერ-ეფექტი
const leftText = document.querySelector('.text.left');
const rightText = document.querySelector('.text.right');

const pieChart = document.querySelector('.pie-chart');
pieChart.addEventListener('mouseover', () => {
    leftText.style.opacity = '0.8';
    rightText.style.opacity = '0.8';
});

pieChart.addEventListener('mouseout', () => {
    leftText.style.opacity = '1';
    rightText.style.opacity = '1';
});

// Part-Coder და Part-Designer ინტერიაქტივობა
const coderSection = document.querySelector('.part-coder');
const designerSection = document.querySelector('.part-designer');

coderSection.addEventListener('click', () => {
    alert('თქვენ დააჭირეთ Part Coder-ზე! აქ კონცენტრირებული ვართ კოდირების უნარებზე.');
});

designerSection.addEventListener('click', () => {
    alert('თქვენ დააჭირეთ Part Designer-ზე! აქ კონცენტრირებული ვართ დიზაინის უნარებზე.');
});

// Read More ღილაკის ფუნქცია
document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const moreAboutMe = document.querySelector('.moreaboutme');

    moreAboutMe.classList.remove('active');
    readMoreBtn.textContent = 'Read My Story';

    readMoreBtn.addEventListener('click', () => {
        if (moreAboutMe.classList.contains('active')) {
            moreAboutMe.classList.remove('active');
            readMoreBtn.textContent = 'Read My Story';
        } else {
            moreAboutMe.classList.add('active');
            readMoreBtn.textContent = 'Hide My Story';
            moreAboutMe.scrollIntoView({ behavior: 'smooth' });
        }
    });

    window.addEventListener('scroll', () => {
        const rect = moreAboutMe.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (moreAboutMe.classList.contains('active') && (rect.bottom < 0 || rect.top > windowHeight)) {
            moreAboutMe.classList.remove('active');
            readMoreBtn.textContent = 'Read My Story';
        }
    });
});


// კონტაქტის ლინკები და ფორმა
const contactLinks = document.querySelectorAll('.contact-link');
const contactForm = document.getElementById('contact-form');

// ლინკზე დაჭერისას გამოჩენა ან დამალვა
contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const isHidden = getComputedStyle(contactForm).display === 'none';

        if (isHidden) {
            contactForm.style.display = 'block';
            contactForm.scrollIntoView({ behavior: 'smooth' });
        } else {
            contactForm.style.display = 'none';
        }
    });
});

// FORM-ის გარე არეზე დაწკაპებისას დამალვა
document.addEventListener('click', (e) => {
    const isClickInsideForm = contactForm.contains(e.target);
    const isClickOnLink = e.target.classList.contains('contact-link');

    if (!isClickInsideForm && !isClickOnLink) {
        contactForm.style.display = 'none';
    }
});




// ფუტერის ლინკები
document.querySelectorAll('footer nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
    
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
