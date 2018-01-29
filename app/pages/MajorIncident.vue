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

    <b-button class="btn btn-primary" v-if="mode !== 'details'" @click="changeMode('details')">
      <i class="fa fa-angle-double-right" aria-hidden="true"></i>
      Details
    </b-button>

    <b-button class="btn btn-primary" v-if="mode !== 'summary'" @click="changeMode('summary')">
      <i class="fa fa-angle-double-right" aria-hidden="true"></i>
      Summary
    </b-button>

    <major-incident-card :count="count" :item_list="item_list"/>

    <b-row class="mb-4" style="background: #eee;" v-if="mode === 'details'">
      <b-col sm="12">
        <data-table :fields="tableFields"
                    :paginated="false"
                    :dataSet="relatedIncidents"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import DataTable from '../aiseraComponents/DataTable.vue'
  import Indicator from '../aiseraComponents/Indicator.vue'
  import MajorIncidentCard from '../aiseraComponents/MajorIncidentCard.vue'

  export default {
    name: 'MajorIncident',
    components: { DataTable, Indicator, MajorIncidentCard },
    data () {
      return {
        mode: 'summary',
        count: 5,
        item_list: [
          { name: 'a', score: 5 },
          { name: 'b', score: 6 }
        ],
        tableFields: [
          { key: 'name', sortable: true },
          { key: 'description', sortable: true }
        ],
        relatedIncidents: [
          {
            name: 'INC_001',
            description: 'desc1'
          },
          {
            name: 'INC_002',
            description: 'desc2'
          }
        ]
      }
    },
    methods: {
      changeMode: function (newMode) {
        this.mode = newMode
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
