import '../categories/Categories.styles.css'
import { Plannerfooter } from '../plannerfooter/Plannerfooter'
import { Plannerheader } from '../plannerhead/Plannerhead'
import Categoriesimg from './Birthday'

export function Keeth() {
  return (
    <div className="catergories">
      <Plannerheader></Plannerheader>
      <div className="col-sm-12 ">
        <div className="keeth col-12"></div>
        <div className="col-12  catergoriesimg">
          <h1 className="col">𝐂𝐇𝐀𝐏𝐏𝐀𝐑𝐀 / 𝐏𝐀𝐂𝐇𝐀 𝐏𝐀𝐍𝐃𝐀𝐋</h1>

          <div className="container">
            <div className="row  mx-0 firstrow mt-1 g-4 ">
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth1.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth2.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth3.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth4.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth5.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth6.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth7.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth8.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth9.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth10.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth21.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth12.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth13.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth14.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth15.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth16.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth17.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth18.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth19.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/keeth/keeth20.png')}
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
