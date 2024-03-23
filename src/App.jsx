import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import './App.css'
import {
  Home,
  Contact,
  Landing,
  Project
} from './pages/index'
const router= createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
    children:[
      {
        index:true,
        element: <Landing/>,
      }
    ]
  }
])
function App() {

  return (
    <RouterProvider router={router} />
      
  )
}

export default App
