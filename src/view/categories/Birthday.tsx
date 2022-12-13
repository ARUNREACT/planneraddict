import '../categories/Categories.styles.css'
import { Plannerfooter } from '../plannerfooter/Plannerfooter'
import { Plannerheader } from '../plannerhead/Plannerhead'
import { Categoriesimg } from '../../component/Categories'




export function Birthday() {

    // const MyBackgroundImage =
    //     'https://thumbs.dreamstime.com/b/happy-birthday-party-background-text-colorful-tools-top-view-greeting-card-107916398.jpg';


    return (


        <div className='catergories'>
            <Plannerheader></Plannerheader>
            <div className='col-sm-12 '>

                <div className='oo col-12 bg-danger'

                // style={{
                //     backgroundImage: `url(${MyBackgroundImage})repeat center center fixed`,
                //     backgroundSize: 'cover',
                //     // backgroundAttachment: 'fixed',
                //     // filter: 'blur(4px)',
                //     width: '100%',
                //     minHeight: '100vh',
                //     maxHeight: '100%',
                //     height: '100vh',
                //     position: 'absolute',
                //     zIndex: '-1'
                // }}


                >
                </div>
                <div className='col-12  catergoriesimg'>

                    <h1 className='col'>
                        𝗕𝗜𝗥𝗧𝗛𝗗𝗔𝗬 𝗘𝗩𝗘𝗡𝗧
                    </h1>

                    <div className='container'>
                        <div className='row  mx-0 firstrow mt-1 g-4 '>
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth16.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth17.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth18.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth19.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth20.jpeg')}
                            />

                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth6.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth7.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth8.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth9.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth10.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth1.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth2.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth3.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth4.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth5.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth11.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth12.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth13.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth14.jpeg')}
                            />
                            <Categoriesimg
                                categoriesimg={require('../../asset/birthday/birth15.web')}
                            />



                        </div>

                    </div>
                </div>
                {/* </div> */}

            </div>


            <Plannerfooter></Plannerfooter>

        </div >
    )

}



