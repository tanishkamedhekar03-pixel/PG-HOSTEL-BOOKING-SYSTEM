// ================= API =================
const API_URL = "http://localhost:5000/api/pgs";
let allPGs = [];


// ================= LOGIN CHECK =================
function checkLogin(pgId){

  const user = localStorage.getItem("user");

  if(!user){
    alert("Please login first");
    window.location.href = "login.html";
    return;
  }

  window.location.href = "pg-details.html?id=" + pgId;
}


// ================= LOAD PGs =================
async function loadPGs(){

  try{
    const res = await fetch(API_URL);
    const data = await res.json();

    allPGs = data;
    displayPGs(allPGs);

  }catch(err){
    console.log("Error loading PGs", err);
  }

}


// ================= DISPLAY PGs =================
function displayPGs(list){

  const container = document.getElementById("pgContainer");
  if(!container) return;

  container.innerHTML = "";

  list.forEach(pg => {

    container.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card shadow">

        <img src="${pg.image || 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c'}"
        style="height:200px;width:100%;object-fit:cover;">

        <div class="card-body">

          <h5>${pg.name}</h5>

          <p>
            <i class="fa fa-location-dot"></i>
            ${pg.location}, ${pg.city}
          </p>

          <p>${pg.type} • ${pg.gender}</p>

          <p><b>₹${pg.price}/month</b></p>

          <button onclick="checkLogin('${pg._id}')"
          class="btn btn-success w-100">
            View Details
          </button>

        </div>

      </div>
    </div>
    `;
  });

}


// ================= SEARCH =================
function searchPG(){

  const input = document
    .getElementById("searchLocation")
    .value
    .toLowerCase();

  const filtered = allPGs.filter(pg =>
    pg.location.toLowerCase().includes(input)
  );

  displayPGs(filtered);

}


// ================= FILTER =================
function filterPG(type){

  if(type === "all"){
    displayPGs(allPGs);
    return;
  }

  const filtered = allPGs.filter(pg =>
    pg.type === type || pg.gender === type
  );

  displayPGs(filtered);

}


// ================= START =================
loadPGs();