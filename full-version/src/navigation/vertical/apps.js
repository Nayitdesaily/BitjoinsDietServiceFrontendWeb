// ** Icons Import
import { BookOpen, Clipboard, ShoppingCart, User, CheckSquare, Home, Truck, Play } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    navLink: '/dashboard'
  },
  {
    id: 'clientes',
    title: 'Clientes',
    icon: <CheckSquare size={20} />,
    navLink: '/clientes'
  },
  {
    id: 'plan_alimentacion',
    title: 'Plan Alimentacion',
    icon: <BookOpen size={20} />,
    navLink: '/plan-de-alimentacion'
  },
  {
    id: 'lista_intercambio',
    title: 'Lista De Intercambio',
    icon: <Clipboard size={20} />,
    navLink: '/lista-intercambio'
  },
  {
    id: 'fuera_casa',
    title: 'Fuera De Casa',
    icon: <Truck size={20} />,
    navLink: '/fuera-de-casa'

  },
  {
    id: 'ejercicios',
    title: 'Ejercicios',
    icon: <Play size={20} />,
    navLink: '/ejercicios'

  },
  {
    id: 'recetario',
    title: 'Recetario',
    icon: <ShoppingCart size={20} />,
    navLink: '/recetario'

  },
  {
    id: 'perfil',
    title: 'Perfil',
    icon: <User size={20} />,
    navLink: '/perfil'

  }
]
