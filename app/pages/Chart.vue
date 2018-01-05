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
    <typed-chart :chartType="chartType"
                 :chartData="chartData"
                 v-on:clickChart="clickChart"/>
    <b-row class="mb-4" style="background: #eee;">
      <b-col sm="12">
        <data-table :fields="tableFields"
                    :paginated="false"
                    :dataSet="dataSet"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import ChartTypeSelector from '../aiseraComponents/ChartTypeSelector.vue'
  import DataTable from '../aiseraComponents/DataTable.vue'
  import TypedChart from '../aiseraComponents/TypedChart.vue'

  export default {
    name: 'Chart',
    components: { ChartTypeSelector, DataTable, TypedChart },
    data: function () {
      return {
        chartType: 'bar',
        barIndex: 0,
        tableFields: [
          { key: 'name', sortable: true },
          { key: 'description', sortable: true }
        ]
      }
    },
    computed: {
      chartData () {
        return {
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
      },
      dataSet () {
        if ((this.barIndex % 2) === 0) {
          return [
            {
              name: 'Jack',
              description: 'Jack from New York'
            },
            {
              name: 'Tom',
              description: 'Tom from Chicago'
            },
            {
              name: 'Jane',
              description: 'Jane from Los Angeles'
            }
          ]
        }
        if ((this.barIndex % 2) === 1) {
          return [
            {
              name: 'Angela',
              description: 'Angela from Cleveland'
            },
            {
              name: 'Susan',
              description: 'Susan from Houston'
            },
            {
              name: 'Henry',
              description: 'Henry from Portland'
            }
          ]
        }
      }
    },
    methods: {
      saveChartType: function (chartType) {
        this.chartType = chartType
      },
      clickChart: function (index) {
        this.barIndex = index
      }
    }
  }
</script>
