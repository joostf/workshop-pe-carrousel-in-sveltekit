const carrousel = document.querySelector('div');
const buttons = document.querySelectorAll('button');
const snappedSound = new Audio('https://assets.codepen.io/2585/snap.mp3');

// Add click handlers for both buttons
buttons.forEach((button, index) => {
  const direction = index === 0 ? -1 : 1;
  
  // Show buttons
  button.hidden = false

  button.addEventListener('click', () => {
    carrousel.scrollBy({
      left: direction * btn.parentNode.offsetWidth,
      behavior: 'smooth'
    });
    snappedSound.play();
  });
});

// Play sound when snapping occurs
carrousel.addEventListener('scrollsnapchange', () => {
  snappedSound.play();
});

