import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store.js' 
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { AuthLayout} from './components/index.js'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AddPost from './pages/AddPost.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path:'/home',
        element: <Home/>
      },
      {
        path:"/login",
        element:(
          <AuthLayout authentication={false}>
              <Login/>
          </AuthLayout>
        )
      },
      {
        path:"/signup",
        element:(
          <AuthLayout authentication={false}>
              <Signup/>
          </AuthLayout>
        )
      },
      {
        path:"/add-post",
        element:(
          <AuthLayout authentication>
              <AddPost/>
          </AuthLayout>
        )
      },
      {
        path:"/all-posts",
        element:(
          <AuthLayout authentication>
              <Home/>
          </AuthLayout>
        )
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
