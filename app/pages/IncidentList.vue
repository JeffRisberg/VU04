<template>
  <div class="main">
    <h2>Incident List</h2>

    <b-row class="mb-4" style="background: #eee;">
      <b-col sm="12">
        <data-table :fields="tableFields"
                    :paginated="false"
                    :dataSet="incidentList"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import DataTable from '../aiseraComponents/DataTable.vue'
  import Spinner from '../components/Spinner.vue'

  export default {
    name: 'IncidentList',
    components: { DataTable, Spinner },
    data () {
      return {
        tableFields: [
          { key: 'name', sortable: true },
          { key: 'description', sortable: true }
        ]
      }
    },
    computed: {
      incidents: function () {
        return this.$store.indicents
      }
    },
    mounted: function () {
      this.getData()
    },
    methods: {
      getData: function () {
        // make a request
      }
    }
  }
</script>
