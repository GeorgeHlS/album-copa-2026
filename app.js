// ==================== ALBUM DATA ====================
const ALBUM_DATA = [
  {
    section: "Pagina Inicial",
    teams: [{ name: "", stickers: ["0","FWC 1","FWC 2","FWC 3","FWC 4"] }]
  },
  {
    section: "Paises/Cidades",
    teams: [{ name: "", stickers: ["FWC 4","FWC 5","FWC 6","FWC 7","FWC 8"] }]
  },
  {
    section: "Grupo A",
    teams: [
      { name: "Mexico", stickers: Array.from({length:20},(_,i)=>`MEX ${i+1}`) },
      { name: "Africa do Sul", stickers: Array.from({length:20},(_,i)=>`RSA ${i+1}`) },
      { name: "Coreia do Sul", stickers: Array.from({length:20},(_,i)=>`KOR ${i+1}`) },
      { name: "Republica Tcheca", stickers: Array.from({length:20},(_,i)=>`CZE ${i+1}`) },
    ]
  },
  {
    section: "Grupo B",
    teams: [
      { name: "Canada", stickers: Array.from({length:20},(_,i)=>`CAN ${i+1}`) },
      { name: "Bosnia", stickers: Array.from({length:20},(_,i)=>`BIH ${i+1}`) },
      { name: "Catar", stickers: Array.from({length:20},(_,i)=>`QAT ${i+1}`) },
      { name: "Suica", stickers: Array.from({length:20},(_,i)=>`SUI ${i+1}`) },
    ]
  },
  {
    section: "Grupo C",
    teams: [
      { name: "Brasil", stickers: Array.from({length:20},(_,i)=>`BRA ${i+1}`) },
      { name: "Marrocos", stickers: Array.from({length:20},(_,i)=>`MAR ${i+1}`) },
      { name: "Haiti", stickers: Array.from({length:20},(_,i)=>`HAI ${i+1}`) },
      { name: "Escocia", stickers: Array.from({length:20},(_,i)=>`SCO ${i+1}`) },
    ]
  },
  {
    section: "Grupo D",
    teams: [
      { name: "Estados Unidos", stickers: Array.from({length:20},(_,i)=>`USA ${i+1}`) },
      { name: "Paraguai", stickers: Array.from({length:20},(_,i)=>`PAR ${i+1}`) },
      { name: "Australia", stickers: Array.from({length:20},(_,i)=>`AUS ${i+1}`) },
      { name: "Turquia", stickers: Array.from({length:20},(_,i)=>`TUR ${i+1}`) },
    ]
  },
  {
    section: "Grupo E",
    teams: [
      { name: "Alemanha", stickers: Array.from({length:20},(_,i)=>`GER ${i+1}`) },
      { name: "Curacao", stickers: Array.from({length:20},(_,i)=>`CUW ${i+1}`) },
      { name: "Costa do Marfim", stickers: Array.from({length:20},(_,i)=>`CIV ${i+1}`) },
      { name: "Equador", stickers: Array.from({length:20},(_,i)=>`ECU ${i+1}`) },
    ]
  },
  {
    section: "Grupo F",
    teams: [
      { name: "Holanda", stickers: Array.from({length:20},(_,i)=>`NED ${i+1}`) },
      { name: "Japao", stickers: Array.from({length:20},(_,i)=>`JPN ${i+1}`) },
      { name: "Suecia", stickers: Array.from({length:20},(_,i)=>`SWE ${i+1}`) },
      { name: "Tunisia", stickers: Array.from({length:20},(_,i)=>`TUN ${i+1}`) },
    ]
  },
  {
    section: "Grupo G",
    teams: [
      { name: "Belgica", stickers: Array.from({length:20},(_,i)=>`BEL ${i+1}`) },
      { name: "Egito", stickers: Array.from({length:20},(_,i)=>`EGY ${i+1}`) },
      { name: "Ira", stickers: Array.from({length:20},(_,i)=>`IRN ${i+1}`) },
      { name: "Nova Zelandia", stickers: Array.from({length:20},(_,i)=>`NZL ${i+1}`) },
    ]
  },
  {
    section: "Grupo H",
    teams: [
      { name: "Espanha", stickers: Array.from({length:20},(_,i)=>`ESP ${i+1}`) },
      { name: "Cabo Verde", stickers: Array.from({length:20},(_,i)=>`CPV ${i+1}`) },
      { name: "Arabia Saudita", stickers: Array.from({length:20},(_,i)=>`KSA ${i+1}`) },
      { name: "Uruguai", stickers: Array.from({length:20},(_,i)=>`URU ${i+1}`) },
    ]
  },
  {
    section: "Grupo I",
    teams: [
      { name: "Franca", stickers: Array.from({length:20},(_,i)=>`FRA ${i+1}`) },
      { name: "Senegal", stickers: Array.from({length:20},(_,i)=>`SEN ${i+1}`) },
      { name: "Iraque", stickers: Array.from({length:20},(_,i)=>`IRQ ${i+1}`) },
      { name: "Noruega", stickers: Array.from({length:20},(_,i)=>`NOR ${i+1}`) },
    ]
  },
  {
    section: "Grupo J",
    teams: [
      { name: "Argentina", stickers: Array.from({length:20},(_,i)=>`ARG ${i+1}`) },
      { name: "Argelia", stickers: Array.from({length:20},(_,i)=>`ALG ${i+1}`) },
      { name: "Austria", stickers: Array.from({length:20},(_,i)=>`AUT ${i+1}`) },
      { name: "Jordania", stickers: Array.from({length:20},(_,i)=>`JOR ${i+1}`) },
    ]
  },
  {
    section: "Grupo K",
    teams: [
      { name: "Portugal", stickers: Array.from({length:20},(_,i)=>`POR ${i+1}`) },
      { name: "Congo", stickers: Array.from({length:20},(_,i)=>`COD ${i+1}`) },
      { name: "Uzbequistao", stickers: Array.from({length:20},(_,i)=>`UZB ${i+1}`) },
      { name: "Colombia", stickers: Array.from({length:20},(_,i)=>`COL ${i+1}`) },
    ]
  },
  {
    section: "Grupo L",
    teams: [
      { name: "Inglaterra", stickers: Array.from({length:20},(_,i)=>`ENG ${i+1}`) },
      { name: "Croacia", stickers: Array.from({length:20},(_,i)=>`CRO ${i+1}`) },
      { name: "Gana", stickers: Array.from({length:20},(_,i)=>`GHA ${i+1}`) },
      { name: "Panama", stickers: Array.from({length:20},(_,i)=>`PAN ${i+1}`) },
    ]
  },
  {
    section: "Historia Copa do Mundo",
    teams: [{ name: "", stickers: ["FWC 9","FWC 10","FWC 11","FWC 12","FWC 13","FWC 14","FWC 15","FWC 16","FWC 17","FWC 18","FWC 19"] }]
  },
  {
    section: "Coca-Cola",
    teams: [{ name: "", stickers: Array.from({length:14},(_,i)=>`CC ${i+1}`) }]
  },
];

