import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutPage from './components/LayoutPage.jsx'
import LeadForm from './components/LeadForm.jsx'
import Dashboard from './components/dashboard.jsx'
import LeadList from './components/LeadList.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [

      {
        path: '',
        element: <LeadForm />
      },
      {
        path: '/lead-page',
        element: <Dashboard />
      }

    ]
  }

])


createRoot(document.getElementById('root')).render(

  <StrictMode>

    <RouterProvider router={router} >

      <App />

    </RouterProvider>

  </StrictMode>,

)

