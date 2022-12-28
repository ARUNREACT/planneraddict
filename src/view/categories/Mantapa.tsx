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
                categoriesimg={require('../../asset/marriage/mantapa/mantapa16.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa17.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa18.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa19.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa20.png')}
              />

              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa2.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa3.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa4.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa5.png')}
              />

              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa6.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa7.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa8.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa9.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa10.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa11.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa12.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa1.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa13.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/mantapa/mantapa14.png')}
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
