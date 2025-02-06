import React from 'react'

import Navbarcom from './components/Navbarcom'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'
import Comp4 from './components/Comp4'
import Comp5 from './components/Comp5'
import Comp6 from './components/Comp6'
import { Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <div>
 <Navbarcom />

<Comp2 />
<Routes>
  <Route path='/portfolio' element={<Comp3 />} ></Route>
  <Route path='/about' element={<Comp4 />} ></Route>
  <Route path='/contact' element={<Comp5 />}></Route>
</Routes>
<Comp6 />
</div>
  )
}
