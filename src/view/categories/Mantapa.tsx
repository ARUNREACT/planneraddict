import '../categories/Categories.styles.css'
import { Plannerfooter } from '../plannerfooter/Plannerfooter'
import { Plannerheader } from '../plannerhead/Plannerhead'
import Categoriesimg from './Birthday'
export function Mantapa() {
  return (
    <div className="catergories">
      <Plannerheader></Plannerheader>
      <div className="col-sm-12 ">
        <div className="mantapa col-12 "></div>
        <div className="col-12  catergoriesimg">
          <h1 className="col">𝐌𝐀𝐍𝐓𝐀𝐏𝐀</h1>

          <div className="container">
            <div className="row  mx-0 firstrow mt-1 g-4 ">
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa.webp')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa2.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa3.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa4.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa5.jpeg')}
              />

              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa6.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa7.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa8.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa9.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa10.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa11.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa12.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa1.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa13.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa14.jpeg')}
              />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      <Plannerfooter></Plannerfooter>
    </div>
  )
}
