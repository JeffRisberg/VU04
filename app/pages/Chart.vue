<template>
  <div class="chart">
    <h1>Chart</h1>
    <line-chart />
  </div>
</template>

<script>
  import LineChart from '../components/LineChart.vue'

  export default {
    name: 'Chart',
    components: [LineChart],
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
