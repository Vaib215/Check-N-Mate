import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
function Signup() {
    return (
        <>
            <div className="mx-auto lg:mx-32 lg:my-8 min-h-1/2 bg-base-100 border-2 border-blue-400 lg:rounded-xl ">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-primary">
                    <div className="p-8 text-center hidden lg:block lg:w-[40%]">
                        <h1 className="text-5xl font-bold">Hello Coder!</h1>
                        <p className="py-6">Start your learning journey by filling in your information to create a new account.</p>
                        <strong>Already have an account?</strong>
                        <br />
                        <a href="/auth/signin" className="my-4 px-8 btn btn-outline text-primary rounded-full">Sign In</a>
                    </div>
                    <div className="card flex-shrink-0 p-4 lg:px-8 lg:w-[60%] bg-accent bg-opacity-30 rounded-none lg:rounded-r-xl">
                        <div className="card-body">
                            <h1 className="text-center text-3xl text-accent-content font-semibold">Sign Up to your Account</h1>
                            <div className="flex items-center justify-center -mt-2">
                                <div class="divider bg-accent-content rounded-full h-2 w-16 mb-2" />
                            </div>
                            <div className="flex flex-col text-primary gap-2 items-center justify-center mb-4">
                                <AiFillGoogleCircle size="48" />
                                <p>or use your own email account</p>
                            </div>
                            <div className="form-control gap-8">
                                <input type="text" placeholder="Enter your name" className="input input-primary focus:outline-none text-lg" />
                                <input type="email" placeholder="Enter a valid Email Address" className="input input-primary focus:outline-none text-lg" />
                                <input type="password" placeholder="Create a strong password" className="input input-primary focus:outline-none text-lg" />
                                <input type="password" placeholder="Re-enter your password" className="input input-primary focus:outline-none text-lg" />
                                <label className="label">
                                    <label className="label cursor-pointer gap-2">
                                        <input type="checkbox" className="checkbox checkbox-primary focus:outline-none" />
                                        <span className="label-text">Remember me</span>
                                    </label>
                                </label>
                            </div>
                            <div className="form-control mt-6 flex items-center">
                                <button className="px-8 btn btn-outline text-primary text-xl w-fit rounded-full focus:outline-none">Sign Up</button>
                            </div>
                            <div className="text-primary text-center mt-4 lg:hidden">
                                <p>Already have an account?<strong> <br /><a href="/auth/signin" className="cursor-pointer">Sign In Instead</a></strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup