import React from 'react'
import { Link } from 'react-router-dom'
import {FaSignInAlt, FaUser} from "react-icons/fa"

const Header = () => {
  return (
    <div className=' flex items-center  justify-between '>
        <div>
            <Link to="/">GoalSetter</Link>
        </div>
        <ul className='flex items-center justify-between w-[200px] '>
            <li className=' '>
                <Link to="/login">
                   <div className=" flex items-center flex-col ">
                   <FaSignInAlt/> <div className="">Login</div>
                   </div>
                </Link>
            </li>
            <li>
                <Link to="/register">
                    <div className="flex items-center flex-col">
                        <FaUser/> Register
                    </div>
                    
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header