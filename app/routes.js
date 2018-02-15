import Full from './containers/Full.vue'
import Main from './pages/Main.vue'
import Chart from './pages/Chart.vue'
import Summary from './pages/Summary.vue'
import Summary1 from './pages/Summary1.vue'
import Summary2 from './pages/Summary2.vue'
import MajorIncident from './pages/MajorIncident.vue'
import IncidentList from './pages/IncidentList.vue'
import FormExample from './pages/FormExample.vue'

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
        redirect: '/summary/summary1',
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
      },
      {
        path: '/majorIncident',
        name: 'MajorIncident',
        component: MajorIncident
      },
      {
        path: '/incidentList',
        name: 'IncidentList',
        component: IncidentList
      },
      {
        path: '/formExample',
        name: 'FormExample',
        component: FormExample
      }
    ]
  }
]
