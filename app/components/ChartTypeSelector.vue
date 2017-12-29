<template>
  <b-form-fieldset>
    <b-form-select
      :plain="true"
      v-model="localChartType"
      :options="[{text: 'Bar', value: 'bar'},{text: 'Column', value: 'horizontalBar'}, {text: 'Line', value: 'line'}]"
      v-on:input="updateValue(localChartType)">
    </b-form-select>
    {{chartType}}
  </b-form-fieldset>
</template>

<script>
  export default {
    name: 'ChartTypeSelector',
    props: [ 'chartType' ],
    data: function () {
      return {
        localChartType: this.chartType
      }
    },
    methods: {
      updateValue: function (chartType) {
        this.$emit('deltaChartType', chartType)
      }
    }
  }
</script>
