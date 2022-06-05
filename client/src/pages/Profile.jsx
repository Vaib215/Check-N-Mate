import React from 'react'
import { Link } from 'react-router-dom'
import PostPreview from '../components/layout/PostPreview'

const Profile = () => {
    return (
        <div className="container mx-auto overflow-x-auto m-8 p-8 my-2 border-2 border-error rounded-2xl">
            {/* Breadcrumbs */}
            <div className="text-sm breadcrumbs mx-2 mb-4">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><a>Profile</a></li>
                </ul>
            </div>
            <div className="mx-auto profile-about flex flex-col lg:flex-row items-center lg:items-stretch gap-8 justify-center">
                <div class="avatar">
                    <div class="w-72 rounded-xl">
                        <img src="https://api.lorem.space/image/face?hash=64318" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 content-between m-8">
                    <div className="name flex flex-col items-center lg:items-start">
                        <div className="text-3xl lg:text-5xl font-bold">Vaibhav Kumar Singh</div>
                        <div className="text-lg stat-title">@Vaib215</div>
                    </div>
                    <div className="stats h-min border-2 border-grey w-100 lg:w-96">
                        <div className="stat place-items-center">
                            <div className="stat-value">14</div>
                            <div className="stat-title">Checks</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-value">48</div>
                            <div className="stat-title">Followers</div>
                        </div>
                        <div className="stat place-items-center">
                            <div className="stat-value">76</div>
                            <div className="stat-title">Following</div>
                        </div>
                    </div>
                    <div className="about w-fit lg:w-96">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate explicabo corrupti porro. Est, optio. Iusto, earum hic expedita in quo laborum provident ipsa sed qui laboriosam quam...
                    </div>
                    <div className="skills flex gap-4">
                        <div class="badge badge-outline badge-lg">ReactJS</div>
                        <div class="badge badge-outline badge-lg badge-primary">C++</div>
                        <div class="badge badge-outline badge-lg badge-secondary">Python</div>
                        <div class="badge badge-outline badge-lg badge-error">Lua</div>
                    </div>
                </div>
            </div>
            <div class="flex m-8 justify-center tabs">
                <a class="tab tab-lg tab-lifted tab-active">Checks</a>
                <a class="tab tab-lg tab-lifted">Mates</a>
                <a class="tab tab-lg tab-lifted">Ratings</a>
            </div>
            <div className="flex justify-start gap-4 flex-wrap">
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
                <PostPreview />
            </div>
        </div >
    )
}

export default Profile