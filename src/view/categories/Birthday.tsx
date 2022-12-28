import '../categories/Categories.styles.css'
import { Plannerfooter } from '../plannerfooter/Plannerfooter'
import { Plannerheader } from '../plannerhead/Plannerhead'

function Categoriesimg(props: any) {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-5" data-aos="fade-up">
      <img src={props.categoriesimg} alt="Birthday-img" />
    </div>
  )
}
export default Categoriesimg

export function Birthday() {
  return (
    <div className="catergories">
      <Plannerheader></Plannerheader>
      <div className="col-sm-12 ">
        <div className="oo col-12 "></div>
        <div className="col-12  catergoriesimg">
          <h1 className="col">𝗕𝗜𝗥𝗧𝗛𝗗𝗔𝗬 𝗘𝗩𝗘𝗡𝗧</h1>

          <div className="container">
            <div className="row  mx-0 firstrow mt-1 g-4 ">
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth16.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth17.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth18.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth19.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth20.png')}
              />

              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth6.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth7.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth8.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth9.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth10.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth1.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth2.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth3.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth4.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth5.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth11.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth12.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth13.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth14.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/birthday/birth15.png')}
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
