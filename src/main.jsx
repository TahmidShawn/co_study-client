import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import AuthProvider from './providers/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <div className='max-w-full pt-3 mx-auto bg-[#F7F7F8]'>
      <div className='max-w-screen-xl mx-auto'>
        <React.StrictMode>
          <RouterProvider router={Routes} />
        </React.StrictMode>
      </div>
    </div>,
  </AuthProvider>

)
