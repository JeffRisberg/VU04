<template>
  <b-form-fieldset>
    <b-form-select
      :plain="true"
      v-model="myScore"
      :options="options"
      v-on:input="updateScore(myScore)">
    </b-form-select>
  </b-form-fieldset>
</template>

<script>
  export default {
    name: 'ScoreSelector',
    props: [ 'score' ],
    data: function () {
      return {
        myScore: this.score,
        options: [
          { text: 'Any Score', value: 0 },
          { text: 'Score 10', value: 10 },
          { text: 'Score 9 or more', value: 9 },
          { text: 'Score 8 or more', value: 8 },
          { text: 'Score 7 or more', value: 7 },
          { text: 'Score 6 or more', value: 6 },
          { text: 'Score 5 or more', value: 5 },
          { text: 'Score 4 or more', value: 4 },
          { text: 'Score 3 or more', value: 3 },
          { text: 'Score 2 or more', value: 2 },
          { text: 'Score 1 or more', value: 1 }
        ]
      }
    },
    methods: {
      updateScore: function (score) {
        this.$emit('deltaScore', score)
      }
    }
  }
</script>
