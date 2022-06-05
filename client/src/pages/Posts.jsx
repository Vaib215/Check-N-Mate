import React from 'react'
import { Link } from 'react-router-dom'
import PostPreview from '../components/layout/PostPreview'

const Posts = () => {
    return (
        <div className="overflow-x-auto container mx-auto m-8 p-8 my-2 border-2 border-accent rounded-2xl">
            {/* Breadcrumbs */}
            <div className="text-sm breadcrumbs mx-2 mb-4">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><a>Checks</a></li>
                </ul>
            </div>
            <div className="filters-list m-4 flex gap-4 items-center flex-wrap">
                <div className="text-xl">Filters : </div>
                <div className="badge badge-outline badge-lg">Web Development</div>
                <div className="badge badge-outline badge-lg">React JS</div>
                <div className="btn btn-outline btn-sm btn-circle">+</div>
            </div>
            <div className="posts flex gap-4 flex-wrap justify-evenly w-full items-center ">
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
        </div>
    )
}

export default Posts