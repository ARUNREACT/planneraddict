import '../palnnerhome/Plannerdashboard.styles.css'
import { Plannerfooter } from '../plannerfooter/Plannerfooter'
import { Plannerheader } from '../plannerhead/Plannerhead'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

function Services(props: any) {
  return (
    <div className="card__collection clear-fix col-lg-2">
      <div className="cards cards--two col-lg-12 ">
        <img src={props.serviceimg} className="card-img" alt="Cards Image" />
        <span className="cards--two__rect"></span>
        <p>{props.servicename}</p>
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
              src={require('../../asset/logo.png')}
            ></img>
            <img
              className="logoname1 img-fluid"
              src={require('../../asset/logoname.png')}
            ></img>
          </div>
        </div>
      </>

      <>
        <div className="textimg" data-aos="fade-up"></div>
        <div className="textimgtext" data-aos="fade-up">
          <h1 className="text-center">𝐂𝐀𝐓𝐄𝐆𝐎𝐑𝐈𝐄𝐒</h1>
        </div>
        <div className="maincategories bg-light" data-aos="slide-up">
          <div className="col-xl-12 categories bg-light">
            <div className="row mx-0 g-5 justify-content-evenly p-3">
              <a
                className="col-12 col-lg-5 col-md-5 px-0"
                href="/subcategories"
              >
                <div className="col-7 text-center cate1 ">
                  <h3>𝐌𝐀𝐑𝐑𝐈𝐀𝐆𝐄</h3>
                  <p>
                    “𝑇𝑤𝑜 𝑠𝑜𝑢𝑙𝑠 𝑤𝑖𝑡ℎ 𝑏𝑢𝑡 𝑎 𝑠𝑖𝑛𝑔𝑙𝑒 𝑡ℎ𝑜𝑢𝑔ℎ𝑡; 𝑡𝑤𝑜 ℎ𝑒𝑎𝑟𝑡𝑠 𝑡ℎ𝑎𝑡 𝑏𝑒𝑎𝑡
                    𝑎𝑠 𝑜𝑛𝑒.” “𝑊ℎ𝑎𝑡𝑒𝑣𝑒𝑟 𝑜𝑢𝑟 𝑠𝑜𝑢𝑙𝑠 𝑎𝑟𝑒 𝑚𝑎𝑑𝑒 𝑜𝑓, ℎ𝑖𝑠 𝑎𝑛𝑑 𝑚𝑖𝑛𝑒 𝑎𝑟𝑒
                    𝑡ℎ𝑒 𝑠𝑎𝑚𝑒.”
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
                  <h3>𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘 𝐄𝐕𝐄𝐍𝐓</h3>
                  <p>
                    “𝐵𝑖𝑟𝑡ℎ𝑑𝑎𝑦𝑠 𝑎𝑟𝑒 𝑎 𝑛𝑒𝑤 𝑠𝑡𝑎𝑟𝑡, 𝑎 𝑓𝑟𝑒𝑠ℎ 𝑏𝑒𝑔𝑖𝑛𝑛𝑖𝑛𝑔 𝑎𝑛𝑑 𝑎 𝑡𝑖𝑚𝑒 𝑡𝑜
                    𝑝𝑢𝑟𝑠𝑢𝑒 𝑛𝑒𝑤 𝑒𝑛𝑑𝑒𝑎𝑣𝑜𝑟𝑠 𝑤𝑖𝑡ℎ 𝑛𝑒𝑤 𝑔𝑜𝑎𝑙𝑠..
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
            <h1 data-aos="fade-up">𝐇𝐈 !!!</h1>
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
          <h1 className="text-center ">𝐎𝐔𝐑 𝐒𝐄𝐑𝐕𝐈𝐂𝐄𝐒 </h1>
        </div>
        <div className="container-fluid bg-white mx-0 px-0">
          <div className="container bg-light services1 px-0">
            <Services
              serviceimg={require('../../asset/services /services3.png')}
              servicename={'BRIDAL MAKEUP'}
            />
            <Services
              serviceimg={require('../../asset/services /services7.png')}
              servicename={'LED WALL'}
            />
            <Services
              serviceimg={require('../../asset/services /services2.png')}
              servicename={'TENT'}
            />
            <Services
              serviceimg={require('../../asset/services /services4.png')}
              servicename={'CATERING'}
            />
            <Services
              serviceimg={require('../../asset/services /services8.png')}
              servicename={'PHOTOGRAPHY'}
            />
            <Services
              serviceimg={require('../../asset/services /services10.png')}
              servicename={'CORPORATE EVENT'}
            />
            <Services
              serviceimg={require('../../asset/services /services6.png')}
              servicename={'SOUND SYSTEM'}
            />
            <Services
              serviceimg={require('../../asset/services /services5.png')}
              servicename={'LIGHTING'}
            />
            <Services
              serviceimg={require('../../asset/services /services1.png')}
              servicename={'GENERATOR'}
            />
            <Services
              serviceimg={require('../../asset/services /services11.png')}
              servicename={'GERMAN TENT'}
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
          <div className="banner1img"></div>
          <div className="banner1text col-12">
            <div className="banner1textin col-lg-7 ">
              <h1 data-aos="fade-up ">"𝐇𝐔𝐑𝐑𝐘 𝐍𝐎𝐖"</h1>
              <p data-aos="fade-up">
                𝐁𝐎𝐎𝐊 𝐘𝐎𝐔𝐑 𝐒𝐋𝐎𝐓𝐒 𝐓𝐇𝐑𝐄𝐄 𝐌𝐎𝐍𝐓𝐇𝐒 𝐁𝐄𝐅𝐎𝐑𝐄 𝐅𝐈𝐑𝐒𝐓 𝐂𝐎𝐌𝐄 𝐅𝐈𝐑𝐒𝐓 𝐏𝐑𝐈𝐎𝐑𝐈𝐓𝐘 .
              </p>
              <p data-aos="fade-up">𝐖𝐄'𝐑𝐄 𝐒𝐏𝐄𝐂𝐈𝐀𝐋𝐈𝐙𝐄𝐃 𝐈𝐍 𝐒𝐄𝐓𝐔𝐏𝐒 .</p>
              <p data-aos="fade-up">
                "𝐌𝐀𝐊𝐄 𝐘𝐎𝐔𝐑 𝐒𝐏𝐄𝐂𝐈𝐀𝐋 𝐌𝐎𝐌𝐄𝐍𝐓𝐒 𝐌𝐎𝐑𝐄 𝐒𝐏𝐄𝐂𝐈𝐀𝐋 𝐖𝐈𝐓𝐇 𝐔𝐒 . "
              </p>
              <p data-aos="fade-up">
                𝐖𝐄'𝐑𝐄 𝐏𝐑𝐎𝐌𝐈𝐒𝐄 𝐓𝐎 𝐆𝐈𝐕𝐄 𝐎𝐔𝐑 "𝐁𝐄𝐒𝐓 𝐒𝐄𝐑𝐕𝐈𝐂𝐄𝐒" 𝐈𝐍 𝐎𝐅𝐅𝐑𝐎𝐀𝐃𝐀𝐁𝐋𝐄 𝐏𝐑𝐈𝐂𝐄
                𝐘𝐎𝐔 .
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
                src={require('../../asset/planner-logo.png')}
                alt=""
                height="100px"
              />

              <p data-aos="fade-up">𝐁𝐄𝐇𝐀𝐋𝐅</p>
              <p data-aos="fade-up">𝐎𝐅</p>
              <p data-aos="fade-up">"𝐑𝐎𝐘𝐀𝐋 𝐒𝐎𝐔𝐍𝐃 𝐒𝐘𝐒𝐓𝐄𝐌"</p>
              <p data-aos="fade-up">𝐒𝐈𝐍𝐂𝐄 𝟏𝟗𝟕𝟔</p>
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
