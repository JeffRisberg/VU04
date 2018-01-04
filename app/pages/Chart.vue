<template>
  <div class="chart">
    <b-row class="mb-4" style="background: #eee;">
      <b-col sm="10">
        <h2>Chart</h2>
      </b-col>
      <b-col sm="2">
        <chart-type-selector :chartType="chartType"
                             v-on:deltaChartType="saveChartType"/>
      </b-col>
    </b-row>
    <typed-chart :chartType="chartType" :chartData="chartData"
                 v-on:clickChart="clickChart"/>
  </div>
</template>

<script>
  import ChartTypeSelector from '../aiseraComponents/ChartTypeSelector.vue'
  import TypedChart from '../aiseraComponents/TypedChart.vue'

  export default {
    name: 'Chart',
    components: { ChartTypeSelector, TypedChart },
    data: function () {
      return {
        chartType: 'bar',
        chartData: {
          labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
          datasets: [
            {
              label: 'Temperature',
              backgroundColor: '#63c2de',
              borderColor: 'rgba(255,255,255,.55)',
              data: [ 1, 18, 9, 17, 34, 22, 11 ]
            },
            {
              label: 'Purchases',
              backgroundColor: '#ee7722',
              borderColor: 'rgba(255,255,255,.55)',
              data: [ 31, 28, 29, 7, 12, 18, 5 ]
            }
          ]
        }
      }
    },
    methods: {
      saveChartType: function (chartType) {
        this.chartType = chartType;
      },
      clickChart: function (index) {
        console.log('click on ' + index)
      }
    }
  }
</script>
