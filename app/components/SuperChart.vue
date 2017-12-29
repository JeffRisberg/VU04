<script>
  import Chart from 'chart.js'

  export default {
    name: 'SuperChart',
    props: [ 'type', 'height' ],

    render: function (createElement) {
      return createElement(
        'div', {
          style: this.styles,
          class: this.cssClasses
        },
        [
          createElement(
            'canvas', {
              attrs: {
                id: this.chartId,
                width: this.width,
                height: this.height
              },
              ref: 'canvas'
            }
          )
        ]
      )
    },
    mounted() {
      const data = {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
        datasets: [
          {
            label: 'Temperature',
            backgroundColor: '#63c2de',
            borderColor: 'rgba(255,255,255,.55)',
            data: [ 1, 18, 9, 17, 34, 22, 11 ]
          }
        ]
      };

      const defaultOptions = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [ {
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: false
            }
          } ],
          xAxes: [ {
            gridLines: {
              display: false
            },
            categoryPercentage: 0.5,
            barPercentage: 0.2
          } ]
        }
      }

      console.log(this.type)

      // const options = {}
      const chartOptions = defaultOptions // mergeOptions(defaultOptions, options)
      this.$data._chart = new Chart(
        this.$refs.canvas.getContext('2d'), {
          type: this.type,
          data: data,
          options: chartOptions,
          plugins: this.$data._plugins
        }
      )
    },
    beforeDestroy () {
      if (this.$data._chart) {
        this.$data._chart.destroy()
      }
    }
  }
</script>
