function createTable() {
    //Write your code here
   const table = document.getElementById("myTable");

  // Clear any existing content in the table
  table.innerHTML = "";

  // Prompt user for number of rows
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  // Convert inputs to integers
  const rows = parseInt(rn, 10);
  const cols = parseInt(cn, 10);

  // Check for invalid input
  if (
    isNaN(rows) || isNaN(cols) || 
    rows <= 0 || cols <= 0
  ) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
  }

  // Create table rows and cells
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
