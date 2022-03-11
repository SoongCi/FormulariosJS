import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './components/pages/home/Index.jsx';
import { About } from './components/pages/aboutUs/About';
import { Contacto } from './components/pages/contact/Contact';
import { SinPagina } from './components/pages/notFound/NotFount';
import { ContadorR } from './components/pages/contador/ContadorReact';
import { PagGaleria } from './components/pages/galeria/GaleriaPag';
import { LoginPrincipal } from './components/pages/login/LoginPrincipal';
import { RegistroPrincipal } from './components/pages/registro/RegistroPrincipal';




function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AboutUs' element={<About/>}/>
          <Route path='/Contact' element={<Contacto/>}/>
          <Route path='/Contador' element={<ContadorR/>}/>
          <Route path='/Galeria' element={<PagGaleria/>}/>
          <Route path='/Login' element={<LoginPrincipal/>}/>
          <Route path='/registro' element={<RegistroPrincipal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
