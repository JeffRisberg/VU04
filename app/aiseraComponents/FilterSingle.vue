<template>
  <b-form-group :label="text">
    <b-form-fieldset>
      <b-form-select style="display: inline"
                     :plain="true"
                     v-model="filterSingle"
                     :options="values">
      </b-form-select>
    </b-form-fieldset>
  </b-form-group>
</template>

<script>
  export default {
    name: 'FilterSingle',
    props: [ 'text', 'values' ],
    data: function () {
      return {
        filterSingle: this.values[ 0 ]
      }
    }
  }
</script>
