import React from 'react'

const PostPreview = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">A Random Project</h2>
                <p>Can you help me build a backend for a very nice web project.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default PostPreview