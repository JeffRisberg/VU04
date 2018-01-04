<!-- This is a data table with pagination which has the following properties:
   - fields (required)
   - dataSet (required)
   - several visual options (with defaults)

   There is special case for a field called "status" in which a badge is generated, and
   a sepcial case for a field called "show_details" which creates an expansion row.

   The field specification can also indicate which columns are to be sortable.
-->
<template>
  <div>
    <b-table :hover="hover" :striped="striped"
             :bordered="bordered" :small="small" :fixed="fixed"
             class="table-responsive-sm" :items="dataSet"
             :fields="fields" :current-page="currentPage"
             :per-page="perPage">
      <template slot="status" slot-scope="data">
        <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
      </template>
      <template slot="userName" slot-scope="data">
        {{data.item.inputParams !== undefined ? data.item.inputParams.parameters.userName : ''}}
      </template>
      <template slot="connectorType" slot-scope="data">
        <img :src="'/static/svg/' + data.item.type + '.svg'" height="30" width="30"/>
      </template>
      <template slot="channelType" slot-scope="data">
        <img :src="'/static/svg/' + data.item.type + '.svg'" height="30" width="30"/>
      </template>
      <template slot="connectorEdit" slot-scope="data">
        <router-link :to="'/connectors/' + data.item.id">Edit <i class="fa fa-pencil"></i></router-link>
      </template>
      <template slot="channelEdit" slot-scope="data">
        <router-link :to="'/channels/' + data.item.id">Edit <i class="fa fa-pencil"></i></router-link>
      </template>
      <template slot="show_details" scope="row">
        <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
        <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Content
        </b-button>
        <!-- In some circumstances you may need to use @click.native.stop instead -->
      </template>
      <template slot="row-details" scope="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Content:</b></b-col>
            <b-col>{{ row.item.content }}</b-col>
          </b-row>

          <b-button size="sm" @click="row.toggleDetails">Hide Content</b-button>
        </b-card>
      </template>
    </b-table>
    <nav>
      <b-pagination :total-rows="getRowCount(dataSet)"
                    :per-page="perPage"
                    v-model="currentPage"
                    prev-text="Prev"
                    next-text="Next"
                    hide-goto-end-buttons/>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'DataTable',
    props: {
      fields: {
        type: Array
      },
      dataSet: {
        type: Array
      },
      hover: {
        type: Boolean,
        default: true
      },
      striped: {
        type: Boolean,
        default: true
      },
      bordered: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      }
    },
    data: () => {
      return {
        currentPage: 1,
        perPage: 20,
        totalRows: 0
      }
    },
    methods: {
      getBadge (status) {
        return status === 'Closed' ? 'success'
          : status === 'Inactive' ? 'secondary'
            : status === 'InProgress' ? 'warning'
              : status === 'New' ? 'danger' : 'primary'
      },
      getRowCount (items) {
        return items.length
      }
    }
  }
</script>