// Build unique sticker set and total count
const ALL_STICKERS = new Set();
ALBUM_DATA.forEach(s => s.teams.forEach(t => t.stickers.forEach(st => ALL_STICKERS.add(st))));
const TOTAL = ALL_STICKERS.size;

// ==================== STATE ====================
let ownedStickers = {};
let duplicateStickers = {};
let firebaseReady = false;
let dbRef = null;
let dupRef = null;

// ==================== FIREBASE ====================
// >>> CONFIGURE SEU FIREBASE AQUI <<<
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyB65sgSVZ6OI_1ThGF286CmbJKV2uqOFEA",
  authDomain: "album-copa-2026-c32ee.firebaseapp.com",
  databaseURL: "https://album-copa-2026-c32ee-default-rtdb.firebaseio.com",
  projectId: "album-copa-2026-c32ee",
  storageBucket: "album-copa-2026-c32ee.firebasestorage.app",
  messagingSenderId: "125520295987",
  appId: "1:125520295987:web:1c86419de9e9d5c4a10b46"
};

function initFirebase() {
  try {
    if (FIREBASE_CONFIG.apiKey === "SUA_API_KEY") {
      console.log("Firebase nao configurado — usando localStorage");
      loadFromLocalStorage();
      updateSyncStatus(false);
      return;
    }
    firebase.initializeApp(FIREBASE_CONFIG);
    dbRef = firebase.database().ref("album/stickers");
    dupRef = firebase.database().ref("album/duplicates");
    dbRef.on("value", (snapshot) => {
      ownedStickers = snapshot.val() || {};
      updateSyncStatus(true);
      renderAll();
    });
    dupRef.on("value", (snapshot) => {
      duplicateStickers = snapshot.val() || {};
      localStorage.setItem("album_duplicates", JSON.stringify(duplicateStickers));
      buildDuplicates();
    });
    firebase.database().ref(".info/connected").on("value", (snap) => {
      updateSyncStatus(snap.val() === true);
    });
    firebaseReady = true;
  } catch(e) {
    console.error("Firebase error:", e);
    loadFromLocalStorage();
    updateSyncStatus(false);
  }
}

