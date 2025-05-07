const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});






document.addEventListener("DOMContentLoaded", function () {
    let box = document.querySelector(".box");

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                box.style.animationPlayState = "running"; // Play animation
            } else {
                box.style.animationPlayState = "paused"; // Pause when not visible
            }
        });
    }, { threshold: 1.0 });

    observer.observe(box);
});



document.addEventListener("DOMContentLoaded", function () {
    const about = document.querySelector(".about-anim");
    const projects = document.querySelector(".projects-anim");
    const skills = document.querySelector(".skills-anim");
    const blogs = document.querySelector(".blog-anim");
    const contact = document.querySelector(".contact-anim");

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                // entry.target.style.transform = "translateY(0)"; 
            } else {
                entry.target.style.opacity = "0";
                // entry.target.style.transform = "translateY(20px)"; 
            }
        });
    }, { threshold: 0.5 });

    observer.observe(about);
    observer.observe(projects);
    observer.observe(skills);
    observer.observe(blogs);
    observer.observe(contact);
});


function downloadResume() {
    const link = document.createElement("a");
    link.href = "assets/resume.pdf";
    link.download = "Jesmond_Resume.pdf";
    link.click();
}

const images = [
    {
        file: 'background.jpg',
        primary: '#ffffff',
        secondary: '#000000',
        accent1: '#616f89',
        accent2: '#d8c8bc',
        gradient: 'linear-gradient( #eadaca, #98a8bb, #576780, #98a8bb)',
        title: '#e2d2c3'
    },
    {
        file: 'background-1.jpg',
        primary: '#f0f0f0',
        secondary: '#333333',
        accent1: '#f7ac68',
        accent2: '#eba28b',
        gradient: 'linear-gradient( #130f5b, #9369a8)',
        title: '#e2d2c3'
    },
    {
        file: 'background-3.jpg',
        primary: '#f0f0f0',
        secondary: '#333333',
        accent1: '#63b17e',
        accent2: '#ffffa9',
        gradient: 'linear-gradient( #204c3d, #00292d)',
        title: '#3d654b',
    },
    {
        file: 'background-4.jpg',
        primary: '#f0f0f0',
        secondary: '#333333',
        accent1: '#2b4b62',
        accent2: '#e5eef5',
        gradient: 'linear-gradient( #98a8bb, #1b313f)',
        title: '#e2d2c3'
    },
    // {
    //   file: 'background-5.jpg',
    //   primary: '#f0f0f0',
    //   secondary: '#333333',
    //   accent1: '#ffe473',
    //   accent2: '#ffe473',
    //   gradient: 'linear-gradient( #ffaf1c, #5c1616)',
    //   title: '#ffb01d'
    // }
    // ... more images
];

// Pick random image
const randomImage = images[Math.floor(Math.random() * images.length)];

// Set the <img> source
const bgImage = document.getElementById('bg-image');
bgImage.src = `images/${randomImage.file}`;

// Set CSS variables
document.documentElement.style.setProperty('--primary-color', randomImage.primary);
document.documentElement.style.setProperty('--secondary-color', randomImage.secondary);
document.documentElement.style.setProperty('--accent-1', randomImage.accent1);
document.documentElement.style.setProperty('--accent-2', randomImage.accent2);
document.documentElement.style.setProperty('--title-span', randomImage.title);
document.documentElement.style.setProperty('--gradient-accent', randomImage.gradient);
// document.documentElement.style.setProperty('--font-color-1', randomImage.accent1);
