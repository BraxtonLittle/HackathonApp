var xValuesCPD = ["161 ARW (KC-135)", "134 FS (F-35)", "163 ATKW (MQ-9)"];
var xValuesCPH = ["161 ARW", "134 FS", "163 ATKW"];
var xValuesAcft = ["KC-135", "F-35", "MQ-9"];
var dataLodge = [55, 49, 44];
var dataDiem = [20, 30, 40];
var dataMeals = [0, 10, 20];
var barColors = [
  "rgba(255,99,132,0.2)",
  "rgba(54,162,235,0.2)",
  "rgba(255,206,86,0.2)",
];
var barBorderColors = [
  "rgba(255,99,132,1)",
  "rgba(54,162,235,1)",
  "rgba(255,206,86,1)",
]
var dataLodge2 = [30, 55, 33];
var dataDiem2 = [25, 10, 10];
var dataMeals2 = [45, 50, 25];
var airFare1 = [1600, 1500, 1300];
var dayscost1 = [(75 * 15), (89 * 12), (104 * 10)];
var airFare2 = [1300, 1250, 1750];
var dayscost2 = [(100 * 15), (115 * 12), (68 * 10)];
var manpower1 = [2275, 2568, 2340];
var manpower2 = [2800, 2630, 2430];
var cpa1 = [2275 / 4, 2568 / 5, 2340 / 2];
var cpa2 = [2800 / 3, 2630 / 2, 2430 / 4];
var cost1 = [115000, 150000, 200000];
var cost2 = [300000, 140000, 222200];
var total;
var cpd;
var cph;
var manpw;
var cpa;

function main() {
  registerHandlers();
  makeChart1();
  makeChart1B();
  makeChart1C();
  makeChart1D();
  makeChart1E();
}

function makeChart1() {
    cpd = new Chart("cpdChart", {
      type: "bar",
      data: {
      labels: xValuesCPD,
      datasets: [{
        label: "Lodging",
        backgroundColor: barColors[0],
        borderColor: barBorderColors[0],
        borderWidth: 1,
        data: dataLodge
      },
      {
        label: "Per Diem",
        backgroundColor: barColors[1],
        borderColor: barBorderColors[1],
        borderWidth: 1,
        data: dataDiem
      },
      {
        label: "Meals",
        backgroundColor: barColors[2],
        borderColor: barBorderColors[2],
        borderWidth: 1,
        data: dataMeals
      },
    ]
    },
    options: {
        plugins: {
          legend: {display: true},
          title: {display: false, text: "Cost per day (USD)"},
              customCanvasBackgroundColor: {
              color: 'white',
            }
          },
        responsive: true,
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
          },
      },
  });
}

function makeChart1B() {
  cph = new Chart("cphChart", {
    type: "bar",
    data: {
      labels: xValuesCPH,
      datasets: [{
        label: "Airfare",
        backgroundColor: barColors[0],
        data: airFare1
      },
      {
        label: "cpd * days",
        backgroundColor: barColors[1],
        data: dayscost1
      },
      ]
    },
    options: {
      legend: { display: false },
      title: { display: true, text: "Cost per head (USD)" },
      plugins: {
        customCanvasBackgroundColor: {
          color: 'white',
        }
      },
      responsive: true,
      scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true
        }
      },
    },

  });

}

function makeChart1C() {
  manpw = new Chart("manChart", {
    type: "bar",
    data: {
      labels: xValuesCPH,
      datasets: [{
        backgroundColor: barColors,
        data: manpower1
      }]
    },
    options: {
      legend: { display: false },
      title: { display: true, text: "Manpower cost (USD)" }
    }
  });

}

function makeChart1D() {
  cpa = new Chart("cpaChart", {
    type: "bar",
    data: {
      labels: xValuesAcft,
      datasets: [{
        backgroundColor: barColors,
        data: cpa1
      }]
    },
    options: {
      legend: { display: false },
      title: { display: true, text: "Cost per aircraft (USD)" }
    }
  });
}
function makeChart1E() {
  total = new Chart("totalChart", {
    type: "bar",
    data: {
      labels: xValuesCPD,
      datasets: [{
        backgroundColor: barColors,
        data: cost1
      }]
    },
    options: {
      legend: { display: false },
      title: { display: true, text: "Total cost (USD)" }
    }
  });

}

