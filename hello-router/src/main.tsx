import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { DefaultErrorPage } from './routes/DefaultErrorPage'
import { DetailsPage } from './routes/DetailsPage'
import { HomePage } from './routes/HomePage'
import { Root } from './routes/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <DefaultErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'details',
        element: <DetailsPage />
      }
    ]
  }
])

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
)
