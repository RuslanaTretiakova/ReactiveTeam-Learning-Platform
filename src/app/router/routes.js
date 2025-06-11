import { lazy } from 'react'

const Home = lazy(() => import('../../pages/Home'))
const Hoisting = lazy(() => import('../../pages/topics/Hoisting'))
const TemporalDeadZone = lazy(() => import('../../pages/topics/TemporalDeadZone'))
const ObjectMethods = lazy(() => import('../../pages/topics/ObjectMethods'))

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/hoisting', element: <Hoisting /> },
  { path: '/temporal-dead-zone', element: <TemporalDeadZone /> },
  { path: '/object-methods', element: <ObjectMethods /> },
  { path: '*', element: <div>404 - Not Found</div> }
]
