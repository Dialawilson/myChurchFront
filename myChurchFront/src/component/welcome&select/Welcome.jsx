import  React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './custom.css'

const Welcome = () => {
  function handleOptionChange(event){
    const navigate = useNavigate()
    const selectPath = event.target.value;
    navigate(selectPath)
  }
  return (
    <div className=' container-sm'>
       <div className="row welcomeSection">
       <div className=' col-12'>
            <h2 className=' display-2  text-capitalize '>welcome to <br /> Our !</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo delectus ratione iusto tempore rerum sed optio impedit, quidem atque earum assumenda voluptatibus, obcaecati aut natus tempora. Atque, corrupti maiores.
            Animi eius ti?</p>
           <select name="select section" onChange={handleOptionChange} className=' p-2 select' id="">
            <option value="/">agip road (golden city)</option>
            <option value="/agipBase"><Link to="/agipbase">agip base </Link></option>
            <option value="/chindahExtension">chindah extension</option>
            <option value="/Eagleislandchurch">eagle island church 2</option>
            <option value="/MgbwikeChurch">mgbwike church</option>
            <option value="O">oro akwor church</option>
            {/* <option ><Link to="">orowo church</Link></option> */}
            </select>
            {/* <Link to="/">church 2</Link> */}
            {/* <button><Link>hello</Link></button> */}
        </div>
        <div className=' col-7 '></div>
       </div>
    </div>
  )
}

export default Welcome