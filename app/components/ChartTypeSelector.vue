<template>
  <b-form-fieldset>
    <b-form-select
      :plain="true"
      v-model="chartType"
      :options="['Bar', 'Column', 'Line']">
    </b-form-select>
    {{chartType}}
  </b-form-fieldset>
</template>

<script>
  export default {
    name: 'ChartTypeSelector',
    props: [ 'chartType' ]
  }
</script>
