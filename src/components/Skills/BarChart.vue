<template>
  <div class="chart-container" style="position: relative; height:30vh; width:50vw">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'PythonSkillsChart',
  components: {
    Bar
  },
  data() {
    return {
      chartData: {
        labels: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Pytorch', 'Backtesting.py'],
        datasets: [
          {
            label: 'Skill Level',
            data: [6, 8, 5, 5, 4, 9],
            backgroundColor: [
              'rgba(253, 111, 0, 100)',
              'rgba(255, 255, 255, 0.8)',
              'rgba(253, 111, 0, 100)',
              'rgba(255, 255, 255, 0.8)',
              'rgba(253, 111, 0, 100)',
              'rgba(255, 255, 255, 0.8)'
            ],
          }
        ]
      },
      chartOptions: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Python Libraries Skill Chart'
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 10,
            title: {
              display: true,
              text: 'Skill Level'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Python Libraries'
            }
          }
        }
      }
    }
  }
}
</script>