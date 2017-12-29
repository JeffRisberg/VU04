<script>
  // A version of chart-vue that allows the chart type to be a property, thus allowing us to change the chart type.

  import Chart from '../../node_modules/chart.js/src/chart'

  export default {
    name: 'TypedChart',
    props: [ 'chartType', 'chartData', 'height' ],

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
    data: function () {
      return {
        defaultOptions: {
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
      }
    },
    mounted () {
      this.renderChart(this.chartData, {})
    },
    methods: {
      renderChart (chartData, options) {
        let chartOptions = this.defaultOptions // mergeOptions(this.defaultOptions, options)
        this.$data._chart = new Chart(
          this.$refs.canvas.getContext('2d'), {
            type: this.chartType,
            data: chartData,
            options: chartOptions,
            plugins: this.$data._plugins
          }
        )
      }
    },
    watch: {
      'chartType':
        {
          handler (newData, oldData) {
            if (this.$data._chart) {
              this.$data._chart.destroy()
            }
            this.renderChart(this.chartData, this.options)
          }
        }
    },
    beforeDestroy () {
      if (this.$data._chart) {
        this.$data._chart.destroy()
      }
    }
  }
</script>
