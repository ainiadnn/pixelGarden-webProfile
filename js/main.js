// ======================
// 🌙 DARK MODE TOGGLE
// ======================
function flipCard(card) {
  const sound = document.getElementById('flipSound');
  card.classList.add('animate-pulsequick');
  setTimeout(() => {
    card.classList.remove('animate-pulsequick');
    card.classList.toggle('flipped');
    sound?.play();
  }, 150);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ main.js terhubung!");

  // === DARK MODE ===
  const toggle = document.getElementById('toggleDark');
  const html = document.documentElement;

  if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
  }

  toggle?.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  });

  
// === REVEAL SECTION ===
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // ini penting biar bisa animasi lagi saat masuk viewport
    }
  });
}, { threshold: 0.1 });

reveals.forEach(reveal => revealObserver.observe(reveal));


  // === SCROLL SHOW REVEAL ===
  window.addEventListener("scroll", () => {
    reveals.forEach(section => {
      const top = section.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.9;
      if (top < trigger) {
        section.classList.add("opacity-100", "translate-y-0");
        section.classList.remove("opacity-0", "translate-y-8");
      }
    });
  });

  // === BACK TO TOP ===
  const toTop = document.getElementById('to-top');
  toTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    const btn = document.getElementById('to-top');
    if (!btn) return;
    btn.classList.toggle('hidden', window.scrollY <= 500);
  });

  // === HERO TYPING ===
  const line1 = document.getElementById("line1");
  const welcome = document.getElementById("welcome");
  const pixel = document.getElementById("pixel");
  const cursor = document.getElementById("cursor");
  const heroButtons = document.getElementById("hero-buttons");

  setTimeout(() => {
    typeText(welcome, "Welcome to my ", 80, () => {
      pixel?.classList.remove("hidden");
      typeText(pixel, "Pixel Garden", 100, () => {
        cursor?.classList.remove("hidden");
        setTimeout(() => {
          heroButtons?.classList.remove("opacity-0");
          heroButtons?.classList.add("opacity-100");
        }, 500);
      });
    });
  }, 2000);

  // === PIXEL PET ===
  const ainiPixel = document.getElementById('ainiPixel');
  const pixelPetContainer = document.getElementById('pixelPetContainer');
  const petMessage = document.getElementById('petMessage');
  const btnFunfact = document.getElementById('btn-funfact');
  const pixelSound = document.getElementById('pixelSound');

  const messages = [
    "🌿 Built with love and Tailwind CSS!",
    "🛠️ Debugging is like gardening… constant weeding.",
    "🌸 This pixel pet lives in your browser now.",
    "🍃 This garden blooms only in dark mode!",
    "🎮 I’m Aini’s secret assistant. Shh!"
  ];

  ainiPixel?.addEventListener('click', () => {
    ainiPixel.classList.add('animate-fadeout');
    setTimeout(() => {
      ainiPixel.classList.add('hidden');
      pixelPetContainer?.classList.remove('hidden');
      pixelPetContainer?.classList.add('animate-fadein');
    }, 500);
    pixelSound?.play();
  });

  btnFunfact?.addEventListener('click', () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    if (petMessage) petMessage.textContent = randomMsg;
  });

  const btnClosePet = document.getElementById('btn-close-pet');
  btnClosePet?.addEventListener('click', () => {
    pixelPetContainer?.classList.add('hidden');
    ainiPixel?.classList.remove('hidden');
    ainiPixel?.classList.remove('animate-fadeout');
  });

});

// === Typing Text Helper Function ===
function typeText(el, text, speed, callback) {
  if (!el) return;
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      callback?.();
    }
  }, speed);
}


// toggle side bar menu
document.addEventListener("DOMContentLoaded", () => {
  const toggleMenu = document.getElementById('toggleMenu');
  const sidebar = document.getElementById('sidebarMenu');

  toggleMenu.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
  });

  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !toggleMenu.contains(e.target)) {
      sidebar.classList.add('-translate-x-full');
    }
  });
});


// botton left right
const cardTrack = document.getElementById("cardTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0; // posisi awal
const totalSlides = cardTrack.children.length; // jumlah "halaman"

function updateSlide() {
  cardTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Tombol next
nextBtn.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlide();
  }
});

// Tombol prev
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});
