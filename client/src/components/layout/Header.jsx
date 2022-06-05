import { useState } from 'react'
import { FaBell } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Avatar = () => {
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn bg-white text-black border-white border-2 hover:border-blue-400 hover:bg-white btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                </div>
            </label>
            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-36">
                <li className=''>
                    <Link to='/profile/Vaib326' className='p-2 cursor-pointer rounded-xl bg-white text-lg text-black border-white border-2 hover:border-purple-400 hover:bg-white'>Profile</Link>
                </li>
                <li className='p-2 cursor-pointer rounded-xl bg-white text-black border-white border-2 hover:border-yellow-400 hover:bg-white'>Settings</li>
                <li className='p-2 cursor-pointer rounded-xl bg-white text-black border-white border-2 hover:border-accent hover:bg-white'>Logout</li>
            </ul>
        </div>
    )
}

const Buttons = () => {
    return (
        <div className="buttons flex gap-2">
            <Link to='auth/signup' className="btn btn-outline btn-warning outline-none font-bold">Signup</Link>
            <Link to='auth/signin' className="btn btn-outline btn-secondary outline-none font-bold">Login</Link>
        </div>
    )
}

const Notifications = () => {
    return (
        <div class="dropdown dropdown-end">
            <label tabIndex="0" class="btn btn-ghost btn-circle">
                <div class="w-10 h-10 grid place-items-center rounded-full">
                    <FaBell size={24} />
                </div>
            </label>
            <ul tabIndex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-md w-72">
                <li>
                    <a>
                        Hello! Dear, THis  is a notification
                    </a>
                </li>
            </ul>
        </div>
    )
}

const Header = () => {
    const isLoggedIn = useSelector(state => state.login.isLoggedIn)
    return (
        <div className="navbar bg-base-100 shadow-md">
            {/* Add logo Here */}
            <div className="flex-1">
                <Link to='/' className="btn bg-white text-black border-white border-2 hover:border-red-400 hover:bg-white normal-case text-xl">Check N Mate</Link>
            </div>
            <div className="flex-none gap-2">
                {isLoggedIn? (<><Notifications/> <Avatar/></>): (<Buttons/>)}
            </div>

        </div>
    )
}

export default Header