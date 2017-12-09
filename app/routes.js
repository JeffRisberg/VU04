import Main from './pages/Main.vue'
import Chart from './pages/Chart.vue'
import DataTable from './pages/DataTable.vue'

export const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/chart',
    name: 'Chart',
    component: Chart
  },
  {
    path: '/dataTable',
    name: 'Data Table',
    component: DataTable
  }
]

