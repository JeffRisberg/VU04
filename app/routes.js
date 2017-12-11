import Main from './pages/Main.vue'
import Chart from './pages/Chart.vue'
import Summary from './pages/Summary.vue'

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
    path: '/summary',
    name: 'Summary',
    component: Summary
  }
]
