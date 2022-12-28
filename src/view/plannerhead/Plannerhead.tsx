import '../plannerhead/Plannerhead.styles.css'
import { useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

export function Plannerheader() {
  const [showAnimated, setShowAnimated] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src={require('../../asset/logo.png')}></img>
          <img
            className="logoname"
            src={require('../../asset/logoname.png')}
          ></img>
        </a>
        <button
          onClick={() => setShowAnimated(!showAnimated)}
          className="navbar-toggler"
          style={{ color: 'green' }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-ico">
            <div className={`animated-icon1 ${showAnimated && 'open'}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </span>
        </button>
        <div className="collapse  navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item  borderYtoX ">
              <a className="nav-link " href="/">
                𝐇𝐎𝐌𝐄
              </a>
            </li>

            <li className="nav-item borderYtoX ">
              <a className="nav-link" href="/about">
                𝐀𝐁𝐎𝐔𝐓 𝐔𝐒
              </a>
            </li>

            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-current="page"
                href="#"
              >
                𝐂𝐀𝐓𝐄𝐆𝐎𝐑𝐈𝐄𝐒
              </a>

              <ul
                className="dropdown-menu p-0"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a href="/birthday" className="dropdown-item">
                    BIRTHDAY EVENT
                  </a>
                </li>

                <li>
                  <a href="/naming" className="dropdown-item">
                    NAMING CEREMONY
                  </a>
                </li>
                <li>
                  <a href="/keeth" className="dropdown-item text-wrap">
                    CHAPPARA / PACHA PANDAL
                  </a>
                </li>

                <li>
                  <a href="#" className="dropdown-item">
                    HOUSE WARMING
                  </a>
                </li>
                <li className="dropdown-submenu p-0">
                  <a className="dropdown-item dropdown-toggle">MARRIAGE</a>
                  <ul className="dropdown-menu p-0">
                    <li>
                      <a className="dropdown-item" href="/haldi">
                        HALDI DECORATION
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/reception">
                        RECEPTION
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/mantapa">
                        MANTAPA
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item   borderYtoX">
              <a className="nav-link" href="/contactus">
                𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐔𝐒
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
