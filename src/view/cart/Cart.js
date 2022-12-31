import '../cart/Cart.styles.css'
import { useRef } from 'react';
import { Plannerheader } from '../plannerhead/Plannerhead';
import { Plannerfooter } from '../plannerfooter/Plannerfooter';
import emailjs from '@emailjs/browser';


export const Contactus = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_is7cp8m', 'template_kur3slg', form.current, 'F7wQSisBJTJla_PXs')
      .then((result) => {
        console.log(result.text);
      },)
    e.target.reset();
    alert('Thanks For Submmiting')
  };


  return (

    <div className='vh-100'>

      <Plannerheader />

      <div className='col-12 '>
        <div className='cart-head'>
          <div className='col-12 cart-head-img'></div>
          <div className='contactus-text col-12 col-xl-6'data-aos="slide-right"><h1>𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐔𝐒</h1></div>
        </div>

        <div className='col-12 cart-contact text-center'>
          <div className='col-xl-10 col-12'>
            <h3 data-aos="slide-up">𝐏𝐥𝐚𝐧𝐧𝐞𝐫 𝐀𝐝𝐝𝐢𝐜𝐭 - 𝐘𝐨𝐮𝐫 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥 𝐖𝐞𝐝𝐝𝐢𝐧𝐠 𝐏𝐥𝐚𝐧𝐧𝐞𝐫</h3>
            <h2 data-aos="slide-up">𝓟𝓵𝓪𝓷 𝔂𝓸𝓾𝓻 𝔀𝓮𝓭𝓭𝓲𝓷𝓰 𝔀𝓲𝓽𝓱 𝓤𝓼</h2>
            <p className='mt-3'data-aos="slide-up">PlannerAddict is your personal wedding planning site. Browse through the site to find vendors for your wedding. Explore wedding inspiration & ideas and our very popular wedding blog to prepare for your wedding following latest trends. Contact us for more details.</p>
          </div>
        </div>

        <div className='row mx-0 '>

          <div className='col-xl-7 col-12'>
            <form ref={form} className="contact-form " onSubmit={sendEmail}>

              <div className="form-back"></div>
              <div className="col-xl-5 col-11 segment"> </div>


              <div className='segment1 col-xl-5 col-12'data-aos="zoom-in">
                <h1>𝐖𝐫𝐢𝐭𝐞 𝐭𝐨 𝐮𝐬!</h1>
                <h6 className='col-xl-9 col-11 text-center'>𝐖𝐞 𝐰𝐨𝐮𝐥𝐝 𝐥𝐨𝐯𝐞 𝐭𝐨 𝐡𝐞𝐚𝐫 𝐟𝐫𝐨𝐦 𝐲𝐨𝐮! 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐮𝐬 𝐝𝐢𝐫𝐞𝐜𝐭𝐥𝐲 𝐛𝐲 𝐟𝐢𝐥𝐥𝐢𝐧𝐠 𝐭𝐡𝐢𝐬 𝐟𝐨𝐫𝐦.</h6>
                <input className='col-xl-8 col-11' type="text" name="name" placeholder="Name" required />
                <input className='col-xl-8 col-11' type="email" name="email" placeholder="Email Address" required />
                <input className='col-xl-8 col-11' type="number" name="number" placeholder="Phone Number" required />
                <textarea className='col-xl-8 col-11' type="text" name="message" placeholder="Your Opinion" required style={{ height: '100px' }} />

                <div className='col-12 d-flex justify-content-center'>
                  <button value='Send' className="mt-4" type="submit">SUBMIT<i className=" mx-1 fa fa-paper-plane"></i></button>
                </div>
              </div>
            </form>
          </div>

          <div className='col-xl-5 col-12 contactus-content' style={{ zIndex: '1' }}>
            <div className='col-12'>
              <h4 data-aos="slide-up">Vendors</h4>
              <p data-aos="slide-up">If you are a registered vendor or a business looking to promote your brand on our portal, please send in your queries at vendors <span> info@planneraddict.in</span></p>
            </div>

            <div className='col-12'>
              <h4 data-aos="slide-up">Marketing Collaborations</h4>
              <p data-aos="slide-up">For brand collaborations - sponsored content, social media activations etc., please write into partnerships <span> info@planneraddict.in</span></p>
            </div>

            <div className='col-12'>
              <h4 data-aos="slide-up">Careers</h4>
              <p data-aos="slide-up">We are a team of passionate young minds looking to reinvent the wedding space. If any one intrested please email us at <span> info@planneraddict.in</span></p>
            </div>

            <div className='col-12'>
              <h4 data-aos="slide-up">Customers</h4>
              <p data-aos="slide-up">We love to hear from our precious users. For any feedback or queries simply write in to info <span> info@planneraddict.in</span></p>
            </div>
          </div>
        </div>

      </div>


      <Plannerfooter />
    </div>
  );
};








