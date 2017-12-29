<template>
  <div class="chart">
    <b-row class="mb-4" style="background: #eee;">
      <b-col col="10">
        <h2>Chart</h2>
      </b-col>
      <b-col col="2">
        <chart-type-selector/>
      </b-col>
    </b-row>
    <line-chart/>
  </div>
</template>

<script>
  import ChartTypeSelector from '../components/ChartTypeSelector.vue'
  import LineChart from '../components/LineChart.vue'

  export default {
    name: 'Chart',
    components: { ChartTypeSelector, LineChart },
    data() {
      return {}
    }
  }
</script>
