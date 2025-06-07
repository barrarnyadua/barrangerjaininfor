// Scroll effect for header
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Modal functions
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
  document.body.style.overflow = 'hidden';
}
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
};

// Highlight interactions
function showHighlight(type) {
  const messages = {
    chocolate: "Belgium produces over 220,000 tons of chocolate per year! 🍫",
    waffles: "Belgian waffles are lighter and crispier than American-style waffles! 🧇",
    history: "Belgium has been at the crossroads of European history for centuries! 📚",
    architecture: "From Gothic cathedrals to Art Nouveau masterpieces! 🏛️",
    cities: "Each Belgian city has its own unique character and charm! 🏙️"
  };
  alert(messages[type] || "Discover more about Belgium!");
}

// Random quote generator
function generateQuote() {
  const quotes = [
    "Belgium: Where chocolate meets history! 🍫",
    "In Belgium, every street corner tells a story 📖",
    "Life is like Belgian chocolate - rich and sweet! 🍫",
    "Belgium: Small country, big heart ❤️",
    "From Brussels sprouts to Brussels lace - Belgium has it all! 🌿",
    "In Belgium, art is not just in museums, it's everywhere! 🎨",
    "Belgian beer: Liquid poetry in a glass 🍺",
    "Belgium proves that good things come in small packages! 📦"
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteDisplay = document.getElementById('quote-display');
  quoteDisplay.style.opacity = '0';
  quoteDisplay.style.transform = 'translateY(20px)';
  setTimeout(() => {
    quoteDisplay.textContent = randomQuote;
    quoteDisplay.style.opacity = '1';
    quoteDisplay.style.transform = 'translateY(0)';
    quoteDisplay.style.transition = 'all 0.5s ease';
  }, 200);
}

// Section navigation (placeholder function)
function showSection(section) {
  alert(`Navigation to ${section} page would happen here! This is a demo of the home page.`);
}

// Add particles
function createParticle() {
  const particle = document.createElement('div');
  particle.style.position = 'fixed';
  particle.style.width = '4px';
  particle.style.height = '4px';
  particle.style.background = 'rgba(255, 215, 0, 0.8)';
  particle.style.borderRadius = '50%';
  particle.style.pointerEvents = 'none';
  particle.style.zIndex = '999';
  particle.style.left = Math.random() * window.innerWidth + 'px';
  particle.style.top = window.innerHeight + 'px';
  document.body.appendChild(particle);
  const animation = particle.animate([
    { top: window.innerHeight + 'px', opacity: 1 },
    { top: '-10px', opacity: 0 }
  ], {
    duration: 3000 + Math.random() * 2000,
    easing: 'linear'
  });
  animation.onfinish = () => particle.remove();
}
setInterval(createParticle, 2000);

// Initialize with a quote
window.onload = function () {
  setTimeout(generateQuote, 1000);
};
