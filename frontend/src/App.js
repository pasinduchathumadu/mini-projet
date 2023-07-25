
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import { Menu } from '@mui/material';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
        <Route path='/' element={<Home/> } />
        <Route path='/' element={<About/> } />
        <Route path='/' element={<Menu/> } />
        <Route path='/' element={<Home/> } />
        <Route path='/' element={<Contact/> }/>
        <Route path='/' element={<Home/> } />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
