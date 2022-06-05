import { FaBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-md">
            {/* Add logo Here */}
            <div className="flex-1">
                <Link to='/' className="btn bg-white text-black border-white border-2 hover:border-red-400 hover:bg-white normal-case text-xl">Check N Mate</Link>
            </div>
            <div className="flex-none gap-2">
                {/* Notifications */}
                <button className="btn bg-white text-black border-white border-2 hover:border-green-400 outline-none hover:bg-white btn-circle">
                    <FaBell size={24} />
                </button>

                {/* Avatar & its dropdown */}
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

                {/* Login & Signup Buttons */}
                <div className="buttons flex gap-2">
                    <Link to='auth/signup' className="btn btn-outline btn-warning outline-none font-bold">Signup</Link>
                    <Link to='auth/signin' className="btn btn-outline btn-secondary outline-none font-bold">Login</Link>
                </div>
            </div>

        </div>
    )
}

export default Header