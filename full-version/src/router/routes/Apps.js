// ** React Imports
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Clientes = lazy(() => import('../../views/clientes'))
const Dashboard = lazy(() => import('../../views/dashboard'))

const Roles = lazy(() => import('../../views/apps/roles-permissions/roles'))
const Permissions = lazy(() => import('../../views/apps/roles-permissions/permissions'))

const AppRoutes = [
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    element: <Clientes />,
    path: '/clientes',
  },

  
]

export default AppRoutes
