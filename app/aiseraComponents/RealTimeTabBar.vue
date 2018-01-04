<template>
  <b-nav pills>
    <b-nav-item style="padding-left: 0px; padding-right: 0px;">
      <router-link to="/explore/realTimeIncoming" style="border: 1px solid black;"
                   :style="styleHint1"
                   class="nav-link">
        Incoming
      </router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link to="/explore/realTimeActivities" style="border: 1px solid black;"
                   :style="styleHint2"
                   class="nav-link">
        Activities
      </router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link to="/explore/realTimeMajorIncidents" style="border: 1px solid black;"
                   :style="styleHint3"
                   class="nav-link">
        Major Incidents
      </router-link>
    </b-nav-item>
  </b-nav>
</template>

<script>
  export default {
    name: 'RealTimeTabBar',
    props: [ 'selected' ],
    computed: {
      styleHint1: function () {
        return this.selected === 'incoming' ? 'background: #ccc;' : ''
      },
      styleHint2: function () {
        return this.selected === 'activities' ? 'background: #ccc;' : ''
      },
      styleHint3: function () {
        return this.selected === 'majorIncidents' ? 'background: #ccc;' : ''
      }
    }
  }
</script>
