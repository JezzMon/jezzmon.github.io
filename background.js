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
