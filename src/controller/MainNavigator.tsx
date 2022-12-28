import { Routes, Route } from 'react-router-dom'
import { About } from '../view/aboutus/Abouts'
import { Reception } from '../view/categories/Reception'
import { Haldi } from '../view/categories/Haldi'
import { Comingsoon } from '../view/comingsoon/Comingsoon'
import { Plannerdashboard } from '../view/palnnerhome/Plannerdashbord'
import { Plannerfooter } from '../view/plannerfooter/Plannerfooter'
import { Plannerheader } from '../view/plannerhead/Plannerhead'
import { Subcategories } from '../view/categories/subcategories/Subcategorie'
import { Mantapa } from '../view/categories/Mantapa'
import { Birthday } from '../view/categories/Birthday'
import { Contactus } from '../view/cart/Cart'
import { Naming } from '../view/categories/Naming'
import { Keeth } from '../view/categories/Keeth'
import { Terms } from '../view/termscondition/Terms'

function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Plannerdashboard />} />

        <Route path="/plannerfooter" element={<Plannerfooter />} />

        <Route path="/plannerheader" element={<Plannerheader />} />

        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />

        <Route path="/subcategories" element={<Subcategories />} />

        <Route path="/reception" element={<Reception />} />

        <Route path="/haldi" element={<Haldi />} />

        <Route path="/mantapa" element={<Mantapa />} />

        <Route path="/birthday" element={<Birthday />} />

        <Route path="/naming" element={<Naming />} />

        <Route path="/keeth" element={<Keeth />} />

        <Route path="/comingsoon" element={<Comingsoon />} />

        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </div>
  )
}

export default MainNavigator
