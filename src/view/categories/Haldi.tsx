import '../categories/Categories.styles.css'
import { Plannerfooter } from '../plannerfooter/Plannerfooter'
import { Plannerheader } from '../plannerhead/Plannerhead'
import Categoriesimg from './Birthday'
export function Haldi() {
  return (
    <div className="catergories">
      <Plannerheader></Plannerheader>
      <div className="col-sm-12 ">
        <div className="haldi col-12 bg-danger"></div>
        <div className="col-12  catergoriesimg">
          <h1 className="col">【 ᕼᗩᒪᗪI 】</h1>

          <div className="container">
            <div className="row  mx-0 firstrow mt-1 g-4 ">
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi1.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi2.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi3.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi4.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi5.jpeg')}
              />

              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi6.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi7.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi8.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi9.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi10.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi11.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi12.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi13.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi14.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi15.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi16.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi17.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi18.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi19.jpeg')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/marriage/haldi/haldi20.jpeg')}
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
