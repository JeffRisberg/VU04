<template>
  <div class="main">
    <h2>Major Incident</h2>
    <div class="row">
      <div class="col-4">
        <indicator title="Requests" value="7,345"/>
      </div>
      <div class="col-4">
        <indicator title="Requests Deflected" value="3,451"/>
      </div>
      <div class="col-4">
        <indicator title="Cost Savings" value="$345,678"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Indicator from '../aiseraComponents/Indicator.vue'

  export default {
    name: 'MajorIncident',
    components: { Indicator },
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
