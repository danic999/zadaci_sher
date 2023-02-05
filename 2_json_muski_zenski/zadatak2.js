const people = [
  {
    ime: "Pero",
    spol: "M",
    dob: "23",
  },
  {
    ime: "Ivana",
    spol: "Z",
    dob: "41",
  },
  {
    ime: "Jašar",
    spol: "M",
    dob: "59",
  },
  {
    ime: "Slavena",
    spol: "Z",
    dob: "33",
  },
  {
    ime: "Ljilja",
    spol: "Z",
    dob: "73",
  },
  {
    ime: "Marinko",
    spol: "M",
    dob: "29",
  },
  {
    ime: "Ljubica",
    spol: "Z",
    dob: "52",
  },
  {
    ime: "Ivano",
    spol: "M",
    dob: "63",
  },
];
let muski = [];
let zenske = [];
let muskiDiv = document.getElementById("muski");
let zenskiDiv = document.getElementById("zenski");
for (let i = 0; i < people.length; i++) {
  if (people[i].spol == "M") {
    muski.push(people[i]);
  } else {
    zenske.push(people[i]);
  }
}
for (let i = 0; i < muski.length; i++) {
  let muskiRed = document.createElement("div");
  muskiDiv.appendChild(muskiRed);
  muskiRed.innerHTML = muski[i].ime + "<br>" + muski[i].dob;
  muskiRed.classList.add("osoba");
  if (parseInt(muski[i].dob) > 40 && parseInt(muski[i].dob) < 60) {
    muskiRed.classList.add("plava");
  }
  if (parseInt(muski[i].dob) > 60) {
    muskiRed.classList.add("crvena");
  }
}

for (let i = 0; i < zenske.length; i++) {
  let zenskiRed = document.createElement("div");
  zenskiDiv.appendChild(zenskiRed);
  zenskiRed.innerHTML = zenske[i].ime + "<br>" + zenske[i].dob;
  zenskiRed.classList.add("osoba");
  if (parseInt(zenske[i].dob) > 40 && parseInt(zenske[i].dob) < 60) {
    zenskiRed.classList.add("plava");
  }
  if (parseInt(zenske[i].dob) > 60) {
    zenskiRed.classList.add("crvena");
  }
}

let ulWhereToDel = document.getElementById("toDeliver");
ulWhereToDel.innerText = "LALLAL";

for (let i = 0; i < citiesToDeliver.length; i++) {
  let liWhereToDel = document.createElement("li");
  ulWhereToDel.appendChild(liWhereToDel);
  liWhereToDel.innerText = citiesToDeliver[i].city;
}
