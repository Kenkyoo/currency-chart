import Chart from 'chart.js/auto';
import { Colors } from 'chart.js';

Chart.register(Colors);

export function chart(keys, values) {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
          labels: keys,
          datasets: [{
            label: 'Tipo de cambio',
            data: values,
            backgroundColor: '#1c1917',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              type: 'logarithmic',  // Cambia la escala a logarítmica
              beginAtZero: true,
              ticks: {
                callback: function(value, index, values) {
                  return Number(value.toString()); // Personaliza la visualización de los ticks si es necesario
                }
              }
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function(tooltipItem) {
                  return `Tipo de cambio: ${tooltipItem.raw}`;
                }
              }
            }
          }
        }
      });          
}
