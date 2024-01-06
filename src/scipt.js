// Smooth Scrolling
const sectionLinks = document.querySelectorAll('a[href^="#"]');
sectionLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionId = this.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Tree Image Gallery (adjust image paths and button IDs as needed)
const treeImages = [
  'images/oak-tree.jpg',
  'images/maple-tree.jpg',
  'images/pine-tree.jpg',
];
let currentImageIndex = 0;
const treeImage = document.querySelector('.hero img');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

function changeImage() {
  treeImage.src = treeImages[currentImageIndex];
}

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % treeImages.length;
  changeImage();
});

prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + treeImages.length) % treeImages.length;
  changeImage();
});

// Form Validation
const plantForm = document.getElementById('plant-form');
plantForm.addEventListener('submit', (event) => {
  const treeSpecies = document.getElementById('tree-species').value;
  if (treeSpecies.trim() === '') {
    event.preventDefault();
    alert('Please enter a tree species.');
  }
});

// Interactive Map (requires Leaflet library, adjust map ID and coordinates)
if (typeof L !== 'undefined') { // Check if Leaflet is available
  const nurseryMap = L.map('nursery-map').setView([45.52, -122.67], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(nurseryMap);

  const nurseryMarkers = [
    { name: 'Green Thumb Nursery', lat: 45.515, lng: -122.675 },
    { name: 'Sproutling Seeds & Saplings', lat: 45.525, lng: -122.665 }
  ];

  nurseryMarkers.forEach(marker => {
    L.marker([marker.lat, marker.lng])
      .addTo(nurseryMap)
      .bindPopup(marker.name);
  });
}
