import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Produtos } from './Pages/Produtos';
import { Home } from './Pages/Home';
import { Pedidos } from './Pages/Pedidos';
import { Categorias } from './Pages/Categorias';
import App from './App';
import { Login } from './Pages/Login';
import { Notfound } from './Pages/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<App/>} > 
          <Route path="" element={<Home/>} />
          <Route path="/produtos" element={<Produtos/>} />
          <Route path="/categorias" element={<Categorias/>} />
          <Route path="/pedidos" element={<Pedidos/>} />
        </Route>
        <Route path='*' element={<Notfound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
