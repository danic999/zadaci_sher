var tds = document.getElementsByTagName("td");
var colors = ["red", "blue", "green"];
for (let i = 0; i < tds.length; i++) {
  if (tds[i].innerHTML === "ivan") {
    tds[i].style.fontWeight = "bold";
  } else {
    let boja = colors.shift();
    tds[i].style.backgroundColor = boja;
    colors.push(boja);
  }
}
