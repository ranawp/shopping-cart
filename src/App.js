import logo from './logo.svg';
import './App.css';
import Navbar from './share/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
