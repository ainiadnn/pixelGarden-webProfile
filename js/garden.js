const plantImage = document.getElementById('plantImage');
  const plantStage = document.getElementById('plantStage');
  const btnWater = document.getElementById('btnWater');
  const btnSunlight = document.getElementById('btnSunlight');
  const waterCountEl = document.getElementById('waterCount');
  const sunCountEl = document.getElementById('sunCount');
  const needsInfo = document.getElementById('needsInfo');
  const waterTimerEl = document.getElementById('waterTimer');
  const sunTimerEl = document.getElementById('sunTimer');

  let shouldFadeIn = false;

  const stages = [
    { name: 'Sprout', img: './assets/images/sprout.png', water: 3, sun: 2 },
    { name: 'Bud', img: './assets/images/bud.png', water: 5, sun: 3 },
    { name: 'Sunflower', img: './assets/images/sunflower.png', water: 10, sun: 5 },
    { name: 'Sunflower Tree', img: './assets/tree.png', water: Infinity, sun: Infinity }
  ];

  let currentStage = 0;
  let water = 5;
  let sun = 3;
  let usedWater = 0;
  let usedSun = 0;

  let waterTimer = 60;
  let sunTimer = 60;

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60).toString().padStart(1, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  }

  function updateTimers() {
    waterTimerEl.textContent = formatTime(waterTimer);
    sunTimerEl.textContent = formatTime(sunTimer);
  }

  function updateNeedsInfo() {
    const stage = stages[currentStage];
    const wLeft = Math.max(stage.water - usedWater, 0);
    const sLeft = Math.max(stage.sun - usedSun, 0);

    if (currentStage === stages.length - 1 && wLeft === 0 && sLeft === 0) {
      needsInfo.textContent = `🌳 Fully grown!`;
    } else {
      needsInfo.textContent = `Needs ${wLeft} water and ${sLeft} sunlight to grow`;
    }
  }

function updateUI() {
  const stage = stages[currentStage];
  plantImage.src = stage.img;
  plantStage.textContent = stage.name;

  // ⛔️ Hanya lakukan fade-in jika beneran naik stage
if (shouldFadeIn) {
  plantImage.classList.remove('animate-fadein');
  void plantImage.offsetWidth; // Force reflow
  plantImage.classList.add('animate-fadein');
  shouldFadeIn = false;
} else {
  plantImage.classList.remove('animate-fadein');
}


  waterCountEl.textContent = water;
  sunCountEl.textContent = sun;

  btnWater.disabled = water <= 0;
  btnSunlight.disabled = sun <= 0;

  btnWater.classList.toggle('opacity-50', water <= 0);
  btnWater.classList.toggle('cursor-not-allowed', water <= 0);
  btnSunlight.classList.toggle('opacity-50', sun <= 0);
  btnSunlight.classList.toggle('cursor-not-allowed', sun <= 0);

  updateNeedsInfo();
}


  function growStageIfReady() {
    const stage = stages[currentStage];
    if (usedWater >= stage.water && usedSun >= stage.sun) {
      if (currentStage < stages.length - 1) {
        currentStage++;
        usedWater = 0;
        usedSun = 0;
        shouldFadeIn = true;
      }
    }
  }

  function giveWater() {
    if (water > 0) {
      water--;
      usedWater++;
      plantImage.classList.add('animate-pulsequick');
      setTimeout(() => plantImage.classList.remove('animate-pulsequick'), 400);
      growStageIfReady();
      updateUI();
    }
  }

  function giveSunlight() {
    if (sun > 0) {
      sun--;
      usedSun++;
      plantImage.classList.add('animate-action');
      setTimeout(() => plantImage.classList.remove('animate-action'), 400);
      growStageIfReady();
      updateUI();
    }
  }

  btnWater.addEventListener('click', giveWater);
  btnSunlight.addEventListener('click', giveSunlight);

  setInterval(() => {
    waterTimer--;
    sunTimer--;
    if (waterTimer <= 0) {
      if (water < 10) water++;
      waterTimer = 60;
    }
    if (sunTimer <= 0) {
      if (sun < 10) sun++;
      sunTimer = 60;
    }
    updateTimers();
    updateUI();
  }, 1000);

  updateTimers();
  updateUI();