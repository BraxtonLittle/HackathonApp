function registerHandlers(){
    document.getElementById("backButton").addEventListener("click", goBack);
}
function goBack(){
    window.location.href = "http://localhost:3000/viewEx.html";
}

const columnDefs = [
    { field: "Exercise Name", editable: true },
    { field: "TDY Location", editable: true }
  ];
  
  // specify the data
  const rowData = [
    { },
    { }
  ];
  
  // let the grid know which columns and what data to use
  const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
  };

  // register handlers
  document.addEventListener("DOMContentLoaded", registerHandlers);
  // setup the grid after the page has finished loading
  document.addEventListener('DOMContentLoaded', () => {
      const gridDiv = document.querySelector('#myGrid');
      new agGrid.Grid(gridDiv, gridOptions);
  });


  