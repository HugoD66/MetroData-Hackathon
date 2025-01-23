export function setupCharts() {

  let toulouseSeries = [0,0,0,0,0,0];
  let bordeauxSeries = [0,0,0,0,0,0];

  const myRange = document.getElementById("myRange");
  myRange.addEventListener("input", function() {
    const selectedYear = this.value;
    updateSliderValue(selectedYear);
    updateChart(selectedYear);
  });

  function updateSliderValue(value) {
    document.getElementById("sliderValue").textContent = value;
  }

  function updateChart(selectedYear) {
    switch (selectedYear) {
      case '2024':
        toulouseSeries = [32001, 24595, 18865, 9568, 4967, 12206];
        bordeauxSeries = [34334, 23893, 19054, 9452, 5050, 13426];
        break;
      case '2023':
        toulouseSeries = [32648,25176,19452,9854,5045,12326];
        bordeauxSeries = [35030,24417,19584,9718,5081,13571];
        break;
      case '2022':
        toulouseSeries = [33030,25295,19559,9992,5038,12391];
        bordeauxSeries = [35429,24531,19939,9900,5143,13786];
        break;
      case '2021':
        toulouseSeries = [33731,25857,20049,10220,5121,12603];
        bordeauxSeries = [35900,24870,20493,10123,5151,14004];
        break;
      case '2020':
        toulouseSeries = [34571,26377,20682,10385,5220,12984];
        bordeauxSeries = [36330,25438,21199,10265,5199,14249];
        break;
      default:
        toulouseSeries = [37213,27400,21440,10549,5343,13252];
        bordeauxSeries = [36844,25984,21916,10541,5258,14523];
        break
    }
    enterpriseRepartitionToulouse.updateSeries(toulouseSeries);
    enterpriseRepartitionBordeaux.updateSeries(bordeauxSeries);
  }

  const enterpriseRepartitionToulouseOptions = {
    name: 'toulooouse',
    series: [32001, 24595, 18865, 9568, 4967, 12206],
    chart: {
      type: 'pie',
      height: 350
    },
    labels: ['BTP IMMOBILIER', 'ACTIVITES DE SERVICE', 'COMMERCES ET SERVICES AUX PARTICULIERS', 'SANTE, SOCIAL', 'CULTURES LOISIRS', 'AUTRES'],
    title: {
      text: 'Toulouse Metropole',
      align: 'left'
    }
  };

  const emergingJobsOptions = {
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690]
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    title: {
      text: 'Métiers en Forte Croissance',
      align: 'left'
    },
    xaxis: {
      categories: ['Data Science', 'IA', 'Cybersécurité', 'DevOps', 'Cloud', 'UX/UI', 'Développement']
    }
  };

  const enterpriseRepartitionBordeauxOptions = {
    series: [34334, 23893, 19054, 9452, 5050, 13426],
    chart: {
      type: 'pie',
      height: 350
    },
    labels: ['BTP IMMOBILIER', 'ACTIVITES DE SERVICE', 'COMMERCES ET SERVICES AUX PARTICULIERS', 'SANTE, SOCIAL', 'CULTURES LOISIRS', 'AUTRES'],
    title: {
      text: 'Bordeaux Metropole',
      align: 'left'
    }
  };

  const skillsMatchOptions = {
    series: [{
      name: 'Offres',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Demandes',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }],
    chart: {
      type: 'area',
      height: 350,
      stacked: false
    },
    title: {
      text: 'Écart entre Offre et Demande par Secteur',
      align: 'left'
    },
    xaxis: {
      categories: ['Tech', 'Santé', 'Commerce', 'Industry', 'Services', 'BTP', 'Transport', 'Education', 'Green']
    }
  };

  const mySwitch = document.getElementById("mySwitch");
  mySwitch.addEventListener("input", function() {
    const checked = this.checked;
    updateChart2(checked) // Get the state of the checkbox
  });

  function updateChart2(checked) {
    if (checked===true) {
      columnChartEmploys.updateSeries([
        {
          name: "2018",
          data: [8249, 4102, 7498]
        },
        {
          name: "2023",
          data: [8501, 5446, 5410]
        }
      ]);
      columnChartEmploys.updateOptions({
        xaxis: {
          categories: [
            "ACTIVITÉS JURIDIQUES, COMPTABLES",
            "CONSTRUCTION",
            "ENSEIGNEMENT"
          ]
        }
      });
    } else {
      columnChartEmploys.updateSeries([
        {
          name: "2018",
          data: [50190, 12780, 11720, 9930, 8220]
        },
        {
          name: "2023",
          data: [62670, 16980, 9620, 12250, 8470]
        }
      ]);
      columnChartEmploys.updateOptions({
        xaxis: {
          categories: [
            "ACTIVITÉS DE SERVICES",
            "HÉBERGEMENT MÉDICO-SOCIAL",
            "COMMERCE ET AUTOMOBILES",
            "HÉBERGEMENT ET RESTAURATION",
            "ACTIVITÉS JURIDIQUES"
          ]
        }
      });
    }
  }
  

  const columnChartEmploysOptions = {
    series: [
      {
        name: "2018",
        data: [50190, 12780, 11720, 9930, 8220]
      },
      {
        name: "2023",
        data: [62670, 16980, 9620, 12250, 8470]
      }
    ],
    chart: {
      type: "bar",
      height: 400
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: [
        "ACTIVITÉS DE SERVICES",
        "HÉBERGEMENT MÉDICO-SOCIAL",
        "COMMERCE ET AUTOMOBILES",
        "HÉBERGEMENT ET RESTAURATION",
        "ACTIVITÉS JURIDIQUES"
      ]
    },
    yaxis: {
      title: {
        text: "Nombre d'offres"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        const value2018 = series[0][dataPointIndex];
        const value2023 = series[1][dataPointIndex];
        const percentageChange = (((value2023 - value2018) / value2018) * 100).toFixed(1);

        return `
        <div style="padding: 10px; background: #fff; border: 1px solid #ccc; border-radius: 5px;">
          <strong>${columnChartEmploysOptions.xaxis.categories[dataPointIndex]}</strong><br/>
          2018: ${value2018}<br/>
          2023: ${value2023}<br/>
          Augmentation: <strong>${percentageChange}%</strong>
        </div>`;
      }
    },
    title: {
      text: "Top des secteurs avec le plus d'offres d'emploi en 2018 et leur évolution en 2023",
      align: "center"
    }
  };


  // Configuration des données et options pour le graphique
  const professionByRepartitionsOptions = {
    series: [
      {
        name: "CDI",
        data: [0, 0, 600000, 0, 0] // Données pour CDI
      },
      {
        name: "CES",
        data: [0, 0, 0, 0, 30000] // Données pour CES
      },
      {
        name: "NON SPECIFIE",
        data: [5000, 10000, 0, 20000, 0] // Données pour NON SPECIFIE
      }
    ],
    chart: {
      type: "bar",
      height: 400,
      stacked: true
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10
      }
    },
    xaxis: {
      categories: [
        "AGRICULTURE",
        "FINANCE & ASSURANCE",
        "FONCTION PUBLIQUE",
        "INFORMATIQUE",
        "ENERGIE"
      ],
      title: {
        text: "Profession"
      }
    },
    yaxis: {
      title: {
        text: "Nombre de contrats"
      }
    },
    legend: {
      position: "right",
      offsetY: 40
    },
    title: {
      text: "Répartition des types de contrats par profession en 2021",
      align: "center"
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      shared: true,
      intersect: false
    }
  };



  const enterpriseRepartitionToulouse = new ApexCharts(document.querySelector("#enterpriseRepartitionToulouse"), enterpriseRepartitionToulouseOptions);
  const enterpriseRepartitionBordeaux = new ApexCharts(document.querySelector("#enterpriseRepartitionBordeaux"), enterpriseRepartitionBordeauxOptions);
  const columnChartEmploys = new ApexCharts(document.querySelector("#columnChartEmploys"), columnChartEmploysOptions);
  const professionByRepartitions = new ApexCharts(document.querySelector("#professionByRepartitions"), professionByRepartitionsOptions);

  const emergingJobsChart = new ApexCharts(document.querySelector("#emergingJobsChart"), emergingJobsOptions);
  const skillsMatchChart = new ApexCharts(document.querySelector("#skillsMatchChart"), skillsMatchOptions);

  enterpriseRepartitionToulouse.render();
  enterpriseRepartitionBordeaux.render();
  columnChartEmploys.render();
  professionByRepartitions.render();

  emergingJobsChart.render();
  skillsMatchChart.render();

}