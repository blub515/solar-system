// Planet data
const planetInfo = {
  sun: "The Sun is a 4.5 billion-year-old yellow dwarf star; a hot glowing ball of hydrogen and helium at the center of our solar system.",
  mercury: "Mercury is the closest planet to the Sun, and the smallest planet in our solar system. It's only slightly larger than Earth's Moon.",
  venus: "Venus is the 2nd planet from the Sun, and our closest planetary neighbor. It's the hottest planet in our solar system, and is sometimes called Earth's twin.",
  earth: "Earth is our home. The third planet from the Sun, a rocky world with a unique atmosphere and liquid water, making it the only known planet to harbor life.",
  mars: "Mars is the fourth planet from the Sun, is known as the 'Red Planet' due to iron oxide (rust) on its surface, making it a dusty, cold, rocky desert world.",
  jupiter: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass nearly 2.5 times that of all the other planets in the Solar System combined.",
  saturn: "Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Saturn is a massive ball made mostly of hydrogen and helium. It is well known for its stunning ring system.",
  uranus: "Uranus is the seventh planet from the Sun. It rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.",
  neptune: "Neptune is the eighth and farthest planet from the Sun, an ice giant known for its dark, cold, and extremely windy atmosphere with supersonic winds, giving it a deep blue color from methane."
};

  // Show info
  function showPlanetInfo(planetId) {
    const infoBox = document.getElementById("infoBox");
    const name = planetId.charAt(0).toUpperCase() + planetId.slice(1);

    infoBox.innerHTML = `
      <button class="close-btn" aria-label="Close">✖</button>
      <h2>${name}</h2>
      <p>${planetInfo[planetId] || "No data available."}</p>
    `;
    infoBox.style.display = "block";
  }

  // handle close clicks even after innerHTML changes
  const infoBox = document.getElementById("infoBox");
  infoBox.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-btn")) {
      infoBox.style.display = "none";
    }
  });

  // planet click listener
  document.querySelectorAll(".planet, #sun").forEach(planet => {
    planet.addEventListener("click", () => {
      showPlanetInfo(planet.id);
    });
  });

  // ESC key closes the box
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") infoBox.style.display = "none";
  });


