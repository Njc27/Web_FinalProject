import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SellCategoryChoose from './components/sellCategoryChoose';
import SellForm from "./components/sellForm"
function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/sell' element={<SellCategoryChoose/>}/> 
          <Route path="/sell/form/:item" element={<SellForm/>}/>
        </Routes>
    </div>
  );
}

export default App;
