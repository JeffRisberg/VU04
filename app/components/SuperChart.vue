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
      }
      this.renderChart(data, {})
    },
    watch: {
      'type':
        {
          handler (newData, oldData) {
            if (false && oldData) {
              let chart = this.$data._chart

              // Get new and old DataSet Labels
              let newDatasetLabels = newData.datasets.map((dataset) => {
                return dataset.label
              })

              let oldDatasetLabels = oldData.datasets.map((dataset) => {
                return dataset.label
              })

              // Stringify 'em for easier compare
              const oldLabels = JSON.stringify(oldDatasetLabels)
              const newLabels = JSON.stringify(newDatasetLabels)

              // Check if Labels are equal and if dataset length is equal
              if (newLabels === oldLabels && oldData.datasets.length === newData.datasets.length) {
                newData.datasets.forEach((dataset, i) => {
                  // Get new and old dataset keys
                  const oldDatasetKeys = Object.keys(oldData.datasets[ i ])
                  const newDatasetKeys = Object.keys(dataset)

                  // Get keys that aren't present in the new data
                  const deletionKeys = oldDatasetKeys.filter((key) => {
                    return key !== '_meta' && newDatasetKeys.indexOf(key) === -1
                  })

                  // Remove outdated key-value pairs
                  deletionKeys.forEach((deletionKey) => {
                    delete chart.data.datasets[ i ][ deletionKey ]
                  })

                  // Update attributes individually to avoid re-rendering the entire chart
                  for (const attribute in dataset) {
                    if (dataset.hasOwnProperty(attribute)) {
                      chart.data.datasets[ i ][ attribute ] = dataset[ attribute ]
                    }
                  }
                })

                if (newData.hasOwnProperty('labels')) {
                  chart.data.labels = newData.labels
                }
                if (newData.hasOwnProperty('xLabels')) {
                  chart.data.xLabels = newData.xLabels
                }
                if (newData.hasOwnProperty('yLabels')) {
                  chart.data.yLabels = newData.yLabels
                }
                chart.update()
              } else {
                chart.destroy()
                this.renderChart(this.chartData, this.options)
              }
            } else {
              this.renderChart(this.chartData, this.options)
            }
          }
        }
    },
    methods: {
      renderChart (data, options) {
        let chartOptions = this.defaultOptions // mergeOptions(this.defaultOptions, options)
        this.$data._chart = new Chart(
          this.$refs.canvas.getContext('2d'), {
            type: 'bar',
            data: data,
            options: chartOptions,
            plugins: this.$data._plugins
          }
        )
      }
    },
    beforeDestroy () {
      if (this.$data._chart) {
        this.$data._chart.destroy()
      }
    }
  }
</script>
