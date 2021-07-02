import React, { useState, useEffect } from 'react'
import Navbar from './../navbar/navbar'
import NavIcon from './../navbar icons/navbarIcon'
import SideImage from './../../assets/19362653.jpg'
import Footer from './../footer/footer'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'
function TestSelectionPage() {
    const history = useHistory()
    const [openBar, setOpenBar] = useState(false)
    const [openBarSec, setOpenBarSec] = useState(false)
    const [course, setCourse] = useState("Select Course")
    const [difficulty, setDifficulty] = useState("Select Difficulty")

    //A response here will redirect user to different papge

    return (
        <div className=''>
            <Navbar>
                <NavIcon />
            </Navbar>

            <div className='flex justify-center md:flex-row flex-col mb-20 w-full md:mt-16 mt-0'>
                <div className="w-auto flex flex-col justify-center md:w-1/2 order-2 md:order-1">
                    <div className="my-6 text-center text-2xl">Test your skills</div>
                    <div className="relative my-6 mx-10">
                        <div className="flex justify-between border-2 text-xl p-1 rounded-lg ">
                            <span>{course}</span><span className='cursor-pointer' onClick={() => setOpenBar(!openBar)}>▼</span>
                        </div>

                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: openBar ? "auto" : 0 }}
                            transition={{ type: 'tween', duration: 0.16 }}
                            className="w-full bg-white shadow-2xl inline-bloc rounded-xl z-20 absolute overflow-hidden">
                            <div className="py-6">
                                <div className="px-8 py-2 cursor-pointer hover:bg-gray-200  font-semibold" onClick={() => setCourse("React")}>React</div>
                                <div className="px-8 py-2 cursor-pointer hover:bg-gray-200  font-semibold" onClick={() => setCourse("Nodejs")}>Nodejs</div>
                                <div className="px-8 py-2 cursor-pointer hover:bg-gray-200  font-semibold" onClick={() => setCourse("CSharp")}>CSharp</div>
                                <div className="px-8 py-2 cursor-pointer hover:bg-gray-200  font-semibold" onClick={() => setCourse("Angular")}>Angular</div>
                                <div className="px-8 py-2 cursor-pointer hover:bg-gray-200  font-semibold" onClick={() => setCourse("MongoDB")}>MongoDB</div>
                                <div className="px-8 py-2 cursor-pointer hover:bg-gray-200  font-semibold" onClick={() => setCourse("Blender")}>Blender</div>
                            </div>
                        </motion.div>
                    </div>


                    <div className="relative my-6 mx-10">
                        <div className="flex justify-between border-2 text-xl p-1 rounded-lg ">
                            <span>{difficulty}</span><span className='cursor-pointer' onClick={() => setOpenBarSec(!openBarSec)}>▼</span>
                        </div>

                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: openBarSec ? "auto" : 0 }}
                            transition={{ type: 'tween', duration: 0.16 }}
                            className="w-full bg-white shadow-2xl inline-block rounded-xl z-10 absolute overflow-hidden">
                            <div className="py-6">
                                <div className="px-8 py-2 cursor-pointer hover:bg-gray-200  font-semibold" onClick={() => setDifficulty("Newbie")}>Newbie</div>
                                <div className="px-8 py-2 cursor-pointer hover:bg-gray-200  font-semibold" onClick={() => setDifficulty("Intermediate")}>Intermediate</div>
                                <div className="px-8 py-2 cursor-pointer hover:bg-gray-200  font-semibold" onClick={() => setDifficulty("Ace")}>Ace</div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex justify-around text-center font-semibold my-6">
                        <div className="md:w-1/3 w-40 py-2 rounded-lg border-2 border-red-500 duration-200 bg-white hover:bg-red-50 cursor-pointer" onClick={() => history.push('/selection')}>Back</div>
                        <div className="md:w-1/3 w-40 py-2 rounded-lg border-2 border-blue-500 duration-200 bg-white hover:bg-blue-50 cursor-pointer" onClick={() => history.push('/test')}>Start test</div>
                    </div>
                </div>
                <img src={SideImage} alt="" className='md:w-8/12 w-full h-96 order-1 md:order-2' />
            </div>
            <Footer />
        </div>
    )
}

export default TestSelectionPage

