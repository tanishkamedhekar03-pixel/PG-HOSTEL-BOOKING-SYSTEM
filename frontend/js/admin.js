const API_URL = "http://localhost:5000/api/pgs";

// ===== ADD NEW PG =====
document.getElementById("pgForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const pgData = {
    name: document.getElementById("name").value,
    city: document.getElementById("city").value,
    location: document.getElementById("location").value,
    type: document.getElementById("type").value,
    gender: document.getElementById("gender").value,
    price: document.getElementById("price").value,
    image: document.getElementById("image").value,
    description: document.getElementById("description").value,
    amenities: document.getElementById("amenities").value.split(",")
  };

  const res = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify(pgData)
  });

  const data = await res.json();
  alert("PG Added Successfully ✅");
  document.getElementById("pgForm").reset();
  loadPGs();
});

// ===== LOAD ALL PGS =====
async function loadPGs() {
  const res = await fetch(API_URL);
  const data = await res.json();
document.getElementById("totalPG").innerText = data.length;

const cities = [...new Set(data.map(pg => pg.city))];
document.getElementById("totalCities").innerText = cities.length;
  const container = document.getElementById("pgContainer");
  container.innerHTML = "";

  data.forEach(pg => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="pg-card p-3 shadow-sm">
          <div class="pg-img mb-2">
            <img src="${pg.image || 'https://images.unsplash.com/photo-1618773928121-c32242e63f39'}" />
          </div>
          <h5>${pg.name}</h5>
          <p><i class="fa fa-location-dot"></i> ${pg.location}, ${pg.city}</p>
          <p>${pg.type} • ${pg.gender}</p>
          <p>₹${pg.price}/month</p>
          <div class="d-flex gap-2 mt-2">
           <button class="edit-btn w-50" onclick="editPG('${pg._id}')">Edit</button>
<button class="delete-btn w-50" onclick="deletePG('${pg._id}')">Delete</button> 
          
          </div>
        </div>
      </div>
    `;
  });
}

// ===== DELETE PG =====
async function deletePG(id){
  if(!confirm("Delete this PG?")) return;
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadPGs();
}

// ===== EDIT PG =====
async function editPG(id){
  const name = prompt("New PG Name");
  const city = prompt("City");
  const location = prompt("Location");
  const price = prompt("Price");

  await fetch(`${API_URL}/${id}`, {
    method:"PUT",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify({ name, city, location, price })
  });

  loadPGs();
}

// ===== INITIAL LOAD =====
loadPGs();
// ================= BOOKINGS =================

const BOOKING_API = "http://localhost:5000/api/bookings";

// LOAD BOOKINGS
async function loadBookings() {
  const res = await fetch(BOOKING_API);
  const data = await res.json();

  const container = document.getElementById("bookingContainer");
  if (!container) return;

  container.innerHTML = "";

  data.forEach(b => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card p-3 shadow-sm">
          <h5>${b.name || "User"}</h5>
          <p>📞 ${b.phone}</p>
          <p>📅 ${b.date}</p>
          <p><b>Status:</b> ${b.status}</p>

          <button class="btn btn-success btn-sm me-2" onclick="updateStatus('${b._id}','Approved')">Approve</button>
          <button class="btn btn-danger btn-sm" onclick="updateStatus('${b._id}','Rejected')">Reject</button>
        </div>
      </div>
    `;
  });
}

// UPDATE STATUS
async function updateStatus(id, status) {
  await fetch(BOOKING_API + "/" + id, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  });

  loadBookings(); // refresh
}

// CALL FUNCTION
loadBookings();