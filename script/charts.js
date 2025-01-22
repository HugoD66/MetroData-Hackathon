export function setupCharts() {
  const workTypesOptions = {
    series: [{
      name: 'Évolution',
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
    }],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    title: {
      text: 'Évolution des Formes de Travail (2020-2024)',
      align: 'left'
    },
    xaxis: {
      categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep']
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

  const geoDistributionOptions = {
    series: [44, 55, 13, 43, 22],
    chart: {
      type: 'pie',
      height: 350
    },
    labels: ['Centre', 'Nord', 'Sud', 'Est', 'Ouest'],
    title: {
      text: 'Répartition des Emplois par Zone',
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

  const workTypesChart = new ApexCharts(document.querySelector("#workTypesChart"), workTypesOptions);
  const emergingJobsChart = new ApexCharts(document.querySelector("#emergingJobsChart"), emergingJobsOptions);
  const geoDistributionChart = new ApexCharts(document.querySelector("#geoDistributionChart"), geoDistributionOptions);
  const skillsMatchChart = new ApexCharts(document.querySelector("#skillsMatchChart"), skillsMatchOptions);

  workTypesChart.render();
  emergingJobsChart.render();
  geoDistributionChart.render();
  skillsMatchChart.render();
}