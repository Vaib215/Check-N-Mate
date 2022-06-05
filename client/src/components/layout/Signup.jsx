import React, { useRef } from 'react'
import axios from 'axios'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
function Signup() {
    const inputName = useRef(null)
    const inputEmail = useRef(null)
    const inputPassword = useRef(null)
    const inputUsername = useRef(null)
    const inputCollege = useRef(null)
    const inputSkills = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        let skill = inputSkills.current.value.split(',')
        var postData = {
            name: inputName.current.value,
            email: inputEmail.current.value,
            password: inputPassword.current.value,
            username: inputUsername.current.value,
            college: inputCollege.current.value,
            skills: skill,
            rating: 0
        };
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
        axios.post('https://vaib215-check-n-mate-7v5qv6jwv2pj4r-8000.githubpreview.dev/user', postData,axiosConfig)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })

    }
    return (
        <>
            <div className="mx-auto lg:mx-32 lg:my-8 min-h-1/2 bg-base-100 border-2 border-blue-400 lg:rounded-xl ">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-primary">
                    <div className="p-8 text-center hidden lg:block lg:w-[40%]">
                        <h1 className="text-5xl font-bold">Hello Coder!</h1>
                        <p className="py-6">Start your learning journey by filling in your information to create a new account.</p>
                        <strong>Already have an account?</strong>
                        <br />
                        <Link to="/auth/signin" className="my-4 px-8 btn btn-outline text-primary rounded-full">Sign In</Link>
                    </div>
                    <div className="card flex-shrink-0 lg:px-6 lg:w-[60%] bg-accent bg-opacity-30 rounded-none lg:rounded-r-xl">
                        <div className="card-body">
                            {/* Breadcrumbs */}
                            <div className="flex justify-end">
                                <div className="text-sm breadcrumbs">
                                    <ul>
                                        <li><Link to='/'>Home</Link></li>
                                        <li><a>Signup</a></li>
                                    </ul>
                                </div>
                            </div>
                            <h1 className="text-center text-3xl text-accent-content font-semibold">Sign Up to your Account</h1>
                            <div className="flex items-center justify-center -mt-2">
                                <div className="divider bg-accent-content rounded-full h-2 w-16 mb-2" />
                            </div>
                            <div className="flex flex-col text-primary gap-2 items-center justify-center mb-4">
                                <AiFillGoogleCircle size="48" />
                                <p>or use your own email account</p>
                            </div>
                            <form className="form-control gap-8">
                                <input ref={inputName} type="text" placeholder="Enter your name" className="input input-primary focus:outline-none text-lg" />
                                <input ref={inputEmail} type="email" placeholder="Enter a valid Email Address" className="input input-primary focus:outline-none text-lg" />
                                <input ref={inputCollege} type="text" placeholder="Enter your college name" className="input input-primary focus:outline-none text-lg" />
                                <input ref={inputUsername} type="text" placeholder="Create a username" className="input input-primary focus:outline-none text-lg" />
                                <input ref={inputSkills} type="text" placeholder="Enter your skills (seperated by comma ',')" className="input input-primary focus:outline-none text-lg" />
                                <input ref={inputPassword} type="password" placeholder="Create a strong password" className="input input-primary focus:outline-none text-lg" />
                            <div className="form-control mt-6 flex items-center">
                                <button className="px-8 btn btn-outline text-primary text-xl w-fit rounded-full focus:outline-none" onClick={handleSubmit}>Sign Up</button>
                            </div>
                            </form>
                            <div className="text-primary text-center mt-4 lg:hidden">
                                <p>Already have an account?<strong> <br /><Link to="/auth/signin" className="cursor-pointer">Sign In Instead</Link></strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup