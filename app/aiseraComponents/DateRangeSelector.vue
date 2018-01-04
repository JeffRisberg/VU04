<template>
  <b-form-fieldset>
    <b-form-select
      :plain="true"
      v-model="myDateRange"
      :options="options"
      v-on:input="updateDateRange(myDateRange)">
    </b-form-select>
  </b-form-fieldset>
</template>

<script>
  export default {
    name: 'DateRangeSelector',
    props: [ 'dateRange' ],
    data: function () {
      return {
        myDateRange: this.dateRange,
        options: [
          { text: 'Last 1 Day', value: 1 },
          { text: 'Last 3 Days', value: 3 },
          { text: 'Last 7 Days', value: 7 },
          { text: 'Last 30 Days', value: 30 },
          { text: 'Last 45 Days', value: 45 },
          { text: 'Last 60 Days', value: 60 },
          { text: 'Last 90 Days', value: 90 },
          { text: 'Last 180 Days', value: 180 },
          { text: 'Custom', value: 0 }
        ]
      }
    },
    methods: {
      updateDateRange: function (dateRange) {
        this.$emit('deltaDateRange', dateRange)
      }
    }
  }
</script>
