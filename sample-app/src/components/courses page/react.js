




import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import Navbar from '../navbar/navbar'
import { motion } from 'framer-motion'
import NavIcon from './../navbar icons/navbarIcon'
import Play from './../../assets/play-button.png'
import Footer from './../footer/footer'
import axios from 'axios'
import './../../App.css'

const ReactPage = () => {
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

    const getReact = () => {
        axios.get(`${url}course?id=1`)
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

    const [video, setVideo] = useState('http://localhost:5500/videos/courses/React/Introduction/introduction.mp4')



    return (

        <div>

            <Navbar>
                <NavIcon />
            </Navbar>

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
                        {/* {
                            reactCourses.map((react) => {
                                return (

                                    <p className=" pl-5 my-4 pb-3 cursor-pointer border-b-2
                                    text-white border-gray-300"key={props.topicId}
                                        onClick={() => setVideo(props.videoURL)}>{react.topicName}</p>
                                )
                            })
                        } */}
                    </motion.div>

                </motion.div>

                <div className="md:hidden flex bg-white w-32 my-5 mx-5 border-4 p-3 rounded-xl text-2xl cursor-pointer z-30"
                    onClick={changer}>☰ Menu</div>

                <div className="flex justify-center items-center flex-col mx-10">

                    <div className=" w-3/4 md:mx-auto mx-10 h-full z-10 flex justify-center border-2">
                        <ReactPlayer controls width='100%' height="400px" url={video} />
                    </div>
                    <div className="mt-10">
                        <textarea className="w-full border border-gray-900 " rows="10" cols="100" name="comment" form="usrform" placeholder="Take notes..."></textarea>
                    </div>

                </div>

                <div className="border-4 rounded-xl py-10 px-5 w-4/12 h-auto  border-gray-400 hidden md:block" >
                    {
                        reactCourses.map((react, headIndex) => {
                            return (
                                <select key={headIndex} defaultValue='heading' className='duration-200 w-full border-b-2 font-semibold p-2 text-lg' onClick={(e) => setVideo(e.target.value)}>
                                    <option value="heading">
                                        {react.chapterName}(Heading)
                                    </option>
                                    {
                                        react.topics.map((reactTopic, childIndex) => {
                                            return (
                                                <option key={childIndex} value={reactTopic.videoURL}>
                                                    {reactTopic.topicName}
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
export default ReactPage


