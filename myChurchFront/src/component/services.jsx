import book from '../assets/book-solid.svg'
import calender from '../assets/calendar-days-solid.svg'
import childReaching from '../assets/child-reaching-solid.svg'
import child from '../assets/child-solid.svg'
import handshake from '../assets/handshake-angle-solid.svg'
import heart from '../assets/shield-heart-solid.svg'


const Services = () => {
    return ( 
        <div className="container service-main d-flex align-items-center flex-md-row flex-column justify-items-center bg-info rounded-4 p-4">
            <div className="services col-12 col-md-6 text-md-start text-center">
                <p className='fw-bold fs-3'>OUR SERVICES</p>
                <p className='fs-5'>We Love serving the Lord</p>
                <p className='col-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, numquam ex! Magnam placeat quisquam odio molestias! Aspernatur, impedit illo. Atque odio reiciendis eius sit beatae voluptate! Quidem quaerat similique voluptatem.</p>

                <a href="#" className="btn fw-bold">Learn more</a>
            </div>

            <div className="col-12 col-md-6 p-4">
                <div className="row mb-4">
                    <div className="col-4 d-flex flex-column justify-content-start align-items-center text-center">
                        <img src={book} alt="" />
                        <p className='fw-bold'>Weekly Services</p>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    <div className="col-4 d-flex flex-column justify-content-start align-items-center text-center">
                        <img src={child} alt="" />
                        <p className='fw-bold'>Youth</p>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    <div className="col-4  d-flex flex-column justify-content-start align-items-center text-center">
                        <img src={childReaching} alt="" />
                        <p className='fw-bold'>Kids</p>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4  d-flex flex-column justify-content-start align-items-center text-center">
                        <img src={calender} alt="" />
                        <p className='fw-bold'>Special Events</p>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    <div className="col-4 d-flex flex-column justify-content-start align-items-center `text-center">
                        <img src={handshake} alt="" />
                        <p className='fw-bold'>Counseling</p>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    <div className="col-4 d-flex flex-column justify-content-start align-items-center text-center">
                        <img src={heart} alt=""/>
                        <p className='fw-bold'>Benevalence</p>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Services;