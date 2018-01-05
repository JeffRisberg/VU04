<template>
  <table class="summary">
    <tr>
      <td>
        <div class="sidebar">
          <nav class="sidebar-nav">
            <ul class="nav">
              <SidebarNavItem>
                <SidebarNavLink url="/summary/summary1" name="S1"/>
              </SidebarNavItem>
              <SidebarNavItem>
                <SidebarNavLink url="/summary/summary2" name="S2"/>
              </SidebarNavItem>
            </ul>
          </nav>
        </div>
      <td/>
      <td>
        <router-view></router-view>
      </td>
    </tr>
  </table>
</template>

<script>
  import SidebarNavItem from '../components/SidebarNavItem.vue'
  import SidebarNavLink from '../components/SidebarNavLink.vue'

  export default {
    name: 'Summary',
    components: { SidebarNavItem, SidebarNavLink },
    data () {
      return {}
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
