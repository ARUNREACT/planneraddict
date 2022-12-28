import '../plannerfooter/Plannerfooter.styles.css'

export function Plannerfooter() {
  return (
    <div className="twelve col-sm-12 " data-aos="zoom-in">
      <div className="row foot px-0 mx-0">
        <div className="footimg col-sm-2  d-flex justify-content-center">
          <div>
            <a href="/">
              <img
                src={require('../../asset/planner-logo.png')}
                alt="planner logo"
                className="img-fluid"
              />
            </a>
          </div>
        </div>

        <div className="foot1 col-sm-4">
          <div className="row ">
            <div className="col-7 general ">
              <div className="  justify-content-center">
                <p className="foothead">General</p>
                <a href="/about">
                  <p className="foothead1">
                    <span>About us</span>
                  </p>
                </a>
                <a href="/categories">
                  <p>
                    <span>Categories</span>
                  </p>
                </a>
                <a href="/comingsoon">
                  <p>
                    <span>Events</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-5 connect ">
              <p className="foothead">Connect</p>

              <a href="/contactus">
                <p className="foothead1">
                  <span>Contact us</span>
                </p>
              </a>
              <a href="/comingsoon">
                <p>
                  <span>Careers</span>
                </p>
              </a>
              <a href="/comingsoon">
                <p>
                  <span>Blog</span>
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="foot1 col-sm-3 ">
          <div className="row">
            <div className="col-7 legal ">
              <p className="foothead">Legal</p>
              <a href="/termsconditions">
                <p className="foothead1">
                  <span>Terms & Conditions</span>
                </p>
              </a>
              <a href="/privacypolicy">
                <p>
                  <span>Privacy Policy</span>
                </p>
              </a>
              {/* <a href="/contactus"><p>Grievance Policy</p></a> */}
            </div>
          </div>
        </div>

        <div className="foot1 col-sm-2">
          <div className="col text-center">
            <p className="foothead">Follow us</p>
            {/* <button className="footbutton">DOWNLOAD NOW</button> */}
          </div>
          <div className="col">
            <div className="row mt-3">
              <ul className="footer-icon">
                <li>
                  <a
                    target="blank"
                    href="https://www.instagram.com/planneraddict.in/?hl=en"
                  >
                    <i className="fa fa-instagram instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://www.facebook.com/Planneraddict/"
                  >
                    <i className="fa">&#xf082;</i>
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://mobile.twitter.com/planneraddict_"
                  >
                    <i className="fa fa-twitter twitter"></i>
                  </a>
                </li>

                <li>
                  <a target="blank" href="https://wa.me/935338558">
                    <i className="fa fa-whatsapp  whatsup"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <a
            href="#1"
            className="col-sm-11 d-flex justify-content-center mt-4 mx-1"
            style={{ fontWeight: 'lighter', color: 'white', fontSize: '14px' }}
          >
            <p>©2022, All rights reserved</p>
          </a>
        </div>
      </div>
    </div>
  )
}
