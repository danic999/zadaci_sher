const table = document.getElementsByTagName("table")[0];
table.addEventListener("click", () => {
  const tds = document.getElementsByTagName("td");
  function swapTds(td1, td2) {
    let temp = td1.textContent;
    td1.textContent = td2.textContent;
    td2.textContent = temp;
  }

  for (let i = 0; i < tds.length; i++) {
    let neighbours = [];
    if (tds[i].innerText == "") {
      neighbours.push(tds[i].previousElementSibling);
      neighbours.push(tds[i].nextElementSibling);
      neighbours.push(tds[i + 3]);
      neighbours.push(tds[i - 3]);
      neighbours = neighbours.filter(function (element) {
        return (element !== undefined) & (element !== null);
      });

      for (let j = 0; j < neighbours.length; j++) {
        neighbours[j].addEventListener("click", () => {
          swapTds(neighbours[j], tds[i]);
        });
      }
      console.log(neighbours);
    }
  }
});
