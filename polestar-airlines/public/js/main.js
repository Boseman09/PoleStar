document.addEventListener('DOMContentLoaded', () => {
  /* ---------- mobile nav ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  /* ---------- offers popup rotation ---------- */
  const toast = document.getElementById('offer-toast');
  const toastTitle = document.getElementById('offer-title');
  const toastText = document.getElementById('offer-text');
  const toastClose = document.getElementById('offer-close');
  const offers = window.__POLESTAR_OFFERS__ || [];
  let offerIndex = 0;
  let dismissedManually = false;
  let cycleTimer = null;

  function showOffer() {
    if (!toast || offers.length === 0 || dismissedManually) return;
    const offer = offers[offerIndex % offers.length];
    toastTitle.textContent = offer.title;
    toastText.textContent = offer.text;
    toast.classList.add('show');
    offerIndex++;
    setTimeout(() => toast.classList.remove('show'), 6000);
  }

  if (toast) {
    setTimeout(showOffer, 2500);
    cycleTimer = setInterval(showOffer, 11000);
    toastClose.addEventListener('click', () => {
      toast.classList.remove('show');
      dismissedManually = true;
      clearInterval(cycleTimer);
    });
  }

  /* ---------- airport data from server ---------- */
  const airports = window.__POLESTAR_AIRPORTS__ || [];

  /* ---------- Leaflet map ---------- */
  const mapEl = document.getElementById('airport-map');
  if (mapEl && window.L) {
    const map = L.map('airport-map', {
      scrollWheelZoom: false,
      zoomControl: true
    }).setView([22.9, 79.5], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 12,
      minZoom: 4
    }).addTo(map);

    airports.forEach((a) => {
      const marker = L.circleMarker([a.lat, a.lng], {
        radius: 7,
        color: '#d99a1e',
        weight: 2,
        fillColor: '#f4b942',
        fillOpacity: 0.9
      }).addTo(map);
      marker.bindPopup(
        `<strong>${a.city} (${a.code})</strong><br>${a.name}`
      );
      marker.on('click', () => openModal(a.code));
    });
  }

  /* ---------- airport detail modal ---------- */
  const overlay = document.getElementById('airport-modal');
  const modalCode = document.getElementById('modal-code');
  const modalCity = document.getElementById('modal-city');
  const modalState = document.getElementById('modal-state');
  const modalTerminals = document.getElementById('modal-terminals');
  const modalRunways = document.getElementById('modal-runways');
  const modalNote = document.getElementById('modal-note');
  const modalClose = document.getElementById('modal-close');

  function openModal(code) {
    const a = airports.find((x) => x.code === code);
    if (!a || !overlay) return;
    modalCode.textContent = a.code;
    modalCity.textContent = `${a.city} — ${a.name}`;
    modalState.textContent = a.state;
    modalTerminals.textContent = a.terminals;
    modalRunways.textContent = a.runways;
    modalNote.textContent = a.note;
    overlay.classList.add('show');
  }

  document.querySelectorAll('[data-airport-code]').forEach((card) => {
    card.addEventListener('click', () => openModal(card.getAttribute('data-airport-code')));
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => overlay.classList.remove('show'));
  }
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('show');
    });
  }
});
