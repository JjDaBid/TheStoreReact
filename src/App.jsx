import { BrowserRouter, useRoutes} from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/not-found/NotFound'
import Contact from './pages/contact/Contact'
import Product from './components/Product'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/> },   
    { path: '/category/:idCategory', element: <Home/> }, 
    { path: '/item/:idItem', element: <Product/> },   
    { path: '/contact', element: <Contact/> },
    { path: '*', element: <NotFound/> }
  ])
  return routes;
}

const App = () => {
  
  return (
    <BrowserRouter>
      <AppRoutes/>
      <div className='App'>
        <NavBar />
              
      </div>
    </BrowserRouter>
  );
}

export default App;
