import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path = '/' element = {<LayoutOne/>}/>
        <Route index element = {<Home />}/>
      </Route>
    )
  )
  

  return (
    <>

    
    <RouterProvider  router={myRoute} />
    </>
  )
}

export default App
