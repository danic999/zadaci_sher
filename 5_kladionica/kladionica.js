const options = {
  method: "GET",
  url: "https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=uk&markets=h2h&apiKey=31354d8cec79c84bcf8998aa19e74120",
  params: {
    region: "us",
    sport: "upcoming",
    oddsFormat: "decimal",
    market: "h2h",
    dateFormat: "iso",
  },
};

axios
  .request(options)
  .then(function (response) {
    const data = response.data;
    const tablica = document.getElementById("kockara");
    const tablicaListic = document.getElementById("listic");
    let kvField = document.getElementById("kvfield");
    let kvTotal = 1;
    let kv = [];
    for (let i = 0; i < data.length; i++) {
      let homeTeam = data[i].bookmakers[0].markets[0].outcomes[0].name;
      let homeTeamKv = data[i].bookmakers[0].markets[0].outcomes[0].price;

      let awayTeam = data[i].bookmakers[0].markets[0].outcomes[1].name;
      let awayTeamKv = data[i].bookmakers[0].markets[0].outcomes[1].price;
      let drawKv;
      if (data[i].bookmakers[0].markets[0].outcomes.length < 3) {
        drawKv = 1;
      } else {
        drawKv = data[i].bookmakers[0].markets[0].outcomes[2].price;
      }
      let newRow = document.createElement("tr");
      tablica.appendChild(newRow);

      let match = document.createElement("td");
      newRow.appendChild(match);
      let matchName = homeTeam + "-" + awayTeam;
      match.innerHTML = matchName;

      let homeTeamTable = document.createElement("td");
      newRow.appendChild(homeTeamTable);
      homeTeamTable.innerHTML = homeTeamKv;

      let drawTable = document.createElement("td");
      newRow.appendChild(drawTable);
      drawTable.innerHTML = drawKv;

      let awayTeamTable = document.createElement("td");
      newRow.appendChild(awayTeamTable);
      awayTeamTable.innerHTML = awayTeamKv;
      let games = [];
      homeTeamTable.addEventListener("click", () => {
        if (games.includes(matchName)) {
          alert("Ne mozes dva puta istu igru igrat!");
        } else {
          let row = document.createElement("tr");
          let match = document.createElement("td");
          let kv = document.createElement("td");
          let del = document.createElement("td");
          tablicaListic.appendChild(row);
          row.appendChild(match);
          row.appendChild(kv);
          row.appendChild(del);
          match.innerHTML = matchName;
          kv.innerHTML = homeTeamKv;
          kvTotal = kvTotal * homeTeamKv;
          del.innerHTML = "X";
          kvField.innerText = kvTotal.toFixed(2);

          del.addEventListener("click", () => {
            row.remove();
            let index = games.indexOf(matchName);
            games.splice(index, 1);
            kvTotal = kvTotal / homeTeamKv;
            kvField.innerText = kvTotal.toFixed(2);
          });

          games.push(row.firstElementChild.innerHTML);
        }
      });

      drawTable.addEventListener("click", () => {
        if (games.includes(matchName)) {
          alert("Ne mozes dva puta istu igru igrat!");
        } else {
          let row = document.createElement("tr");
          let match = document.createElement("td");
          let kv = document.createElement("td");
          let del = document.createElement("td");
          tablicaListic.appendChild(row);
          row.appendChild(match);
          row.appendChild(kv);
          row.appendChild(del);
          match.innerHTML = matchName;
          kv.innerHTML = drawKv;
          kvTotal = kvTotal * drawKv;
          del.innerHTML = "X";
          kvField.innerText = kvTotal.toFixed(2);

          del.addEventListener("click", () => {
            row.remove();
            kvTotal = kvTotal / drawKv;
            let index = games.indexOf(matchName);
            games.splice(index, 1);
            kvField.innerText = kvTotal.toFixed(2);
          });

          games.push(row.firstElementChild.innerHTML);
        }
      });

      awayTeamTable.addEventListener("click", () => {
        if (games.includes(matchName)) {
          alert("Ne mozes dva puta istu igru igrat!");
        } else {
          let row = document.createElement("tr");
          let match = document.createElement("td");
          let kv = document.createElement("td");
          let del = document.createElement("td");
          tablicaListic.appendChild(row);
          row.appendChild(match);
          row.appendChild(kv);
          row.appendChild(del);
          match.innerHTML = matchName;
          kv.innerHTML = awayTeamKv;
          kvTotal = kvTotal * awayTeamKv;
          del.innerHTML = "X";
          kvField.innerText = kvTotal.toFixed(2);

          del.addEventListener("click", () => {
            row.remove();
            let index = games.indexOf(matchName);
            games.splice(index, 1);
            kvTotal = kvTotal / awayTeamKv;

            kvField.innerText = kvTotal.toFixed(2);
          });

          games.push(row.firstElementChild.innerHTML);
        }
      });
    }
    const isplata = document.getElementById("isplata");
    let unos = document.getElementById("uplata");
    const prikazi = document.getElementById("prikazi");
    prikazi.addEventListener("click", () => {
      isplata.innerHTML = (kvTotal * unos.value).toFixed(2) + "KM";
    });
  })
  .catch(function (error) {
    console.error(error);
  });
