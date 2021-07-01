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

    const getEvents = () => {
        axios.get(`${url}course?id=1`)
            .then((response) => {
                const allEvents = response.data;
                setEvents(allEvents);
                // console.log(allEvents[0].topics[2].topicName)
            }).catch(error => console.log(`Error : ${error}`))
    }

    useEffect(() => {
        getEvents()
    }, []);

    const [events, setEvents] = useState([]);

    const [video, setVideo] = useState('http://localhost:5500/videos/courses/React/1.mp4')


    const [expander, setExpander] = useState(false)



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
                            events.map((props) => {
                                return (

                                    <p className=" pl-5 my-4 pb-3 cursor-pointer border-b-2
                                    text-white border-gray-300"key={props.topicId}
                                        onClick={() => setVideo(props.videoURL)}>{props.topicName}</p>
                                )
                            })
                        } */}
                    </motion.div>

                </motion.div>

                <div className="md:hidden flex bg-white w-32 my-5 mx-5 border-4 p-3 rounded-xl text-2xl cursor-pointer z-30"
                    onClick={changer}>☰ Menu</div>

                <div className="flex justify-center items-center flex-col mx-10">

                    <div className=" w-full md:mx-auto mx-10 h-full z-10 flex justify-center">
                        <ReactPlayer controls width='100%' height="400px" url={video} />
                    </div>
                    <div className="mt-10">
                        <textarea className="w-full border border-gray-900 " rows="10" cols="100" name="comment" form="usrform" placeholder="Take notes..."></textarea>
                    </div>

                </div>

                <div className="border-4 rounded-xl py-10 px-5 w-4/12 h-auto  border-gray-400 hidden md:block" >

                    <p className='text-xl border-b-2 border-gray-300 flex cursor-pointer pt-6 pb-1.5'>
                        <img src={Play} alt="" className='w-7 h-7 mx-5' />
                        <span className=' font-semibold'>Play 1</span>
                    </p>
                    <p className='text-xl border-b-2 border-gray-300 flex cursor-pointer pt-6 pb-1.5'>
                        <img src={Play} alt="" className='w-7 h-7 mx-5' />
                        <span className=' font-semibold'>Play 2</span>
                    </p>
                    <p className='text-xl border-b-2 border-gray-300 flex cursor-pointer pt-6 pb-1.5'>
                        <img src={Play} alt="" className='w-7 h-7 mx-5' />
                        <span className=' font-semibold'>Play 3</span>
                    </p>
                </div>

            </div>
            <Footer />
        </div >
    )
}
export default ReactPage
//[{"chapterId":1,"chapterName":"Introduction","topics":[{"topicId":1,"topicName":"Introduction","videoURL":"http://localhost:5500/videos/courses/React/1.mp4","notesURL":"abc"},{"topicId":2,"topicName":"What is React","videoURL":"http://localhost:5500/videos/courses/React/2.mp4","notesURL":"def"},{"topicId":3,"topicName":"Why should we choose React?","videoURL":"http://localhost:5500/videos/courses/React/3.mp4","notesURL":"null"}]},{"chapterId":2,"chapterName":"React Basic","topics":[{"topicId":4,