function saveSticker(key, value) {
  if (firebaseReady && dbRef) {
    dbRef.child(key).set(value || null);
  }
  if (value) ownedStickers[key] = true;
  else delete ownedStickers[key];
  localStorage.setItem("album_stickers", JSON.stringify(ownedStickers));
  updateStickerStates();
}

function saveDuplicate(key, count) {
  if (count <= 0) {
    delete duplicateStickers[key];
    if (firebaseReady && dupRef) dupRef.child(key).remove();
  } else {
    duplicateStickers[key] = count;
    if (firebaseReady && dupRef) dupRef.child(key).set(count);
  }
  localStorage.setItem("album_duplicates", JSON.stringify(duplicateStickers));
  buildDuplicates();
}

function loadFromLocalStorage() {
  try {
    ownedStickers = JSON.parse(localStorage.getItem("album_stickers") || "{}");
  } catch(e) { ownedStickers = {}; }
  try {
    duplicateStickers = JSON.parse(localStorage.getItem("album_duplicates") || "{}");
  } catch(e) { duplicateStickers = {}; }
  renderAll();
}

function stickerKey(code) { return code.replace(/ /g, "_"); }
function isOwned(code) { return ownedStickers[stickerKey(code)] === true; }

// ==================== UI ====================
function updateSyncStatus(online) {
  document.getElementById("syncDot").className = "sync-dot " + (online ? "online" : "offline");
  document.getElementById("syncLabel").textContent = online ? "Sincronizado" : "Offline (local)";
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2000);
}

// Tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab + "Tab").classList.add("active");
  });
});

// ==================== RENDER SECTIONS ====================
function updateStickerStates() {
  // Atualiza apenas o estado visual das figurinhas sem reconstruir o DOM
  document.querySelectorAll(".sticker").forEach(el => {
    const code = el.dataset.code;
    if (isOwned(code)) {
      el.classList.remove("missing");
      el.classList.add("owned");
    } else {
      el.classList.remove("owned");
      el.classList.add("missing");
    }
  });
  
  // Atualiza contadores das seções
  ALBUM_DATA.forEach((section, si) => {
    const allStickers = [];
    section.teams.forEach(t => allStickers.push(...t.stickers));
    const ownedInSection = allStickers.filter(s => isOwned(s)).length;
    const totalInSection = allStickers.length;
    const complete = ownedInSection === totalInSection;
    
    const header = document.querySelector(`#arrow-${si}`)?.closest('.section-header');
    if (header) {
      const badge = header.querySelector('.badge');
      if (badge) {
        badge.textContent = `${ownedInSection}/${totalInSection}`;
        badge.className = `badge ${complete ? 'complete' : ''}`;
      }
    }
    
    // Atualiza contadores dos times
    const body = document.getElementById(`body-${si}`);
    if (body) {
      section.teams.forEach((team, ti) => {
        if (team.name) {
          const teamOwned = team.stickers.filter(s => isOwned(s)).length;
          const countryGroups = body.querySelectorAll('.country-group');
          if (countryGroups[ti]) {
            const countryName = countryGroups[ti].querySelector('.country-name');
            if (countryName) {
              countryName.textContent = `${team.name} (${teamOwned}/${team.stickers.length})`;
            }
          }
        }
      });
    }
  });
  
  // Atualiza dashboard
  updateDashboard();
}

