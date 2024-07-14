import facebook from '../assets/facebook.jpg'    
import arrow from '../assets/arrow.svg'    
const livestream = () => {
    return ( 
        <div className='live rounded-2 col-lg-8  bg-primary d-flex m-auto p-2 align-items-center flex-lg-row flex-column'>
            <img src={facebook} alt=""  className='rounded-1 live-img m-2 border'/>

            <div className='live-click m-4 text-center text-lg-start text-white'>
                <p>Join the Sunday Live Stream</p>
                <p>Every Sunday at 9:00 am and 11:00 am</p>

                <div className='live-button d-flex justify-content-between  '>
                    <button className="btn">Join now <img src={arrow} alt=""  /></button>
                    <button className="btn bg-white text-black">Past Messages</button>

                </div>
            </div>
            

        </div>
     );
}
 
export default livestream;