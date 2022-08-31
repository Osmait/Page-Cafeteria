import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Contacto } from '../page/Contacto'

import { GaleriaPag } from '../page/GaleriaPag'
import { Index } from '../page/Index'
import { Menu } from '../page/Menu'
import { Nosotros } from '../page/Nosotros'
import { Proceso } from '../page/Proceso'

export const Rutas = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element = {<Index/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/proceso' element={<Proceso/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/galeria' element={<GaleriaPag/>}/>
        <Route path='/contacto' element={<Contacto/>}/>


      </Route>
    </Routes>
    </BrowserRouter>
  )
}
