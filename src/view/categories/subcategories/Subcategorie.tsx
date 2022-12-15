import '../subcategories/Subcategories.styles.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Plannerfooter } from '../../plannerfooter/Plannerfooter'
import { Plannerheader } from '../../plannerhead/Plannerhead'

export function Subcategories() {
  return (
    <div className="container-fluid px-0">
      <Plannerheader />

      <div className="mainfluid p-3 ">
        <div className="subcatergories"></div>

        <div className="fluid col-sm-8 col-12 p-3">
          <a href="/haldi">
            <div className="card ">
              <div className="imgBx">
                <img
                  alt="images"
                  src={require('../../../asset/marriage/haldi/haldi16.png')}
                />
              </div>

              <h6>HALDI DECORATION</h6>
              <i className="bi bi-arrow-right fs-3 text-center mt-4"></i>

              <div className="content">
                <p>
                  “Long have you waited for this very moment. It’s such a joy to
                  be celebrating your wedding with you! “
                </p>
              </div>
            </div>
          </a>

          <a href="/reception">
            <div className=" card">
              <div className="imgBx">
                <img
                  alt="images"
                  src={require('../../../asset/marriage/reception/level1/receptionl2.png')}
                />
              </div>
              <h6>RECEPTION</h6>
              <i className="bi bi-arrow-right fs-3 text-center mt-4"></i>

              <div className="content">
                <p>
                  “If we look at the world with a love of life, the world will
                  reveal its beauty to us.”
                </p>
              </div>
            </div>
          </a>

          <a href="/mantapa">
            <div className="card">
              <div className="imgBx">
                <img
                  alt="images"
                  src={require('../../../asset/marriage/mantapa/mantapa5.png')}
                />
              </div>
              <h6>MANTAPA</h6>
              <i className="bi bi-arrow-right fs-3 text-center mt-4"></i>

              <div className="content">
                <p>
                  This is a sacred thread. This is essential for my long life. I
                  tie this around your neck, May you live happily for a hundred
                  years.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div style={{ marginTop: '0px' }}>
        <Plannerfooter />
      </div>
    </div>
  )
}
