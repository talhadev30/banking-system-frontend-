import React from 'react'

const Activebar = (props) => {
    return (
        <div >
            <div className='flex my-5 items-center text-[12px] px-3 py-0.5 rounded-2xl w-fit bg-gray-800 justify-start gap-2 text-white/70'>
                <span className='p-0.75 rounded-full bg-green-500'></span>
                {props.title}
            </div>
        </div>
    )
}

export default Activebar