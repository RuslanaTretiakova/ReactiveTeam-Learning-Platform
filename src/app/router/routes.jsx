import { lazy } from 'react'
import Layout from '../../pages/Layout'
import Knowledge from '../../pages/Knowledge'
import TopicPage from '../../pages/TopicPage'

const Home = lazy(() => import('../../pages/Home'))

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'knowledge', element: <Knowledge /> },
      { path: ':slug', element: <TopicPage /> }
    ]
  }
]
