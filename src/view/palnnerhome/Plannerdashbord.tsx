import '../palnnerhome/Plannerdashboard.styles.css'
import { Plannerfooter } from '../plannerfooter/Plannerfooter'
import { Plannerheader } from '../plannerhead/Plannerhead'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

function Services(props: any) {
  return (
    <div className="col-lg-2">
      <div className="services-card text-break">
        <img
          src={props.serviceimg}
          className="services-card-img "
          alt="Cards Image"
        />
        <p className="card-p col-12 ">{props.servicename}</p>
      </div>
    </div>
  )
}

export function Plannerdashboard() {
  return (
    <div className="container-fluid px-0">
      <Plannerheader />

      <>
        <div className="col-sm-12 mainhead p-4">
          <div className="head"></div>

          <div className="imageinnertxt1 p-sm-5 p-4">
            <img
              className="logo1 img-fluid"
              data-aos="slide-up"
              src={require('../../asset/logo.png')}
            ></img>
            <img
              className="logoname1 img-fluid"
              data-aos="slide-right"
              src={require('../../asset/logoname.png')}
            ></img>
          </div>
        </div>
      </>

      <>
        <div className="textimg" data-aos="fade-up"></div>
        <div className="textimgtext" data-aos="fade-up">
          <h1 className="text-center">๐๐๐๐๐๐๐๐๐๐</h1>
        </div>
        <div className="maincategories bg-light" data-aos="slide-up">
          <div className="col-xl-12 categories bg-light">
            <div className="row mx-0 g-5 justify-content-evenly p-3">
              <a
                className="col-12 col-lg-5 col-md-5 px-0"
                href="/subcategories"
              >
                <div className="col-7 text-center cate1 ">
                  <h3>๐๐๐๐๐๐๐๐</h3>
                  <p>
                    โ๐๐ค๐ ๐ ๐๐ข๐๐  ๐ค๐๐กโ ๐๐ข๐ก ๐ ๐ ๐๐๐๐๐ ๐กโ๐๐ข๐โ๐ก; ๐ก๐ค๐ โ๐๐๐๐ก๐  ๐กโ๐๐ก ๐๐๐๐ก
                    ๐๐  ๐๐๐.โ โ๐โ๐๐ก๐๐ฃ๐๐ ๐๐ข๐ ๐ ๐๐ข๐๐  ๐๐๐ ๐๐๐๐ ๐๐, โ๐๐  ๐๐๐ ๐๐๐๐ ๐๐๐
                    ๐กโ๐ ๐ ๐๐๐.โ
                  </p>
                  <i className="bi bi-arrow-right fs-2"></i>
                </div>
                <div
                  className="col cate2"
                  style={{ backgroundColor: '#E9F7FF' }}
                >
                  <img
                    className="img-responsive"
                    src={require('../../asset/marry1.gif')}
                  ></img>
                </div>
              </a>

              <a className="col-12 col-lg-5 col-md-5 px-0" href="/birthday">
                <div className="col-7 text-center cate1">
                  <h3>๐๐๐๐๐๐๐๐ ๐๐๐๐๐</h3>
                  <p>
                    โ๐ต๐๐๐กโ๐๐๐ฆ๐  ๐๐๐ ๐ ๐๐๐ค ๐ ๐ก๐๐๐ก, ๐ ๐๐๐๐ โ ๐๐๐๐๐๐๐๐๐ ๐๐๐ ๐ ๐ก๐๐๐ ๐ก๐
                    ๐๐ข๐๐ ๐ข๐ ๐๐๐ค ๐๐๐๐๐๐ฃ๐๐๐  ๐ค๐๐กโ ๐๐๐ค ๐๐๐๐๐ ..
                  </p>
                  <i className="bi bi-arrow-right fs-2"></i>
                </div>
                <div className="col cate2 ">
                  <img
                    className="img-responsive "
                    src={require('../../asset/ani1.gif')}
                  ></img>
                </div>
              </a>
            </div>
          </div>
        </div>
      </>

      <div className="banner">
        <div className="bannerimg"></div>
        <div className="bannertext">
          <div data-aos="fade-up">
            <h1 data-aos="fade-up">๐๐ !!!</h1>
            <p data-aos="fade-up">
              THINKING ABOUT PERSONLAZIED HELP FOR YOUR SPECIAL OCCASION ?
            </p>
            <p data-aos="fade-up">
              CHILL, WE'LL BE THERE FOR YOU WIPE YOUR TENSION OUT.
            </p>
            <p data-aos="fade-up">
              WE ARE HERE TO TRANSFORM YOUR DREAM OCCASIONS TO REALITY.
            </p>
            <p data-aos="fade-up">
              WE PROMISE TO GIVE OUR "BEST SERVICE" IN AFFORDABLE PRICE FOR YOU.
            </p>
          </div>
        </div>
      </div>

      <>
        <div className="textimg" data-aos="fade-up"></div>
        <div className="textimgtext" data-aos="fade-up">
          <h1 className="text-center ">๐๐๐ ๐๐๐๐๐๐๐๐ </h1>
        </div>

        <div className="container-fluid bg-white mx-0 px-0  mb-5">
          <div
            className="container bg-white services1 px-0"
            data-aos="slide-up"
          >
            <Services
              serviceimg={
                'https://i.pinimg.com/564x/6a/c2/8d/6ac28d1342af096b2b22891837f683e2.jpg'
              }
              servicename={'BRIDAL MAKEUP'}
            />
            <Services
              serviceimg={
                'https://i.pinimg.com/564x/05/bc/7b/05bc7bbc078c5812c4b4f8d4163b0ca3.jpg'
              }
              servicename={'MENHDI ARTIST'}
            />

            <Services
              serviceimg={
                'https://i.pinimg.com/564x/f9/71/34/f9713496205c88f4d5d2fd5c919301c7.jpg'
              }
              servicename={'TENT'}
            />
            <Services
              serviceimg={
                'https://i.pinimg.com/564x/9c/17/08/9c1708435fb5cf5ff72e84de4061a5f7.jpg'
              }
              servicename={'CATERING'}
            />
            <Services
              serviceimg={require('../../asset/services /photo.png')}
              servicename={'PHOTOGRAPHY'}
            />
            <Services
              serviceimg={
                'https://i.pinimg.com/564x/c5/17/22/c5172269a589c11685ec623b3bf0b2d6.jpg'
              }
              servicename={'CORPORATE EVENT'}
            />
            <Services
              serviceimg={
                'https://www.bax-shop.nl/blog/wp-content/uploads/2019/06/blog_line_arrays.jpg'
              }
              servicename={'SOUND SYSTEM'}
            />

            <Services
              serviceimg={require('../../asset/services /lighting-decoration.png')}
              servicename={'LIGHTING'}
            />
            <Services
              serviceimg={
                'https://emcsolutions.com/wp-content/uploads/2021/03/17-Generator-Sizing_a-edited.jpg'
              }
              servicename={'GENERATOR'}
            />
            <Services
              serviceimg={require('../../asset/services /services10.png')}
              servicename={'GERMAN TENT'}
            />
            <Services
              serviceimg={
                'https://i.pinimg.com/564x/02/a2/0f/02a20f358623bc94240154c098501dfb.jpg'
              }
              servicename={'LED WALL'}
            />
            <Services
              serviceimg={require('../../asset/services /caricature.png')}
              servicename={'CARICATURE, CARTOON'}
            />
            <Services
              serviceimg={
                'http://web.berojgarhindi.com/wp-content/uploads/2022/07/From-Gardens-to-Rollercoasters-3.jpg'
              }
              servicename={'AMUSMENTS'}
            />
            <Services
              serviceimg={require('../../asset/services /exhibition-organising.png')}
              servicename={'EXHIBITION ORGANISING'}
            />

            <Services
              serviceimg={require('../../asset/services /tatoo.png')}
              servicename={'TATOO, MAGICIAN'}
            />

            {/* <Services
                            serviceimg={require('../../asset/services /services12.png')}
                            servicename={'EXHIBITION'}
                        />
                        <Services
                            serviceimg={require('../../asset/services /services13.png')}
                            servicename={'EXHIBITION'}
                        /> */}
          </div>
        </div>
      </>

      <>
        <div className="banner1">
          <div className="banner1img "></div>
          <div className="banner1text pt-5 col-12">
            <div className="banner1textin col-lg-7">
              <h1 data-aos="fade-up">"๐๐๐๐๐ ๐๐๐"</h1>
              <p data-aos="fade-up">
                ๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐๐ .
              </p>
              <p data-aos="fade-up">๐๐'๐๐ ๐๐๐๐๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐ .</p>
              <p data-aos="fade-up">
                "๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐ . "
              </p>
              <p data-aos="fade-up">
                ๐๐'๐๐ ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐ ๐๐๐ "๐๐๐๐ ๐๐๐๐๐๐๐๐" ๐๐ ๐๐๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐
                ๐๐๐ .
              </p>
            </div>
          </div>

          {/* <div className="liquid mt-3" data-aos="zoom-in">
            <img
              className="img-fluid"
              src={require('../../asset/planner-logo.png')}
              alt=""
            />
          </div> */}

          <div className="banner1text col-12">
            <div className="banner1textin1 col-lg-4 col-md-6 col-10">
              <img
                className="img-flui"
                data-aos="slide-up"
                src={require('../../asset/planner-logo.png')}
                alt="logo"
                height="100px"
              />

              <p className="m-2" data-aos="fade-up">
                ๐๐๐๐๐๐
              </p>
              <p className="m-2" data-aos="fade-up">
                ๐๐
              </p>
              <p className="m-2" data-aos="fade-up">
                "๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐"
              </p>
              <p className="m-2" data-aos="fade-up">
                ๐๐๐๐๐ ๐๐๐๐
              </p>
            </div>
          </div>
        </div>
      </>

      <Plannerfooter />
    </div>
  )
}