function buildSections() {
  const container = document.getElementById("sectionsContainer");
  // Salvar quais seções estão abertas antes de reconstruir
  const openSections = new Set();
  container.querySelectorAll(".section-body.open").forEach(el => {
    openSections.add(el.id);
  });
  container.innerHTML = "";
  ALBUM_DATA.forEach((section, si) => {
    const allStickers = [];
    section.teams.forEach(t => allStickers.push(...t.stickers));
    const ownedInSection = allStickers.filter(s => isOwned(s)).length;
    const totalInSection = allStickers.length;
    const complete = ownedInSection === totalInSection;

    const header = document.createElement("div");
    header.className = "section-header";
    header.innerHTML = `
      <span class="name">${section.section}</span>
      <span>
        <span class="badge ${complete ? 'complete' : ''}">${ownedInSection}/${totalInSection}</span>
        <span class="arrow" id="arrow-${si}">&#9660;</span>
      </span>
    `;
    const body = document.createElement("div");
    body.className = "section-body";
    body.id = `body-${si}`;

    section.teams.forEach(team => {
      const group = document.createElement("div");
      group.className = "country-group";
      if (team.name) {
        const cname = document.createElement("div");
        cname.className = "country-name";
        const teamOwned = team.stickers.filter(s => isOwned(s)).length;
        cname.textContent = `${team.name} (${teamOwned}/${team.stickers.length})`;
        group.appendChild(cname);
      }
      const grid = document.createElement("div");
      grid.className = "sticker-grid";
      team.stickers.forEach(code => {
        const el = document.createElement("div");
        el.className = "sticker " + (isOwned(code) ? "owned" : "missing");
        el.textContent = code;
        el.dataset.code = code;
        el.addEventListener("click", () => {
          const owned = isOwned(code);
          saveSticker(stickerKey(code), !owned);
          showToast(!owned ? `${code} marcada!` : `${code} desmarcada`);
        });
        grid.appendChild(el);
      });
      group.appendChild(grid);
      body.appendChild(group);
    });

    // Restaurar estado aberto se estava aberto antes
    if (openSections.has(`body-${si}`)) {
      body.classList.add("open");
    }

    header.addEventListener("click", () => {
      body.classList.toggle("open");
      document.getElementById(`arrow-${si}`).classList.toggle("open");
    });

    container.appendChild(header);
    container.appendChild(body);
  });
}

// ==================== RENDER DASHBOARD ====================
let groupChart = null;
let pieChart = null;

function updateDashboard() {
  const owned = Object.keys(ownedStickers).length;
  const missing = TOTAL - owned;
  const pct = TOTAL > 0 ? Math.round((owned / TOTAL) * 1000) / 10 : 0;

  document.getElementById("ownedCount").textContent = owned;
  document.getElementById("missingCount").textContent = missing;
  document.getElementById("totalCount").textContent = TOTAL;
  document.getElementById("pctCount").textContent = pct + "%";
  const bar = document.getElementById("progressBar");
  bar.style.width = pct + "%";
  bar.textContent = pct + "%";

  // Group chart data
  const groupSections = ALBUM_DATA.filter(s => s.section.startsWith("Grupo"));
  const labels = groupSections.map(s => s.section);
  const ownedData = groupSections.map(s => {
    const all = [];
    s.teams.forEach(t => all.push(...t.stickers));
    return all.filter(st => isOwned(st)).length;
  });
  const totalData = groupSections.map(s => {
    const all = [];
    s.teams.forEach(t => all.push(...t.stickers));
    return all.length;
  });
  const missingData = totalData.map((t, i) => t - ownedData[i]);

  if (groupChart) {
    groupChart.data.datasets[0].data = ownedData;
    groupChart.data.datasets[1].data = missingData;
    groupChart.update();
  } else {
    groupChart = new Chart(document.getElementById("groupChart"), {
      type: "bar",
      data: {
        labels,
        datasets: [
          { label: "Tenho", data: ownedData, backgroundColor: "#2e8b57" },
          { label: "Faltam", data: missingData, backgroundColor: "#ddd" },
        ]
      },
      options: {
        responsive: true,
        plugins: { title: { display: true, text: "Progresso por Grupo" } },
        scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } }
      }
    });
  }

  if (pieChart) {
    pieChart.data.datasets[0].data = [owned, missing];
    pieChart.update();
  } else {
    pieChart = new Chart(document.getElementById("pieChart"), {
      type: "doughnut",
      data: {
        labels: ["Tenho", "Faltam"],
        datasets: [{ data: [owned, missing], backgroundColor: ["#2e8b57","#ddd"] }]
      },
      options: {
        responsive: true,
        plugins: { title: { display: true, text: "Progresso Geral" } }
      }
    });
  }
}

