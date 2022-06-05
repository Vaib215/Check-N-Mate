import React from 'react'

const Process = () => {
    return (
        <div className='container mx-auto flex flex-col items-center justify-center'>
            <div className="m-8 text-3xl text-secondary uppercase">
                How It Works?
            </div>
            <div className="process">
                <div class="mockup-phone m-8">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">Checks</div>
                    </div>
                </div>
                <div class="mockup-phone m-8">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">Mates</div>
                    </div>
                </div>
                <div class="mockup-phone m-8">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">Ratings</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process