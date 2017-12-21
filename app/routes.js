import Full from './containers/Full.vue'
import Main from './pages/Main.vue'
import Chart from './pages/Chart.vue'
import Summary from './pages/Summary.vue'

export const routes = [
  {
    path: '/',
    redirect: '/main',
    name: 'Home',
    component: Full,
    children: [
      {
        path: '/main',
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
  }
]
