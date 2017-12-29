<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    name: 'LineChart',
    props: [ 'height' ],

    mounted() {
      this.renderChart({
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
        datasets: [
          {
            label: 'Temperature',
            backgroundColor: '#63c2de',
            borderColor: 'rgba(255,255,255,.55)',
            data: [ 1, 18, 9, 17, 34, 22, 11 ]
          }
        ]
      }, {
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      })
    }
  }
</script>
