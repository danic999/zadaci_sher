const cities = [
  { id: 0, city: "Mostar", lat: "43.343033", long: "17.807894" },
  { id: 1, city: "Zagreb", lat: "45.815399", long: "15.966568" },
  { id: 2, city: "Split", lat: "43.50891", long: "16.43915" },
  { id: 3, city: "Dubrovnik", lat: "42.640278", long: "18.108334" },
  { id: 4, city: "Sarajevo", lat: "43.856430", long: "18.413029" },
  { id: 5, city: "Bec", lat: "48.210033", long: "16.363449" },
];

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371;
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function getCombinations(array) {
  function p(array, temp) {
    let i, x;
    if (!array.length) {
      result.push(temp);
    }
    for (i = 0; i < array.length; i++) {
      x = array.splice(i, 1)[0];
      p(array, temp.concat(x));
      array.splice(i, 0, x);
    }
  }

  let result = [];
  p(array, []);
  return result;
}

function getDistances(array) {
  let result = 0;
  result =
    result +
    getDistanceFromLatLonInKm(
      base.lat,
      base.long,
      array[0].lat,
      array[0].long
    ) +
    getDistanceFromLatLonInKm(
      base.lat,
      base.long,
      array[array.length - 1].lat,
      array[array.length - 1].long
    );

  for (let i = 0; i < array.length - 1; i++) {
    result =
      result +
      getDistanceFromLatLonInKm(
        array[i].lat,
        array[i].long,
        array[i + 1].lat,
        array[i + 1].long
      );
  }
  return Math.round(result);
}
let bestWay = Infinity;

const route = [4, 5, 1, 3];
const base = { id: 0, city: "Mostar", lat: "43.343033", long: "17.807894" };
let citiesToDeliver = [];
for (let i = 0; i < route.length; i++) {
  citiesToDeliver.push(cities[route[i]]);
}

var combinations = getCombinations(citiesToDeliver);

let deliveryWay = [];

for (let i = 0; i < combinations.length; i++) {
  let currDistance = getDistances(combinations[i]);
  console.log(currDistance + " vs " + bestWay);
  if (bestWay > currDistance) {
    deliveryWay = combinations[i];
    bestWay = currDistance;
  }
}

let orderOfDelivery = document.getElementById("orderOfDelivery");
let toDeliver = document.getElementById("toDeliver");
//console.log(citiesToDeliver);
for (let i = 0; i < citiesToDeliver.length; i++) {
  let newCity = document.createElement("li");
  newCity.innerText = citiesToDeliver[i].city;
  toDeliver.appendChild(newCity);
}

for (let i = 0; i < deliveryWay.length; i++) {
  let newCityDelivery = document.createElement("li");
  newCityDelivery.innerText = deliveryWay[i].city;
  orderOfDelivery.appendChild(newCityDelivery);
}
