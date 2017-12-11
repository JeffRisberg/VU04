<template>
  <div class="summary">
    <h2>Summary</h2>
    <data-table title="Sample1" />
  </div>
</template>

<script>
  import DataTable from '../components/DataTable.vue'

  export default {
    name: 'Summary',
    components: { DataTable },
    data () {
      return {}
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