function makeChart2() {
  cpd = new Chart("cpdChart", {
    type: "bar",
    data: {
      labels: xValuesCPD,
      datasets: [{
        label: "Lodging",
        backgroundColor: barColors[0],
        data: dataLodge2
      },
      {
        label: "Per Diem",
        backgroundColor: barColors[1],
        data: dataDiem2
      },
      {
        label: "Meals",
        backgroundColor: barColors[2],
        data: dataMeals2
      },
      ]
    },
    options: {
      legend: { display: false },
      title: { display: true, text: "Cost per day (USD)" },
      plugins: {
        customCanvasBackgroundColor: {
          color: 'white',
        }
      },
      responsive: true,
      scales: {
        // xAxes: [{
        //     stacked: true
        // }],
        yAxis: [{
          stacked: true
        }]
      },
    },

  });
}

function makeChart2B() {
  cph = new Chart("cphChart", {
    type: "bar",
    data: {
      labels: xValuesCPH,
      datasets: [{
        label: "Airfare",
        backgroundColor: barColors[0],
        data: airFare2
      },
      {
        label: "cpd * days",
        backgroundColor: barColors[1],
        data: dayscost2
      },
      ]
    },
    options: {
      legend: { display: false },
      title: { display: true, text: "Cost per head (USD)" },
      plugins: {
        customCanvasBackgroundColor: {
          color: 'white',
        }
      },
      responsive: true,
      scales: {
        // xAxes: [{
        //     stacked: true
        // }],
        yAxis: [{
          stacked: true
        }]
      },
    },

  });

}

function makeChart2C() {
  manpw = new Chart("manChart", {
    type: "bar",
    data: {
      labels: xValuesCPH,
      datasets: [{
        backgroundColor: barColors,
        data: manpower2
      }]
    },
    options: {
      legend: { display: false },
      title: { display: true, text: "Manpower cost (USD)" }
    }
  });

}

function makeChart2D() {
  cpa = new Chart("cpaChart", {
    type: "bar",
    data: {
      labels: xValuesAcft,
      datasets: [{
        backgroundColor: barColors,
        data: cpa2
      }]
    },
    options: {
      legend: { display: false },
      title: { display: true, text: "Cost per aircraft (USD)" }
    }
  });

}
function makeChart2E() {
  total = new Chart("totalChart", {
    type: "bar",
    data: {
      labels: xValuesCPD,
      datasets: [{
        backgroundColor: barColors,
        data: cost2
      }]
    },
    options: {
      legend: { display: false },
      title: { display: true, text: "Total cost (USD)" }
    }
  });
}
function registerHandlers() {
  console.log("Registering handlers");
  document.getElementById("LogoutButton").addEventListener("click", logout);
  document.getElementById("generateButton").addEventListener("click", updateChart);
  document.getElementById("chartForm").addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

/*function getChartData(){
    // Make fetch call to actually update buildExerciseList
  fetch("http://127.0.0.1:5000/wingrequest", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      res.json().then((text) => {
        console.log(text);
      });
    })
    .catch((error) => {
      alert(error.message);
    });
}*/

function updateChart() {
  console.log("Should update chart");
  data = [];
  selectElement = document.querySelector('#exerciseMenu');
  output = selectElement.value;

  if (output == "ex2") {
    console.log("selected 2");
    cph.destroy();
    cpd.destroy();
    manpw.destroy();
    cpa.destroy();
    total.destroy();
    makeChart2();
    makeChart2B();
    makeChart2C();
    makeChart2D();
    makeChart2E();

  }
  else {
    cpd.destroy();
    cph.destroy();
    manpw.destroy();
    cpa.destroy();
    total.destroy();
    makeChart1();
    makeChart1B();
    makeChart1C();
    makeChart1D();
    makeChart1E();

  }


}
function generateCharts() {


}
function logout() {
  console.log("Logging user out...");
  document.cookie = "";
  window.location.href = "http://127.0.0.1:3000/index.html";
}

document.addEventListener("DOMContentLoaded", main);
