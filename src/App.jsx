import { BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'



function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <ItemListContainer greeting={"Hola"}/>        
      </div>
    </BrowserRouter>
  );
}

export default App;
