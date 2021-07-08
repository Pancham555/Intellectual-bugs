import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import Navbar from '../navbar/navbar'
import { motion } from 'framer-motion'
import NavIcon from './../navbar icons/navbarIcon'
import Play from './../../assets/play-button.png'
import Footer from './../footer/footer'
import axios from 'axios'
import './../../App.css'

const BlenderPage = () => {
    const [nav, openNav] = useState(false)
    const changer = () => {
        if (nav) {
            openNav(false)
        }
        if (!nav) {
            openNav(true)
        }
    }

    const url = "https://localhost:5001/";
    // const [num, setNum] = useState(1)

    const getReact = () => {
        axios.get(`${url}course?id=${4}`)
            .then((response) => {
                const allReact = response.data;
                console.log(allReact)
                console.log(allReact[0].topics[1].topicName)
                setReactCourses(allReact);
            }).catch(error => console.log(`Error : ${error}`))
    }

    useEffect(() => {
        getReact()
    }, []);

    const [reactCourses, setReactCourses] = useState([]);

    const [video, setVideo] = useState('http://localhost:5500/videos/courses/Blender/Introduction/introduction.mp4')



    return (

        <div>

            <Navbar>
                <NavIcon colorA="text-black" colorSecA='text-black font-semibold' />
            </Navbar>
            {/* <button onClick={() => setNum(3)}>Change course</button> */}

            <div className="flex md:justify-between justify-center flex-col md:flex-row bg-no-repeat bg-cover mt-0 md:mt-24 md:mx-10 mx-0 mb-10" >

                <motion.div
                    initial={{ width: 0, height: "100%" }}
                    animate={{ width: nav ? "64%" : 0, height: "100%" }}
                    transition={{ type: 'tween', duration: 0.15 }}
                    className="flex flex-col md:hidden fixed top-0 right-0 bg-blue-600 z-40 w-0 h-0 overflow-hidden">

                    <motion.div
                        initial={{ marginTop: '100vh', opacity: 0 }}
                        animate={nav ? { marginTop: 0, opacity: 1 } : { marginTop: '100rem', opacity: 0 }}
                        transition={{ duration: 0.8 }}

                        className="flex flex-col justify-center" >
                        <div className="my-5 text-white text-2xl text-center">Hello, Pancham</div>

                        {
                            reactCourses.map((prop, headIndex) => {
                                return (
                                    <select key={headIndex} defaultValue='heading' className='duration-200 w-full border-b-2 font-semibold p-2 text-lg bg-transparent text-white' onClick={(e) => setVideo(e.target.value)}>
                                        <option value="heading" className='bg-blue-500'>
                                            {prop.chapterName}(Heading)
                                        </option>
                                        {
                                            prop.topics.map((Topic, childIndex) => {
                                                return (
                                                    <option key={childIndex} value={Topic.videoURL} className='bg-blue-500'>
                                                        {Topic.topicName}
                                                    </option>
                                                )
                                            })
                                        }
                                    </select>

                                )
                            })}
                    </motion.div>

                </motion.div>

                <div className="md:hidden flex bg-white w-32 my-5 mx-5 border-4 p-3 rounded-xl text-2xl cursor-pointer z-30"
                    onClick={changer}>☰ Menu</div>

                <div className="flex justify-center items-center flex-col mx-10">

                    <div className=" w-full md:mx-auto mx-10 h-full z-10 flex justify-center border-2">
                        <div className="w-auto">
                            <video src={video} width="725px" controls></video>
                        </div>
                    </div>
                    <div className="mt-10">
                        <textarea className="w-full border border-gray-900 " rows="10" cols="100" name="comment" form="usrform" placeholder="Take notes..."></textarea>
                    </div>

                </div>

                <div className="border-4 rounded-xl py-10 px-5 w-4/12 h-auto  border-gray-400 hidden md:block" >
                    {
                        reactCourses.map((prop, headIndex) => {
                            return (
                                <select key={headIndex} defaultValue='heading' className='duration-200 w-full border-b-2 font-semibold p-2 text-lg' onClick={(e) => setVideo(e.target.value)}>
                                    <option value="heading">
                                        {prop.chapterName}(Heading)
                                    </option>
                                    {
                                        prop.topics.map((Topic, childIndex) => {
                                            return (
                                                <option key={childIndex} value={Topic.videoURL}>
                                                    {Topic.topicName}
                                                </option>
                                            )
                                        })
                                    }
                                </select>

                            )
                        })}
                </div>

            </div>
            <Footer />
        </div >
    )
}
export default BlenderPage


