import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LeadForm from './components/LeadForm.jsx'
import Dashboard from './components/dashboard.jsx'



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

