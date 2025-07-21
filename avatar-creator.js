// Avatar feature options
const skinTones = {
  light: '#ffe0b2',
  medium: '#c68642',
  dark: '#7d4b20',
};
const hairColors = {
  black: '#222',
  blonde: '#ffe066',
  red: '#e57373',
  purple: '#a259e6',
};
const outfits = {
  hoodie: { color: '#4caf50', label: 'Hoodie' },
  tank: { color: '#fff', label: 'Tank Top' },
  jersey: { color: '#8e24aa', label: 'Jersey' },
  tshirt: { color: '#222', label: 'T-shirt' },
};

// Fabric.js canvas setup
const canvas = new fabric.Canvas('avatarCanvas', { selection: false });
canvas.setBackgroundColor('#e0ffe0', canvas.renderAll.bind(canvas));

// Draw avatar function
function drawAvatar() {
  canvas.clear();
  canvas.setBackgroundColor('#e0ffe0', canvas.renderAll.bind(canvas));

  // Get selections
  const skin = document.getElementById('skinTone').value;
  const hairStyle = document.getElementById('hairStyle').value;
  const hairColor = document.getElementById('hairColor').value;
  const outfit = document.getElementById('outfit').value;
  const accBlunt = document.getElementById('accBlunt').checked;
  const accSnapback = document.getElementById('accSnapback').checked;
  const accSunglasses = document.getElementById('accSunglasses').checked;
  const accChain = document.getElementById('accChain').checked;

  // Head (ellipse)
  const head = new fabric.Ellipse({
    left: 110, top: 60, rx: 50, ry: 60,
    fill: skinTones[skin], stroke: '#222', strokeWidth: 2,
  });
  canvas.add(head);

  // Neck
  const neck = new fabric.Rect({
    left: 140, top: 120, width: 20, height: 30,
    fill: skinTones[skin], stroke: '#222', strokeWidth: 2,
    rx: 8, ry: 8,
  });
  canvas.add(neck);

  // Body (outfit)
  const body = new fabric.Rect({
    left: 100, top: 150, width: 60, height: 100,
    fill: outfits[outfit].color, stroke: '#222', strokeWidth: 2,
    rx: 20, ry: 20,
  });
  canvas.add(body);

  // Arms
  const leftArm = new fabric.Rect({
    left: 60, top: 170, width: 40, height: 20,
    fill: skinTones[skin], stroke: '#222', strokeWidth: 2,
    rx: 10, ry: 10,
    angle: -15,
  });
  const rightArm = new fabric.Rect({
    left: 160, top: 170, width: 40, height: 20,
    fill: skinTones[skin], stroke: '#222', strokeWidth: 2,
    rx: 10, ry: 10,
    angle: 15,
  });
  canvas.add(leftArm);
  canvas.add(rightArm);

  // Hair (cartoon styles)
  let hair;
  switch (hairStyle) {
    case 'short':
      hair = new fabric.Rect({ left: 120, top: 40, width: 60, height: 30, fill: hairColors[hairColor], rx: 18, ry: 18, stroke: '#222', strokeWidth: 2 });
      break;
    case 'afro':
      hair = new fabric.Circle({ left: 100, top: 20, radius: 45, fill: hairColors[hairColor], stroke: '#222', strokeWidth: 2 });
      break;
    case 'mohawk':
      hair = new fabric.Rect({ left: 145, top: 20, width: 15, height: 60, fill: hairColors[hairColor], rx: 8, ry: 8, stroke: '#222', strokeWidth: 2 });
      break;
    case 'long':
      hair = new fabric.Rect({ left: 120, top: 30, width: 60, height: 60, fill: hairColors[hairColor], rx: 30, ry: 30, stroke: '#222', strokeWidth: 2 });
      break;
  }
  if (hair) canvas.add(hair);

  // Face (eyes, mouth)
  const leftEye = new fabric.Circle({ left: 135, top: 90, radius: 6, fill: '#fff', stroke: '#222', strokeWidth: 1 });
  const rightEye = new fabric.Circle({ left: 165, top: 90, radius: 6, fill: '#fff', stroke: '#222', strokeWidth: 1 });
  const leftPupil = new fabric.Circle({ left: 138, top: 93, radius: 2, fill: '#222' });
  const rightPupil = new fabric.Circle({ left: 168, top: 93, radius: 2, fill: '#222' });
  const mouth = new fabric.Path('M140 120 Q160 140 180 120', { stroke: '#e57373', strokeWidth: 3, fill: '', left: 0, top: 0 });
  canvas.add(leftEye); canvas.add(rightEye); canvas.add(leftPupil); canvas.add(rightPupil); canvas.add(mouth);

  // Accessories
  if (accBlunt) {
    const blunt = new fabric.Rect({ left: 60, top: 185, width: 30, height: 8, fill: '#fff8e1', stroke: '#222', strokeWidth: 1, rx: 4, ry: 4 });
    const tip = new fabric.Rect({ left: 85, top: 188, width: 5, height: 4, fill: '#e57373', stroke: '#222', strokeWidth: 1 });
    canvas.add(blunt); canvas.add(tip);
  }
  if (accSnapback) {
    const hat = new fabric.Rect({ left: 120, top: 25, width: 60, height: 20, fill: '#222', stroke: '#4caf50', strokeWidth: 3, rx: 10, ry: 10 });
    const brim = new fabric.Rect({ left: 140, top: 40, width: 30, height: 8, fill: '#4caf50', stroke: '#222', strokeWidth: 1, rx: 4, ry: 4 });
    canvas.add(hat); canvas.add(brim);
  }
  if (accSunglasses) {
    const leftGlass = new fabric.Rect({ left: 130, top: 90, width: 16, height: 10, fill: '#222', stroke: '#8e24aa', strokeWidth: 2, rx: 4, ry: 4 });
    const rightGlass = new fabric.Rect({ left: 154, top: 90, width: 16, height: 10, fill: '#222', stroke: '#8e24aa', strokeWidth: 2, rx: 4, ry: 4 });
    const bridge = new fabric.Rect({ left: 146, top: 94, width: 8, height: 4, fill: '#8e24aa', stroke: '#222', strokeWidth: 1 });
    canvas.add(leftGlass); canvas.add(rightGlass); canvas.add(bridge);
  }
  if (accChain) {
    const chain = new fabric.Path('M120 230 Q160 270 180 230', { stroke: '#ffd700', strokeWidth: 5, fill: '', left: 0, top: 0 });
    canvas.add(chain);
  }
}

// Event listeners for controls
['skinTone','hairStyle','hairColor','outfit','accBlunt','accSnapback','accSunglasses','accChain'].forEach(id => {
  document.getElementById(id).addEventListener('change', drawAvatar);
  document.getElementById(id).addEventListener('input', drawAvatar);
});

drawAvatar(); // Initial draw

// Download button
const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const dataURL = canvas.toDataURL({ format: 'png' });
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'budz-high-avatar.png';
  link.click();
});

// Instagram share button
const instagramBtn = document.getElementById('instagramBtn');
instagramBtn.addEventListener('click', function(e) {
  e.preventDefault();
  // Instagram does not support direct image upload via URL, so we open Instagram with hashtag
  window.open('https://www.instagram.com/explore/tags/BudzHighAvatar/', '_blank');
}); 