// ==================== RENDER ALL ====================
function renderAll() {
  buildSections();
  updateDashboard();
  buildDuplicates();
}

// ==================== SEARCH ====================
document.getElementById("searchInput").addEventListener("input", (e) => {
  const query = e.target.value.toUpperCase().trim();
  document.querySelectorAll(".sticker").forEach(el => {
    el.classList.remove("highlight");
  });
  if (!query) return;
  // Switch to album tab
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  document.querySelector('[data-tab="album"]').classList.add("active");
  document.getElementById("albumTab").classList.add("active");
  // Open matching sections and highlight
  document.querySelectorAll(".sticker").forEach(el => {
    if (el.dataset.code.toUpperCase().includes(query)) {
      el.classList.add("highlight");
      const body = el.closest(".section-body");
      if (body && !body.classList.contains("open")) body.classList.add("open");
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});

// ==================== QUICK ADD ====================
document.getElementById("quickBtn").addEventListener("click", quickAdd);
document.getElementById("quickInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") quickAdd();
});

function quickAdd() {
  const input = document.getElementById("quickInput");
  const raw = input.value.trim();
  if (!raw) return;
  const codes = raw.split(",").map(s => s.trim().toUpperCase());
  let count = 0;
  codes.forEach(code => {
    if (ALL_STICKERS.has(code)) {
      saveSticker(stickerKey(code), true);
      count++;
    } else {
      const found = [...ALL_STICKERS].find(s => s.toUpperCase() === code);
      if (found) {
        saveSticker(stickerKey(found), true);
        count++;
      }
    }
  });
  if (count > 0) {
    showToast(`${count} figurinha(s) marcada(s)!`);
    input.value = "";
  } else {
    showToast("Nenhuma figurinha encontrada");
  }
}

// ==================== DUPLICATES ====================
function buildDuplicates() {
  const list = document.getElementById("dupList");
  if (!list) return;
  list.innerHTML = "";

  const entries = Object.entries(duplicateStickers)
    .filter(([_, count]) => count > 0)
    .sort(([a], [b]) => a.localeCompare(b));

  const total = entries.reduce((sum, [_, count]) => sum + count, 0);
  document.getElementById("dupTotal").textContent = total;

  if (entries.length === 0) {
    list.innerHTML = '<div class="dup-empty">Nenhuma figurinha repetida registrada</div>';
    return;
  }

  entries.forEach(([key, count]) => {
    const code = key.replace(/_/g, " ");
    const item = document.createElement("div");
    item.className = "dup-item";
    item.innerHTML = `
      <span class="dup-code">${code}</span>
      <div class="dup-controls">
        <button class="dup-minus">-</button>
        <span class="dup-count">${count}</span>
        <button class="dup-plus">+</button>
      </div>
    `;
    item.querySelector(".dup-minus").addEventListener("click", () => {
      saveDuplicate(key, count - 1);
    });
    item.querySelector(".dup-plus").addEventListener("click", () => {
      saveDuplicate(key, count + 1);
    });
    list.appendChild(item);
  });
}

document.getElementById("dupBtn").addEventListener("click", addDuplicates);
document.getElementById("dupInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") addDuplicates();
});

function addDuplicates() {
  const input = document.getElementById("dupInput");
  const raw = input.value.trim();
  if (!raw) return;
  const codes = raw.split(",").map(s => s.trim().toUpperCase());
  let count = 0;
  codes.forEach(code => {
    const matched = ALL_STICKERS.has(code) ? code : [...ALL_STICKERS].find(s => s.toUpperCase() === code);
    if (matched) {
      const key = stickerKey(matched);
      const current = duplicateStickers[key] || 0;
      saveDuplicate(key, current + 1);
      count++;
    }
  });
  if (count > 0) {
    showToast(`${count} repetida(s) adicionada(s)!`);
    input.value = "";
  } else {
    showToast("Nenhuma figurinha encontrada");
  }
}

// ==================== INIT ====================
initFirebase();
if (!firebaseReady) renderAll();
