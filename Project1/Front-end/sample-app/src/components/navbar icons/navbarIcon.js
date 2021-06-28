import React from 'react'
import { Link } from 'react-router-dom'
import notification from './../../assets/notification.png'

function navbarIcon() {
    let notificationCount = 211
    let conditioner = '/events'
    return (

        <div className="flex">

            <Link to='/'>
                <div className="text-white my-auto mx-5 md:text-xl text-lg cursor-pointer border-white border-2 py-1 px-2 rounded-lg hover:text-black hover:bg-white duration-200">Logout</div>
            </Link>
            {/* 
            <Link to={conditioner}>
                <div className="flex">
                    <img src={notification} alt="notification" className="cursor-pointer w-8 h-8 my-auto" />
                    <span className="flex flex-col text-sm rounded-full text-white font-semibold">
                        <span className='flex justify-center bg-red-500 rounded-full px-1 border-2 border-white'>{notificationCount}</span>
                    </span>
                </div>
            </Link> */}
        </div>

    )
}

export default navbarIcon