// <div className="row mx-0 pick g-4">
//                             <div className="col-xl-2 col-6 img-area" data-aos="slide-up" data-aos-duration="1000" >
//                                 {/* <div className=" " > */}
//                                 <img src={require('../../asset/services /services7.jpg')} />
//                                 <div className="img-text">
//                                     <p>LIGHTING</p>
//                                 </div>
//                                 {/* </div> */}
//                             </div>

//                             <div className="col-xl-2 col-6 img-area" data-aos="fade-up" data-aos-duration="2000" >
//                                 {/* <div className=" " data-aos="slide-up" data-aos-duration="2000"> */}
//                                 <img src={require('../../asset/services /services2.jpg')} />
//                                 <div className="img-text">
//                                     <p>TENT</p>

//                                     {/* </div> */}
//                                 </div>
//                             </div>

//                             <div className="col-xl-2 col-6 img-area" data-aos="slide-left" data-aos-duration="3000">
//                                 {/* <div className="" data-aos="slide-left" data-aos-duration="9000"> */}
//                                 <img src={require('../../asset/services /services3.jpeg')} />
//                                 <div className="img-text">
//                                     <p>BRIDAL MAKEUP</p>

//                                     {/* </div> */}
//                                 </div>
//                             </div>

//                             <div className="col-xl-2 col-6 img-area " data-aos="slide-right" data-aos-duration="3000">
//                                 {/* <div className=" " data-aos="slide-right" data-aos-duration="9000"> */}
//                                 <img src={require('../../asset/services /services4.jpg')} />
//                                 <div className="img-text">
//                                     <p>CATERING</p>

