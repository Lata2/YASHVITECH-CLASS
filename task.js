import React from 'react'
import './task.css'
function task() {
    return (
        <div >
            <div className='backgroundImgDiv'>
                <img className='backgroundImg' src='https://images.pexels.com/photos/4492129/pexels-photo-4492129.jpeg?auto=compress&cs=tinysrgb&w=1200'></img>
            </div>
            <div className='mainDiv'>
                <div className='childDiv'><p>CHILD LEARN</p></div>
                <div className='homeDiv'>
                    <p>HOME</p>
                    <p>ABOUT</p>
                    <p>SERVICE</p>
                    <p>START</p>
                    <p>TESTIMONIALS</p>
                    <p>TEACHERS</p>
                    <p>SUPPLY</p>
                </div>
            </div>
            <div className='mainEducationFormDiv'>
                <div className='EducationDiv'>
                    <p className='educationPara'>Education Course</p>
                    <p className='studyPara'>Study For Better Future</p>
                    <p className='OncePara'>Onec Consequat Sapien Ut Leo Cursus Rhoncus. Nullam Dui Mi, Vulputate Ac Metus Semper Nullam Dui Mi. Vestibulum Ante. Morbi At Dui Nisl.</p>
                    <button className='readMoreButton'>Read More</button>
                </div>


                <form className='registrationForm'>
                    <p>Ragister and Join in Our School</p>
                    <input className='InputBox' type='text' placeholder='Student Name'></input><br /><br />
                    <input className='InputBox' type='email' placeholder='Your Email Id '></input><br /><br />
                    <input className='InputBox' type='text' placeholder='Contact Number'></input><br /><br />
                    <input className='InputBox' type='number' placeholder='Class'></input><br /><br />
                    <button className='GetStartedButton'>Get Started</button><br />
                    <p className='ByPara'>By registering, you agree to our Terms & Conditions. </p>
                </form>
            </div>
            <br /><br /><br /><br />

            <div className='BuildDiv'>
                <p>Build Your Career With Our Education System</p>
                <div className='MainFacillitiesDiv'>
                    <div className='FacillitiesDiv'>
                        <img className='FacillitieImg' src='https://t4.ftcdn.net/jpg/04/30/26/81/360_F_430268143_vgIE6L3H5JRxpqeAP1QBm2s2fOYmRNDC.jpg'></img>
                        <p className='ImgName'>Facillities</p></div>
                    <div className='FacillitiesDiv'>
                        <img className='FacillitieImg' src='https://images.pexels.com/photos/7150986/pexels-photo-7150986.jpeg?auto=compress&cs=tinysrgb&w=1200 '></img>
                        <p className='ImgName'>Graduation</p></div>
                    <div className='FacillitiesDiv'>
                        <img className='FacillitieImg' src='https://images.pexels.com/photos/4769486/pexels-photo-4769486.jpeg?auto=compress&cs=tinysrgb&w=1200'></img>
                        <p className='ImgName'>Learning</p></div>
                    <div className=' FacillitiesDiv '>
                        <img className='FacillitieImg' src='https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=1200'></img>
                        <p className='ImgName'>  Success </p></div>
                </div>
                <br></br><br></br>
                <div className='mainVivamusDiv'>
                    <div className='VivamusDiv'><p>Vivamus mattis ex massa. Morbi sed dui imperdiet, tinci dunt libero a, sagittis enim. Donec lobortis cursuser uti justo, at eleifend eros init ultricies sed. Vivamus efficit ur urna vitae tempus aliquam. Proin aliquet dictum est molestie maximus sapien leo cursus rhoncus.</p></div>
                    <div className='VivamusDiv'><p>Vivamus efficitur ur vitae tempus aliquam. Proin aliquet dictum est, molestie maximus sapien maximus a. Fuscer eleifend. convallis vitae enim eu egestas. Quisque placi rati enim nibh, vitae faucibus odio vestibulum pretium. Sed malesuada libero sed commodo varius.</p></div>
                </div>
            </div>


            <br></br>


            <div >
                <h1>Our Services</h1>
                {/* <img className='GirlQualityImg' src='https://images.pexels.com/photos/4145075/pexels-photo-4145075.jpeg?auto=compress&cs=tinysrgb&w=1200'></img> */}
                <div className='mainQUALITYDiv'>
                    <div className='QUALITYDiv'><p className='PQUALITY'>QUALITY EDUCATION</p><p>
                        Proin varius pellentesque nunc tincidunt ante. Init id lacus</p></div>
                    <div className='QUALITYDiv'>
                        <p>QUALITY EDUCATION</p><p>
                            Proin varius pellentesque nunc tincidunt ante. Init id lacus</p>
                    </div >
                    <div className='QUALITYDiv'>
                        <p>QUALITY EDUCATION</p><p>
                            Proin varius pellentesque nunc tincidunt ante. Init id lacus</p>
                    </div>
                </div>
                <br></br>
                <div className='mainQUALITYDiv'>
                <div className='QUALITYDiv'>
                    <p>QUALITY EDUCATION</p><p>
                        Proin varius pellentesque nunc tincidunt ante. Init id lacus</p>
                </div>
                <div className='QUALITYDiv'>
                    <p>QUALITY EDUCATION</p><p>
                        Proin varius pellentesque nunc tincidunt ante. Init id lacus</p>
                </div >
                <div className='QUALITYDiv'><p>QUALITY EDUCATION</p><p>
                    Proin varius pellentesque nunc tincidunt ante. Init id lacus</p></div>
                    </div>
                     <br></br>
            </div>


            <br/>
        </div>
        
    )
}

export default task
