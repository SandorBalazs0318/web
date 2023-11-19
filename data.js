function changeColor(cell) {
    var currentColor = cell.style.backgroundColor;
    if (currentColor === "yellow" || currentColor === "") {
      cell.style.backgroundColor = "red";
    } else if (currentColor === "red") {
      cell.style.backgroundColor = "blue";
    } else {
      cell.style.backgroundColor = "yellow";
    }
  }