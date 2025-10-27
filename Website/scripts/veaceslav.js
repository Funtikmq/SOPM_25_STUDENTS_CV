document.querySelectorAll(".toggleBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.classList.toggle("show");
    btn.classList.toggle("active");
  });
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
