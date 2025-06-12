import { lazy } from 'react'
import Layout from '../../pages/Layout'
import Knowledge from '../../pages/topics/Knowledge'

const Home = lazy(() => import('../../pages/Home'))
const Hoisting = lazy(() => import('../../pages/topics/Hoisting'))
const TemporalDeadZone = lazy(
  () => import('../../pages/topics/TemporalDeadZone')
)
const ObjectMethods = lazy(() => import('../../pages/topics/ObjectMethods'))
const ObjectIterable = lazy(() => import('../../pages/topics/ObjectIterable'))
const PropertyDescriptors = lazy(
  () => import('../../pages/topics/PropertyDescriptors')
)
const ObjectAsHash = lazy(() => import('../../pages/topics/ObjectAsHash'))
const ObjectKeyLooping = lazy(
  () => import('../../pages/topics/ObjectKeyLooping')
)

const ArrayMethods = lazy(() => import('../../pages/topics/ArrayMethods'))
const ArrayCopyPart = lazy(() => import('../../pages/topics/ArrayCopyPart'))
const ArrayFlattening = lazy(() => import('../../pages/topics/ArrayFlattening'))
const ArrayIteration = lazy(() => import('../../pages/topics/ArrayIteration'))
const ArrayCustomSorting = lazy(
  () => import('../../pages/topics/ArrayCustomSorting')
)
const ArrayFiltering = lazy(() => import('../../pages/topics/ArrayFiltering'))

const AdvancedExpressions = lazy(
  () => import('../../pages/topics/AdvancedExpressions')
)

const FunctionalScope = lazy(() => import('../../pages/topics/FunctionalScope'))
const ScopeVisibility = lazy(() => import('../../pages/topics/ScopeVisibility'))
const NestedScopes = lazy(() => import('../../pages/topics/NestedScopes'))

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'knowledge', element: <Knowledge /> },
      { path: 'hoisting', element: <Hoisting /> },
      { path: 'temporal-dead-zone', element: <TemporalDeadZone /> },
      { path: 'object-methods', element: <ObjectMethods /> },
      { path: 'object-iterable', element: <ObjectIterable /> },
      { path: 'property-descriptors', element: <PropertyDescriptors /> },
      { path: 'object-as-hash', element: <ObjectAsHash /> },
      { path: 'object-key-looping', element: <ObjectKeyLooping /> },

      { path: 'array-methods', element: <ArrayMethods /> },
      { path: 'array-copy-part', element: <ArrayCopyPart /> },
      { path: 'array-flattening', element: <ArrayFlattening /> },
      { path: 'array-iteration', element: <ArrayIteration /> },
      { path: 'array-custom-sorting', element: <ArrayCustomSorting /> },
      { path: 'array-filtering', element: <ArrayFiltering /> },

      { path: 'advanced-expressions', element: <AdvancedExpressions /> },

      { path: 'functional-scope', element: <FunctionalScope /> },
      { path: 'scope-visibility', element: <ScopeVisibility /> },
      { path: 'nested-scopes', element: <NestedScopes /> }
    ]
  }
]