//                                     {/* </div> */}
//                                 </div>
//                             </div>

//                             <div className="col-xl-2 col-6 img-area " data-aos="fade-up" data-aos-duration="2000">
//                                 {/* <div className=" " data-aos="slide-up" data-aos-duration="2000"> */}
//                                 <img src={require('../../asset/services /services8.jpeg')} />
//                                 <div className="img-text">
//                                     <p>PHOTOGRAPHY</p>
//                                 </div>
//                                 {/* </div> */}
//                             </div>

//                             <div className="col-xl-2 col-6 img-area " data-aos="fade-up" data-aos-duration="1000">
//                                 {/* <div className=" " data-aos="slide-right" data-aos-duration="9000"> */}
//                                 <img src={require('../../asset/services /services10.png')} />
//                                 <div className="img-text">
//                                     <p>CORPORATE EVENT</p>
//                                 </div>
//                                 {/* </div> */}
//                             </div>

//                             <div className="col-xl-2 col-6 img-area " data-aos="fade-up" data-aos-duration="1000">
//                                 {/* <div className=" " data-aos="slide-up" data-aos-duration="1000"> */}
//                                 <img src={require('../../asset/services /services6.png')} />
//                                 <div className="img-text">
//                                     <p>SOUND SYSTEM</p>

//                                     {/* </div> */}
//                                 </div>
//                             </div>

//                             <div className="col-xl-2 col-6 img-area " data-aos="fade-up" data-aos-duration="2000">
//                                 {/* <div className=" " data-aos="slide-up" data-aos-duration="2000"> */}
//                                 <img src={require('../../asset/services /services5.jpg')} />
//                                 <div className="img-text">
//                                     <p>LED WALL</p>

//                                 </div>
//                                 {/* </div> */}
//                             </div>

//                             <div className="col-xl-2 col-6 img-area" data-aos="side-left" data-aos-duration="3000">
//                                 {/* <div className="" data-aos="slide-up" data-aos-duration="1000"> */}
//                                 {/* <img src={require('../../asset/services /services1.png')} /> */}
//                                 <div className="img-text">
//                                     <p>GENERATOR</p>
//                                 </div>
//                                 {/* </div> */}
//                             </div>

//                             <div className="col-xl-2 col-6 img-area " data-aos="side-right" data-aos-duration="3000">
//                                 {/* <div className=" " data-aos="slide-left" data-aos-duration="9000"> */}
//                                 <img src={require('../../asset/services /services11.png')} />
//                                 <div className="img-text">
//                                     <p>GERMAN TENT</p>
//                                 </div>
//                                 {/* </div> */}
//                             </div>

//                             <div className="col-xl-2 col-6 img-area " data-aos="fade-up" data-aos-duration="2000">
//                                 {/* <div className=" " data-aos="slide-left" data-aos-duration="9000"> */}
//                                 <img src={require('../../asset/services /services12.png')} />
//                                 <div className="img-text">
//                                     <p>EXHIBITION</p>
//                                 </div>
//                                 {/* </div> */}
//                             </div>

//                             <div className="col-xl-2 col-6 img-area " data-aos="fade-up" data-aos-duration="1000">
//                                 {/* <div className=" " data-aos="slide-left" data-aos-duration="9000"> */}
//                                 <img src={require('../../asset/services /services13.png')} />
//                                 <div className="img-text">
//                                     <p>EXHIBITION</p>
//                                 </div>
//                                 {/* </div> */}
//                             </div>

//                         </div>
