import React, { useState } from 'react'
import '../login/Login.styles.css'
import InputField from '../component/textinput/Textinput'

export function Login() {
  return (
    <div className="container-fluid loginbody ">
      <div className="row mx-0">
        <div className="col-sm-6">
          <img
            className="wave"
            src="https://www.recombd.com/self-services/img/wave.png"
          />

          <div className="loginimg">
            <img src="https://www.medindia.net/mob-light/images/login.png" />{' '}
          </div>
        </div>
        <div className="col-sm-6 logincontent d-flex align-items-center justify-content-center">
          <div className="login-content">
            <img
              className="loginuserimg"
              src="https://business.ucr.edu/media/26/download?attachment"
            />
            <p className="title fw-bolder mt-4">LOGIN</p>

            <div className="col-sm-12 ">
              <div className="input-group mt-4">
                <div className="row ">
                  <div className="input-group-addon mt-3 col-2 ">
                    <i className="one bi-envelope-fill"></i>
                  </div>
                  <InputField
                    value={undefined}
                    required={undefined}
                    label=""
                    isReq={true}
                    name={'email'}
                    placeholder={'Enter Your e-mail'}
                    type={'email'}
                    onChange={undefined}
                  />
                </div>
              </div>

              <div className="input-group mt-4">
                <div className="row">
                  <div className="input-group-addon mt-3 col-2 ">
                    <i className="one bi-phone-fill"></i>
                  </div>
                  <InputField
                    value={undefined}
                    required={undefined}
                    label=""
                    isReq={true}
                    name={'number'}
                    placeholder={'Enter Your mobile number'}
                    type={'number'}
                    onChange={undefined}
                  />
                </div>
              </div>
            </div>

            <p className="mt-3">
              {' '}
              <a className="forgot" href="#">
                Forgot Password ?
              </a>
            </p>

            <p>
              {' '}
              <button type="button" className="forgotbtn ">
                <a className="forgotlinkbtn" href="/">
                  Submit
                </a>
              </button>
            </p>

            <p>
              New here?
              <a className="forgot mx-2" href="/signup">
                Sign Up.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
