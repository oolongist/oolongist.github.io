(function () {
  const clockEl = document.getElementById("clock");
  const yearEls = document.querySelectorAll("[data-year]");

  function updateClock() {
    if (!clockEl) return;
    clockEl.textContent = new Date().toLocaleString("zh-CN", {
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  updateClock();
  setInterval(updateClock, 30000);

  const year = String(new Date().getFullYear());
  yearEls.forEach((el) => {
    el.textContent = year;
  });
})();
