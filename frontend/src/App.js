import './App.css';
//import CounterClass from './components/CounterClass';
import Header from './components/Header';
import AddStudent from "./components/AddStudent";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllStudent from './components/AllStudent';
import UpdateStudent from './components/UpdateStudent';


function App() {
  return (
    <div className='App'>
    
    <BrowserRouter>
        <Header></Header>
        
        <Routes>
            <Route path="/" element={<AllStudent/>}/>
            <Route path="/add" element={<AddStudent/>}></Route> 
            <Route path="/update/:id" element={<UpdateStudent></UpdateStudent>}></Route>
        </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
