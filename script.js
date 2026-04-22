const artworks = [
    { year: 2020, title: 'Sunset', description: 'A peaceful sunset.', image: 'https://via.placeholder.com/600x400?text=Sunset' },
    { year: 2021, title: 'Mountain', description: 'Majestic peaks.', image: 'https://via.placeholder.com/600x400?text=Mountain' },
    { year: 2022, title: 'Ocean', description: 'Waves crashing.', image: 'https://via.placeholder.com/600x400?text=Ocean' },
    // Add more artworks as needed
];

const timeline = document.getElementById('timeline');
const artDisplay = document.getElementById('art-display');

// Generate timeline markers
artworks.forEach((art, index) => {
    const marker = document.createElement('div');
    marker.className = 'timeline-marker';
    marker.textContent = art.year;
    marker.addEventListener('click', () => showArt(index));
    timeline.appendChild(marker);
});

// Function to display selected artwork
function showArt(index) {
    const art = artworks[index];
    artDisplay.innerHTML = `
        <img src="${art.image}" alt="${art.title}">
        <h2>${art.title}</h2>
        <p>${art.description}</p>
    `;
    // Update active marker
    document.querySelectorAll('.timeline-marker').forEach((m, i) => {
        m.classList.toggle('active', i === index);
    });
}

// Show first artwork by default
showArt(0);
