import '../cart/Cart.styles.css'
import emailjs from '@emailjs/browser';
// import emailjs from "emailjs-com";
import { useRef } from 'react';
import { Plannerheader } from '../plannerhead/Plannerhead';
import { Plannerfooter } from '../plannerfooter/Plannerfooter';
// import './About.js'
// import { Plannerfooter } from '../plannerfooter/Plannerfooter'
// import { Plannerheader } from '../plannerhead/Plannerhead'




export const Cart = () => {
  // const form = useRef(null);


  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('service_msm9yqs','template_fgvet7f',form.current,'lVN58UDor8BkHIq3s')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  //   e.target.reset();
  //   alert('Thanks For Submmiting')


  // };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j6u8tkl', 'template_yt2fdve', form.current, 'lVN58UDor8BkHIq3s')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };




  return (

    <div className='vh-100'>

      <Plannerheader />

      <div className='col-12 '>
        <form ref={form} className="contact-form " onSubmit={sendEmail}>

          <div className="carthead"></div>
          <div className="col-xl-7 col-12 segment"> </div>

          <div className='segment1 col-xl-7 col-12'>
            <h1>𝐖𝐫𝐢𝐭𝐞 𝐭𝐨 𝐮𝐬!</h1>
            <h5 className='col-xl-12 col-11 text-center'>𝐖𝐞 𝐰𝐨𝐮𝐥𝐝 𝐥𝐨𝐯𝐞 𝐭𝐨 𝐡𝐞𝐚𝐫 𝐟𝐫𝐨𝐦 𝐲𝐨𝐮! 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐮𝐬 𝐝𝐢𝐫𝐞𝐜𝐭𝐥𝐲 𝐛𝐲 𝐟𝐢𝐥𝐥𝐢𝐧𝐠 𝐭𝐡𝐢𝐬 𝐟𝐨𝐫𝐦.</h5>
            <input className='col-xl-6 col-11' type="text" name="name" placeholder="Name" required />
            <input className='col-xl-6 col-11' type="email" name="email" placeholder="Email Address" required />
            <input className='col-xl-6 col-11' type="number" name="number" placeholder="Phone Number" required />
            <textarea className='col-xl-6 col-11' type="text" name="message" placeholder="Your Opinion" required style={{ height: '120px' }} />

            <div className='col-12 d-flex justify-content-center'>
              <button value='Send' className="mt-4" type="submit">SUBMIT<i className=" mx-1 fa-solid fa-paper-plane"></i></button>
            </div>
          </div>
        </form>
      </div>


      <Plannerfooter />
    </div>
  );
};

// <input type="text" name="name" required />
// <label>Number</label>
// <input type="number" name="number" required />
// <label>Email</label>
// <input type="email" name="email" required />
// <label>Message</label>
// <textarea name="message" />
// <input type="submit" value="Send" className='submit' required />












{/* <Plannerheader></Plannerheader>

            <div className='col-sm-12 cart'>
                <div className='row mx-0 gy-5'>

                    <div className='col-sm-8'>

                        <div className='col-sm-12 p-3 text-center card-content'>
                            <div className='col-sm-12 p-3 card-header'>
                                MY CART (0 item col-xl-3 col-6s)
                            </div>
                            <i className='bi-cart-fill '></i>
                            <p>You don't have any Product in your Cart.</p>
                            <p>Add item col-xl-3 col-6s to it now.</p>
                            <button className='btn '>Shop Now</button>
                        </div>

                    </div>

                    <div className='col-sm-4 order p-3'>
                        <div className='fs-4 fw-bold mt-3' style={{ borderBottom: '1px solid black' }}>Price Details</div>
                        <div className='prize mt-3'>
                            <div>Price (0 item col-xl-3 col-6s)</div>
                            <div>₹ 0</div>
                        </div>

                        <div className='prize mt-3'>
                            <div>Delivery Charge</div>
                            <div>FREE</div>
                        </div>

                        <div className='prize fw-bold mt-5 p-3' style={{ borderBottom: '1px dashed black', borderTop: '1px dashed black' }}>
                            <div >Total Payable</div>
                            <div >₹ 0</div>
                        </div>
                        <button className='btn'></button>
                    </div>
                </div>
            </div>

            <Plannerfooter></Plannerfooter> */}




            <div className='row  mx-0 firstrow mt-1 g-4 '>


            <div className='col-xl-2 col-6'>
                <img src={require('../../asset/marriage/haldi/haldi1.jpeg')} alt="" />
            </div>

            <div className='col-xl-2 col-6 '>
                <img src={require('../../asset/marriage/haldi/haldi2.jpeg')} alt="" />
            </div>

            <div className='col-xl-2 col-6   '>
                <img src={require('../../asset/marriage/haldi/haldi3.jpeg')} alt="" />
            </div>

            <div className='col-xl-2 col-6   '>
                <img src={require('../../asset/marriage/haldi/haldi4.jpeg')} alt="" />
            </div>

            <div className='col-xl-2 col-6  '>
                <img src={require('../../asset/marriage/haldi/haldi5.jpeg')} alt="" />
            </div>

            <div className='col-xl-2 col-6  '>
                <img src={require('../../asset/marriage/haldi/haldi6.jpeg')} alt="" />
            </div>

        </div>