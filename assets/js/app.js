const sidebar = document.getElementById("sidebar");
const searchInput = document.getElementById("searchInput");
const topBtn = document.getElementById("topBtn");

/* Tabs */
document.querySelectorAll("[data-tab]").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll("[data-tab]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".tab-content > div").forEach(t => t.classList.remove("active"));
    document.getElementById(btn.dataset.tab).classList.add("active");
  };
});

/* Search */
searchInput.oninput = () => {
  const q = searchInput.value.toLowerCase();
  document.querySelectorAll(".command").forEach(c => {
    c.style.display = c.textContent.toLowerCase().includes(q) ? "block" : "none";
  });
};

/* Scroll Button */
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/* External Links */
document.getElementById("inviteBtn").onclick = () => {
  window.open("https://discord.com/oauth2/authorize?client_id=1370876070319882421&permissions=8&scope=bot");
};

document.getElementById("serverBtn").onclick = () => {
  window.open("https://discord.gg/9DfJWYDsdp");
};

/* Changelog */
const logs = [
  { version: "v1.0.1", changes: ["Price command updated"] }
  { version: "v1.0.2", changes: ["added anti raid and anti spam"] }
];

logs.forEach(log => {
  const el = document.createElement("div");
  el.className = "command";
  el.innerHTML = `<strong>${log.version}</strong><p>${log.changes.join(", ")}</p>`;
  document.getElementById("changelog-entries").appendChild(el);
});

