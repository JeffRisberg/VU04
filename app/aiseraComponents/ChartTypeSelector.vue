<template>
  <b-form-fieldset>
    <b-form-select
      :plain="true"
      v-model="myChartType"
      :options="[{text: 'Bar', value: 'horizontalBar'},{text: 'Column', value: 'bar'}, {text: 'Line', value: 'line'}]"
      v-on:input="updateChartType(myChartType)">
    </b-form-select>
  </b-form-fieldset>
</template>

<script>
  export default {
    name: 'ChartTypeSelector',
    props: [ 'chartType' ],
    data: function () {
      return {
        myChartType: this.chartType
      }
    },
    methods: {
      updateChartType: function (chartType) {
        this.$emit('deltaChartType', chartType)
      }
    }
  }
</script>
