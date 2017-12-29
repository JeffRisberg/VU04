<template>
  <div class="chart">
    <b-row class="mb-4" style="background: #eee;">
      <b-col sm="10">
        <h2>Chart</h2>
      </b-col>
      <b-col sm="2">
        <chart-type-selector :chartType="chartType"/>
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
    data () {
      return {
        chartType: 'Bar'
      }
    }
  }
</script>
