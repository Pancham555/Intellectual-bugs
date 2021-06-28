// import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import './../../App.css'
import Navbar from '../navbar/navbar'
import NavIcon from './../navbar icons/navbarIcon'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'


function futureEventPage() {
    const history = useHistory()

    //getting data from API

    const url = "https://localhost:5001/";

    const getEvents = () => {
        axios.get(`${url}event`)
            .then((response) => {
                const allEvents = response.data;
                setEvents(allEvents);
            }).catch(error => console.log(`Error : ${error}`))
    }

    useEffect(() => {
        getEvents()
    }, []);

    const [events, setEvents] = useState([]);




    // let [transpile, transcription] = useState(true)
    const scrollnum = 1000

    const toLeft = () => {
        const scroller = document.querySelector('#scrollbox')
        scroller.scrollLeft -= scrollnum
    }

    const toRight = () => {
        const scroller = document.querySelector('#scrollbox')
        scroller.scrollLeft += scrollnum
    }


    return (
        <div className='overflow-hidden'>

            <div className='relative top-0 right-0 left-0 bottom-0 bg-blue-300 '>

                {/* The below code is of top navbar */}

                <Navbar>
                    <NavIcon />
                </Navbar>
                <div className="flex justify-between bg-blue-400 text-2xl text-white">
                    <div className="text-center w-full h-full py-5 border-r-2 cursor-pointer" onClick={() => history.push('/events')}>Current Events</div>
                    <div className="text-center w-full h-full py-5 border-l-2 cursor-pointer" onClick={() => history.push('/futureevent')}>Future Events</div>
                </div>

                {/* The below code is of the main display page */}


                <div className="text-center text-4xl mb-8 pt-4 text-white">List of all future events</div>

                <div className="my-2 flex justify-center items-center flex-col">


                    {/* {events.map(eve => {
                        return <div key={eve.id} className="w-10/12 h-auto bg-white flex flex-col rounded-lg m-4 shadow-2xl">
                            <iframe width="100%" height="380rem" src={eve.eventURL}
                                title="YouTube video player" frameBorder="0" allow="accelerometer;
                             clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                                className='rounded-t-lg'></iframe>
                            <div className="text-3xl text-center my-5">{eve.eventName}</div>
                            <div className="flex justify-between mx-5 my-4">
                                <div className="mx-5 text-2xl">Start : {eve.startTime}</div>
                                <div className="mx-5 text-2xl">End : {eve.endTime}</div>
                            </div>
                            <div className="text-lg mx-5 mt-2 mb-5 text-gray-500">
                                {eve.description}
                            </div>
                        </div>
                    })} */}
                    <div className="w-9/12 h-auto bg-gray-700 text-white flex flex-col rounded-lg m-4 shadow-2xl">
                        <iframe width="100%" height="350rem" src="http://localhost:5500/videos/events/4.mp4"
                            title="YouTube video player" frameBorder="0" allow="accelerometer;
                             clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                            className='rounded-t-lg'></iframe>
                        <div className="text-2xl text-center my-3">Heading</div>
                        <div className="flex justify-between mx-5 my-2 text-xl">
                            <div className="mx-5">Start : </div>
                            <div className="mx-5">End : </div>
                        </div>
                        <div className="text-lg mx-5 mt-2 text-gray-300">
                            description
                        </div>
                        <div className="flex justify-around my-10">
                            <div className="text-xl border-2 border-red-400 px-8 py-3 rounded-lg cursor-pointer hover:bg-red-400 hover:text-white duration-200">Cancel</div>
                            <div className="text-xl border-2 border-red-400 px-8 py-3 rounded-lg cursor-pointer hover:bg-red-400 hover:text-white duration-200">Book</div>
                        </div>
                    </div>

                </div>


                <footer className="bg-gray-800 px-5 py-10
                  text-white text-center text-xl mt-5 relative bottom-0">
                    All rights reserved
                </footer>
            </div>

        </div >
    )
}

export default futureEventPage
