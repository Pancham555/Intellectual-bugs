import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


function navbar(props) {
    return (
        <>
            <div className="sticky top-0
     left-0 right-0 text-center py-3 bg-blue-500 
      text-white flex justify-between md:px-20 px-8 z-40 shadow-md">

                <div className="flex my-auto">


                    <span className="my-auto md:text-3xl text-xl mx-5">Training lab</span>


                </div>

                <span className="flex">{props.children}</span>
            </div>
        </>
    )
}

export default navbar
