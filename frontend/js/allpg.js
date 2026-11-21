const API_URL = "http://localhost:5000/api/pgs";

async function loadPGs() {

  try {

    const res = await fetch(API_URL);
    const data = await res.json();

    const container = document.getElementById("pgContainer");
    if (!container) return;

    container.innerHTML = "";

    data.forEach(pg => {

      const image = pg.image || "https://images.unsplash.com/photo-1618773928121-c32242e63f39";
      const name = pg.name || "PG Name";
      const location = pg.location || "Location not available";
      const type = pg.type || "PG";
      const gender = pg.gender || "Boys / Girls";
      const price = pg.price || "0";

      const card = `
      <div class="col-md-4 mb-4">

        <div class="pg-card">

          <div class="pg-img">
            <img src="${image}">
            <span class="pg-price">₹${price}/month</span>
          </div>

          <div class="pg-info">

            <h4>${name}</h4>

            <p class="pg-location">
              <i class="fa fa-location-dot"></i> ${location}
            </p>

            <div class="pg-tags">

              <span class="tag type">${type}</span>

              <span class="tag gender">${gender}</span>

            </div>

            <button onclick="checkLogin('${pg._id}')" class="view-btn">

View Details

</button>


          </div>

        </div>

      </div>
      `;

      container.innerHTML += card;

    });

  } catch (error) {
    console.error("Error loading PGs:", error);
  }

}

loadPGs();