import  React from 'react'
import {Link} from 'react-dom'
import './custom.css'

const Welcome = () => {
  return (
    <div className=' container'>
       <div className="row welcomeSection">
       <div className=' col-12'>
            <h2 className=' display-2  text-capitalize   '>welcome to <br /> Our church</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo delectus ratione iusto tempore rerum sed optio impedit, quidem atque earum assumenda voluptatibus, obcaecati aut natus tempora. Atque, corrupti maiores.
            Animi eius ti?</p>
           <select name="select section" id="">
            <option value="">agip road (golden city)</option>
            <option value="">agio base </option>
            <option value="">chindah extension</option>
            <option value="">eagle island church 2</option>
            <option value="">mgbwike church</option>
            <option value="">oro akwor church</option>
            {/* <option value=""><Link>orowo church</Link></option> */}
            </select>
        </div>
        <div className=' col-7 '></div>
       </div>
    </div>
  )
}

export default Welcome