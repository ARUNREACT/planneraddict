import '../categories/Categories.styles.css'
import { Plannerfooter } from '../plannerfooter/Plannerfooter'
import { Plannerheader } from '../plannerhead/Plannerhead'
import Categoriesimg from './Birthday'
export function Haldi() {
  return (
    <div className="catergories">
      <Plannerheader></Plannerheader>
      <div className="col-sm-12 ">
        <div className="haldi col-12 "></div>
        <div className="col-12  catergoriesimg">
          <h1 className="col">【 ᕼᗩᒪᗪI 】</h1>

          <div className="container">
            <div className="row  mx-0 firstrow mt-1 g-4 ">
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi1.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi2.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi3.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi4.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi5.png')}
              />

              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi6.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi7.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi8.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi9.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi10.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi11.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi12.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi13.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi14.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi15.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi16.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi17.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi18.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi19.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi20.png')}
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
