import '../categories/Categories.styles.css'
import { Plannerfooter } from '../plannerfooter/Plannerfooter'
import { Plannerheader } from '../plannerhead/Plannerhead'
import Categoriesimg from './Birthday'

export function Naming() {
  return (
    <div className="catergories">
      <Plannerheader></Plannerheader>
      <div className="col-sm-12 ">
        <div className="naming col-12"></div>
        <div className="col-12  catergoriesimg">
          <h1 className="col">𝐍𝐀𝐌𝐈𝐍𝐆 𝐂𝐄𝐑𝐄𝐌𝐎𝐍𝐘</h1>

          <div className="container">
            <div className="row  mx-0 firstrow mt-1 g-4 ">
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony1.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony2.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony3.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony4.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony5.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony6.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony7.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony8.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony9.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony10.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony11.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony12.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony13.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony14.png')}
              />
              <Categoriesimg
                categoriesimg={require('../../asset/naming-cermony/naming-cermony15.png')}
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
