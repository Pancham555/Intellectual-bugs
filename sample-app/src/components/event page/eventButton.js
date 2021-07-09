import React, { useState } from 'react'
import { motion } from 'framer-motion'

const EventButton = (props) => {
    const [stater, setStater] = useState(false)
    const click = () => {
        setStater(!stater)
    }
    return (
        <div className="w-auto h-auto" onClick={stater ? null : props.eventClick}>
            <motion.div
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween" }}
                className={`border-2 border-blue-500 rounded-xl text-center text-xl hover:bg-transparent hover:text-blue-500
        p-2 m-5 cursor-pointer ${stater ? "" : "bg-blue-500"} ${stater ? "text-blue-500" : "text-white"} duration-200`}
                onClick={click}>
                < span className='mx-5' >
                    {stater ? "✔" : null}
                </span >
                <span className='mx-5'>{stater ? "Attending" : "Attend"}</span>
                <span className='mx-5'></span>
            </motion.div >
        </div>
    )
}

export default EventButton
