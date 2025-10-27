document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const title = card.querySelector("h2");
    title.addEventListener("click", () => {
      card.classList.toggle("open");
    });
  });
});
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️ Light Mode";
}

themeToggle.addEventListener("click", () => {
  const darkModeIsOn = body.classList.toggle("dark");

  if (darkModeIsOn) {
    themeToggle.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

window.initMap = function () {
  const address = "Universitatea Transilvania, Brașov";
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: results[0].geometry.location,
      });

      new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });
    } else {
      console.error("Geocode nu a reușit din cauza: " + status);
    }
  });
};
