const API_URL = "http://localhost:5000/api/pgs";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function loadDetails(){

try{

const res = await fetch(API_URL);
const data = await res.json();

const pg = data.find(p => p._id === id);

if(!pg) return;

document.getElementById("pgName").innerText = pg.name;

document.getElementById("pgLocation").innerText = pg.location;

document.getElementById("pgDescription").innerText = pg.description || "Comfortable PG with all facilities.";

document.getElementById("pgPrice").innerText = pg.price;

document.getElementById("pgImage").src =
pg.image || "https://images.unsplash.com/photo-1618773928121-c32242e63f39";

}catch(err){

console.log(err);

}

}

loadDetails();