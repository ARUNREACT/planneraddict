import '../aboutus/About.styles.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'
import { Plannerheader } from '../plannerhead/Plannerhead'
import { Plannerfooter } from '../plannerfooter/Plannerfooter'

export function About() {
  return (
    <div className="about">
      <Plannerheader></Plannerheader>
      <div className="aboutus-head-img">
        {/* <div className='aboutimg img-responsiv p-5 bg-danger'> */}
        {/* <img className='' src='https://www.womensbyte.com/wp-content/uploads/2021/01/Jab-We-Met-Bollywood-Style-Theme.jpg'></img> */}

        <div className="aboutus-img"></div>
        <div className="aboutustext col-5">
          <h1 className="col">𝐀𝐁𝐎𝐔𝐓 𝐔𝐒</h1>
        </div>
        {/* </div> */}
      </div>

      <div className="container mt-3 text-center p-1">
        <h1 className="text-dark">𝐏𝐋𝐀𝐍𝐍𝐄𝐑 𝐀𝐃𝐃𝐈𝐂𝐓</h1>
        <p className="mt-4">
          𝐈𝐧𝐝𝐢𝐚'𝐬 𝐟𝐚𝐯𝐨𝐮𝐫𝐢𝐭𝐞 𝐰𝐞𝐝𝐝𝐢𝐧𝐠 𝐩𝐥𝐚𝐧𝐧𝐢𝐧𝐠 𝐰𝐞𝐛𝐬𝐢𝐭𝐞 & 𝐚𝐩𝐩 𝐰𝐢𝐭𝐡 𝐨𝐯𝐞𝐫 𝟏.𝟓 𝐦𝐢𝐥𝐥𝐨𝐧
          𝐦𝐨𝐧𝐭𝐡𝐥𝐲 𝐝𝐞𝐝𝐢𝐜𝐚𝐭𝐞𝐝 𝐮𝐬𝐞𝐫𝐬. ​𝐖𝐞𝐝𝐌𝐞𝐆𝐨𝐨𝐝 𝐢𝐬​ 𝐚 ​𝐬𝐰𝐚𝐧𝐤𝐲 𝐚𝐥𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐯𝐞 𝐭𝐨 𝐭𝐡𝐞
          𝐨𝐮𝐭𝐝𝐚𝐭𝐞𝐝 𝐰𝐞𝐝𝐝𝐢𝐧𝐠 𝐩𝐥𝐚𝐧𝐧𝐢𝐧𝐠 𝐩𝐫𝐨𝐜𝐞𝐬𝐬 . 𝐀 𝐨𝐧𝐞-𝐬𝐭𝐨𝐩-𝐬𝐡𝐨𝐩 𝐟𝐨𝐫 𝐚𝐥𝐥 𝐭𝐡𝐢𝐧𝐠𝐬
          𝐰𝐞𝐝𝐝𝐢𝐧𝐠𝐬, 𝐲𝐨𝐮 𝐜𝐚𝐧 𝐟𝐢𝐧𝐝 𝐢𝐧𝐬𝐩𝐢𝐫𝐚𝐭𝐢𝐨​​𝐧​, ​𝐢𝐝𝐞𝐚𝐬 ​𝐚𝐧𝐝 𝐯𝐞𝐧𝐝𝐨𝐫𝐬 𝐰𝐢𝐭𝐡𝐢𝐧​
          𝐲𝐨𝐮𝐫​ 𝐛𝐮𝐝𝐠𝐞𝐭​. 𝐖𝐞𝐝𝐌𝐞𝐆𝐨𝐨𝐝 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐭𝐫𝐮𝐬𝐭𝐞𝐝 𝐛𝐲 𝐨𝐯𝐞𝐫 𝟐​​ 𝐦​𝐢𝐥𝐥𝐢𝐨​𝐧 𝐛𝐫𝐢𝐝𝐞𝐬
          & 𝐠𝐫𝐨𝐨𝐦𝐬​ 𝐚𝐥𝐥 𝐨𝐯𝐞𝐫 𝐭𝐡𝐞 𝐰𝐨𝐫𝐥𝐝​ 𝐭𝐨 𝐩𝐥𝐚𝐧 𝐭𝐡𝐞𝐢𝐫 𝐛𝐢𝐠 𝐝𝐚𝐲.​ 𝐒𝐨 𝐬𝐢𝐭 𝐛𝐚𝐜𝐤, 𝐥𝐨𝐠
          𝐨𝐧 𝐭𝐨 𝐖𝐞𝐝𝐌𝐞𝐆𝐨𝐨𝐝, 𝐚𝐧𝐝 ​𝐩𝐥𝐚𝐧 𝐭𝐡𝐞 𝐰𝐞𝐝𝐝𝐢𝐧𝐠 𝐨𝐟 𝐲𝐨𝐮𝐫 𝐝𝐫𝐞𝐚𝐦𝐬 ​!.
        </p>
      </div>

      <div className="pp mt-5">
        <Swiper
          data-aos="slide-up"
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 950,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img
              // src={require('../../asset/marriage/reception/level1/receptionl7.jpeg')}
              src={require('http://localhost:3000/static/media/logo.fafea145c165795b92df.png')}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../asset/marriage/reception/level1/receptionl8.jpeg')}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../asset/marriage/reception/level1/receptionl9.jpeg')}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../asset/marriage/reception/level1/receptionl10.jpeg')}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../asset/marriage/reception/level1/receptionl11.jpeg')}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../asset/marriage/reception/level1/receptionl13.jpeg')}
              alt="img"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="row mx-0 mt-5 align-items-center ">
        <div className="col-lg-6 col-md-12 text-center ">
          <h4 className="fw-bold">Make Planning decisions</h4>

          <p className="p-2" data-aos="slide-up">
            We provide event management services to companies from different
            industries.
          </p>

          <p className="p-2" data-aos="slide-up">
            We have a vast vendor network of Hotels and partners who help us
            provide the best and most cost effective event services to our
            clients.
          </p>

          <p className="p-2" data-aos="slide-up">
            {' '}
            Our focus is to align your event objectives with modern concepts to
            deliver creative and engaging event experiences to your attendees.
          </p>

          <h5 className="mt-3 p-2 fw-bold" data-aos="slide-up">
            OUR EVENT MANAGEMENT PHILOSOPHY
          </h5>
          <p className="p-2" data-aos="slide-up">
            To make our clients event planning processes simple by offering
            reliable and impactful services.The experience our clients get from
            working with us is always as important as the experience we deliver
            to the events audiences.
          </p>

          <h5 className="mt-3 p-2 fw-bold" data-aos="slide-up">
            OUR EVENT MANAGEMENT STRATEGY{' '}
          </h5>
          <p className="p-2" data-aos="slide-up">
            We identify key focus areas for every event we plan and consult you
            about what works best and what can help you derive maximum return on
            your investment.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 fourpics">
          <div className="row mx-0">
            <div className="col-6">
              <img
                src={require('../../asset/marriage/haldi/haldi1.jpeg')}
                alt="img"
              />
            </div>
            <div className="col-6">
              <img
                src={require('../../asset/marriage/haldi/haldi2.jpeg')}
                alt="img"
              />
            </div>
          </div>

          <div className="row mx-0 mt-3" data-aos="slide-up ">
            <div className=" col-6">
              <img
                src={require('../../asset/marriage/reception/level 2/receptionl26.jpeg')}
                alt="img"
              />
            </div>
            <div className="col-6">
              <img
                src={require('../../asset/marriage/reception/level 2/receptionl29.jpeg')}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>

      <Plannerfooter></Plannerfooter>
    </div>
  )
}
