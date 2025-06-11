import { lazy } from 'react'
import Layout from '../../pages/Layout'
import Knowledge from '../../pages/topics/Knowledge'

const Home = lazy(() => import('../../pages/Home'))
const Hoisting = lazy(() => import('../../pages/topics/Hoisting'))
const TemporalDeadZone = lazy(
  () => import('../../pages/topics/TemporalDeadZone')
)
const ObjectMethods = lazy(() => import('../../pages/topics/ObjectMethods'))

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'knowledge', element: <Knowledge /> },
      { path: 'hoisting', element: <Hoisting /> },
      { path: 'temporal-dead-zone', element: <TemporalDeadZone /> },
      { path: 'object-methods', element: <ObjectMethods /> }
    ]
  }
]
