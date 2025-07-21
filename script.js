// Character bios and images (placeholder data)
const characterData = [
  {
    name: 'Chill Bud',
    bio: 'The laid-back leader who always keeps it cool. Loves reggae and good vibes.',
    img: 'char1.png',
  },
  {
    name: 'Lucky',
    bio: 'The mischievous prankster with a heart of gold. Always rolling into trouble!',
    img: 'char2.png',
  },
  {
    name: 'Sparky',
    bio: 'The energetic spark of the group, full of wild ideas and contagious laughter.',
    img: 'char3.png',
  },
  {
    name: 'Blaze',
    bio: 'The creative dreamer, always drawing, painting, and imagining new worlds.',
    img: 'char4.png',
  },
];

// Watch with Sound button
const trailerVideo = document.getElementById('trailerVideo');
const soundBtn = document.getElementById('soundBtn');
soundBtn.addEventListener('click', () => {
  trailerVideo.muted = false;
  trailerVideo.play();
  soundBtn.style.display = 'none';
});

// Character popups
const charCards = document.querySelectorAll('.character-card');
const charPopup = document.getElementById('charPopup');
const popupImg = document.getElementById('popupImg');
const popupName = document.getElementById('popupName');
const popupBio = document.getElementById('popupBio');
const closePopup = document.querySelector('.close-popup');

charCards.forEach((card, idx) => {
  card.addEventListener('click', () => {
    const data = characterData[idx];
    popupImg.src = data.img;
    popupName.textContent = data.name;
    popupBio.textContent = data.bio;
    charPopup.classList.add('active');
  });
});
closePopup.addEventListener('click', () => {
  charPopup.classList.remove('active');
});
charPopup.addEventListener('click', (e) => {
  if (e.target === charPopup) charPopup.classList.remove('active');
}); 
