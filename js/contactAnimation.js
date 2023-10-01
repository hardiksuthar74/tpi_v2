const newBubbleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation");
    }
  });
});

const hiddenBubbleEl = document.querySelectorAll(".hidden-animation");

hiddenBubbleEl.forEach((el) => newBubbleObserver.observe(el));

var map = L.map("map").setView([19.0821526, 72.9026632], 17);
map.scrollWheelZoom.disable();

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([19.0821526, 72.9026632])
  .addTo(map)
  .bindPopup(
    "<a class='map-link' target='_blank' href='https://www.google.com/maps/place/Ambika+Paints/@19.0875529,72.903177,17z/'>Top Painting India</a>"
  )
  .openPopup();
