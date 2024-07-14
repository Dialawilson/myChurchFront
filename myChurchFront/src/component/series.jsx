import one from '../assets/peter-wendt--r5KSMkyoSc-unsplash.jpg';
import two from '../assets/shirley-langton-1e3PmJGrTR4-unsplash.jpg';
import three from '../assets/shaojie-0Lxq5TGjarQ-unsplash.jpg';
import arrow from '../assets/arrow.svg'

const imgStyle ={
        width: '100%',
        borderRadius: '1rem',
        margin: '1rem 0rem'
}

const arrowStyle ={
    height: '30px'
}
const Series = () => {
    return ( 
        <div className="series text-center mt-4  container   ">
            <p className='text-uppercase'>Current series</p>
            <p className='fs-4 fw-bold'>Hope for Tomorrow</p>
            <p className='mb-4'>Get caught up with the current messagee series</p>

            <div className="col-12 d-flex flex-column flex-lg-row">
                <div className="col-12 col-lg-4 p-2">
                    <img src={one} alt="" style={imgStyle}/>
                    <p className='text-danger text-uppercase'>Variety of the spirit / Past Series</p>
                    <p className='fw-bold fs-4'>Being Fruitful</p>
                    <p className='fs-6'>Posted on January, 2024</p>
                    <a href="#" className='' >
                        <div className='btn bg-primary w-50  d-flex m-auto justify-content-between align-items-center'>
                        <p>Listen to message</p> <img src={arrow} alt="" style={arrowStyle}/>
                        </div>
                    </a>

                    
                </div>

                <div className="col-12 col-lg-4 p-2">
                <img src={two} alt="" style={imgStyle}/>
                    <p className='text-danger text-uppercase'>Multiplication / Past Series</p>
                    <p className='fw-bold fs-4'>Increasing beyond measures</p>
                    <p className='fs-6'>Posted on December, 2023</p>
                    <a href="#">
                        <div className='btn bg-primary w-50  d-flex m-auto justify-content-between align-items-center'>
                        <p>Listen to message</p> <img src={arrow} alt="" style={arrowStyle} />
                        </div>
                    </a>

                </div>

                <div className="col-12 col-lg-4 p-2">
                <img src={three} alt="" style={imgStyle}/>
                    <p className='text-danger text-uppercase'>The Land given/ Past Series</p>
                    <p className='fw-bold fs-4'>Claiming yours</p>
                    <p className='fs-6'>Posted on September, 2022</p>
                    <a href="#">
                        <div className='btn bg-primary w-50  d-flex m-auto justify-content-between align-items-center text-white'>
                        <p>Listen to message</p> <img src={arrow} alt="" style={arrowStyle}/>
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
     );
}
 
export default Series;