import { Route, Routes} from 'react-router-dom';
import Table from "./Components/Table/Table.jsx"
import Form from "./Components/Form/Form.jsx"
import Home from "./Components/Home/Home.jsx"
import './App.css';


function App() {
  return (
    <div className="App">
    
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/table" element={<Table/>}/>       
    <Route exact path="/form" element={<Form/>}/>     
      </Routes>
    </div>
  )
}

export default App;
