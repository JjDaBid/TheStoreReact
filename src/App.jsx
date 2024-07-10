import { BrowserRouter, useRoutes} from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/not-found/NotFound'
import Contact from './pages/contact/Contact'
import Product from './components/Product'
import { ShopComponentContext } from './context/shopContext'
import Checkout from './components/Checkout'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/> },   
    { path: '/category/:idCategory', element: <Home/> }, 
    { path: '/item/:idItem', element: <Product/> },   
    { path: '/contact', element: <Contact/> },
    { path: '/checkout', element: <Checkout /> },
    { path: '*', element: <NotFound/> }
  ])
  return routes;
}

const App = () => {
  
  return (
    <ShopComponentContext>
      <BrowserRouter>
        <AppRoutes/>
        <div className='App'>
          <NavBar />        
        </div>
      </BrowserRouter>
    </ShopComponentContext>
  );
}

export default App;
