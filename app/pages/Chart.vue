<template>
  <div class="chart">
    <b-row class="mb-4" style="background: #eee;">
      <b-col sm="10">
        <h2>Chart</h2>
      </b-col>
      <b-col sm="2">
        <chart-type-selector :chartType="chartType"
                             v-on:deltaChartType="saveChartType"
          />
        {{chartType}}
      </b-col>
    </b-row>
    <super-chart :type="chartType"/>
  </div>
</template>

<script>
  import ChartTypeSelector from '../components/ChartTypeSelector.vue'
  import SuperChart from '../components/SuperChart.vue'

  export default {
    name: 'Chart',
    components: { ChartTypeSelector, SuperChart },
    // mounted: function () {
    //  this.localChartType = 'line'
    // },
    data: function () {
      return {
        chartType: 'bar'
      }
    },
    methods: {
      saveChartType: function (arg) {
        console.log('deltaChartType=' + arg)
        this.chartType = arg;
        this.$forceUpdate()
      }
    }
  }
</script>
