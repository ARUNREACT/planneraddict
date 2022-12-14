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
        <div className="aboutustext col-md-5 col-12">
          <h1 className="col" data-aos="slide-down">
            ๐๐๐๐๐ ๐๐
          </h1>
        </div>
        {/* </div> */}
      </div>

      <div className="container mt-3 text-center p-1">
        <h1 style={{ color: '#612f61' }} data-aos="slide-right">
          ๐๐๐๐๐๐๐ ๐๐๐๐๐๐
        </h1>
        <p className="mt-lg-4" data-aos="slide-up">
          ๐๐ง๐๐ข๐'๐ฌ ๐๐๐ฏ๐จ๐ฎ๐ซ๐ข๐ญ๐ ๐ฐ๐๐๐๐ข๐ง๐  ๐ฉ๐ฅ๐๐ง๐ง๐ข๐ง๐  ๐ฐ๐๐๐ฌ๐ข๐ญ๐ & ๐๐ฉ๐ฉ ๐ฐ๐ข๐ญ๐ก ๐จ๐ฏ๐๐ซ ๐.๐ ๐ฆ๐ข๐ฅ๐ฅ๐จ๐ง
          ๐ฆ๐จ๐ง๐ญ๐ก๐ฅ๐ฒ ๐๐๐๐ข๐๐๐ญ๐๐ ๐ฎ๐ฌ๐๐ซ๐ฌ. ๐๐ฅ๐๐ง๐ง๐๐ซ ๐๐๐๐ข๐๐ญ ๐ข๐ฌโ ๐ โ๐ฌ๐ฐ๐๐ง๐ค๐ฒ ๐๐ฅ๐ญ๐๐ซ๐ง๐๐ญ๐ข๐ฏ๐ ๐ญ๐จ
          ๐ญ๐ก๐ ๐จ๐ฎ๐ญ๐๐๐ญ๐๐ ๐ฐ๐๐๐๐ข๐ง๐  ๐ฉ๐ฅ๐๐ง๐ง๐ข๐ง๐  ๐ฉ๐ซ๐จ๐๐๐ฌ๐ฌ . ๐ ๐จ๐ง๐-๐ฌ๐ญ๐จ๐ฉ-๐ฌ๐ก๐จ๐ฉ ๐๐จ๐ซ ๐๐ฅ๐ฅ ๐ญ๐ก๐ข๐ง๐ ๐ฌ
          ๐ฐ๐๐๐๐ข๐ง๐ ๐ฌ, ๐ฒ๐จ๐ฎ ๐๐๐ง ๐๐ข๐ง๐ ๐ข๐ง๐ฌ๐ฉ๐ข๐ซ๐๐ญ๐ข๐จโโ๐งโ, โ๐ข๐๐๐๐ฌ โ๐๐ง๐ ๐ฏ๐๐ง๐๐จ๐ซ๐ฌ ๐ฐ๐ข๐ญ๐ก๐ข๐งโ
          ๐ฒ๐จ๐ฎ๐ซโ ๐๐ฎ๐๐ ๐๐ญโ. ๐๐ฅ๐๐ง๐ง๐๐ซ ๐๐๐๐ข๐๐ญ ๐ก๐๐ฌ ๐๐๐๐ง ๐ญ๐ซ๐ฎ๐ฌ๐ญ๐๐ ๐๐ฒ ๐จ๐ฏ๐๐ซ ๐โโ ๐ฆโ๐ข๐ฅ๐ฅ๐ข๐จโ๐ง
          ๐๐ซ๐ข๐๐๐ฌ & ๐ ๐ซ๐จ๐จ๐ฆ๐ฌโ ๐๐ฅ๐ฅ ๐จ๐ฏ๐๐ซ ๐ญ๐ก๐ ๐ฐ๐จ๐ซ๐ฅ๐โ ๐ญ๐จ ๐ฉ๐ฅ๐๐ง ๐ญ๐ก๐๐ข๐ซ ๐๐ข๐  ๐๐๐ฒ.โ ๐๐จ ๐ฌ๐ข๐ญ
          ๐๐๐๐ค, ๐ฅ๐จ๐  ๐จ๐ง ๐ญ๐จ ๐๐ฅ๐๐ง๐ง๐๐ซ ๐๐๐๐ข๐๐ญ, ๐๐ง๐ โ๐ฉ๐ฅ๐๐ง ๐ญ๐ก๐ ๐ฐ๐๐๐๐ข๐ง๐  ๐จ๐ ๐ฒ๐จ๐ฎ๐ซ ๐๐ซ๐๐๐ฆ๐ฌ
          โ!.
        </p>
      </div>

      <div className="pp mt-lg-5 mt-2" data-aos="zoom-in">
        <Swiper
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
              src={require('../../asset/marriage/reception/level1/receptionl7.png')}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../asset/marriage/reception/level1/receptionl8.png')}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../asset/marriage/reception/level1/receptionl9.png')}
              alt="img"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={require('../../asset/marriage/reception/level1/receptionl13.png')}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../asset/marriage/reception/level1/receptionl10.png')}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../../asset/marriage/reception/level1/receptionl11.png')}
              alt="img"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="row mx-0 mt-5 align-items-center four-pics-content">
        <div className="col-lg-6 col-md-12  text-center ">
          <h5>๐๐๐ค๐ ๐๐ฅ๐๐ง๐ง๐ข๐ง๐  ๐๐๐๐ข๐ฌ๐ข๐จ๐ง๐ฌ</h5>

          <p className="px-lg-4" data-aos="slide-up">
            We provide event management services to companies from different
            industries.
          </p>

          <p className="px-lg-4" data-aos="slide-up">
            We have a vast vendor network of Hotels and partners who help us
            provide the best and most cost effective event services to our
            clients.
          </p>

          <p className="px-lg-4" data-aos="slide-up">
            Our focus is to align your event objectives with modern concepts to
            deliver creative and engaging event experiences to your attendees.
          </p>

          <h5 className="mt-3 p-2" data-aos="slide-up">
            ๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐๐
          </h5>
          <p className="px-lg-4" data-aos="slide-up">
            To make our clients event planning processes simple by offering
            reliable and impactful services.The experience our clients get from
            working with us is always as important as the experience we deliver
            to the events audiences.
          </p>

          <h5 className="mt-3 p-2" data-aos="slide-up">
            ๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐
          </h5>
          <p className="px-lg-4" data-aos="slide-up">
            We identify key focus areas for every event we plan and consult you
            about what works best and what can help you derive maximum return on
            your investment.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 fourpics">
          <div className="row mx-0">
            <div className="col-6 col-lg-6 col-md-4">
              <img
                data-aos="slide-up"
                src={require('../../asset/marriage/haldi/haldi1.png')}
                alt="img"
              />
            </div>
            <div className="col-6 col-lg-6 col-md-4">
              <img
                data-aos="slide-up"
                src={require('../../asset/marriage/haldi/haldi8.png')}
                alt="img"
              />
            </div>
          </div>

          <div className="row mx-0 mt-3" data-aos="slide-up ">
            <div className=" col-6 col-lg-6 col-md-4">
              <img
                data-aos="slide-up"
                src={require('../../asset/marriage/reception/level 2/receptionl26.png')}
                alt="img"
              />
            </div>
            <div className="col-6 col-lg-6 col-md-4">
              <img
                data-aos="slide-up"
                src={require('../../asset/marriage/reception/level 2/receptionl29.png')}
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
