import Full from './containers/Full.vue'
import Main from './pages/Main.vue'
import Chart from './pages/Chart.vue'
import Summary from './pages/Summary.vue'
import Summary1 from './pages/Summary1.vue'
import Summary2 from './pages/Summary2.vue'

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
        component: Summary,
        children: [
          {
            path: 'summary1',
            name: 'Summary1',
            component: Summary1
          },
          {
            path: 'summary2',
            name: 'Summary2',
            component: Summary2
          }
        ]
      }
    ]
  }
]
