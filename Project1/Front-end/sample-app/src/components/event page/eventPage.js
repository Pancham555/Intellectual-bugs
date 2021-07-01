// import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import './../../App.css'
import Navbar from '../navbar/navbar'
import NavIcon from './../navbar icons/navbarIcon'
import Footer from './../footer/footer'
import axios from 'axios'
import { motion } from 'framer-motion'
// import { useHistory } from 'react-router-dom'


function Eventpage() {
    // const history = useHistory()

    //getting data from API

    const url = "https://localhost:5001/";
    const getEvents = () => {
        axios.get(`${url}event`)
            .then((response) => {
                const allEvents = response.data;
                setEvents(allEvents);
            }).catch(error => console.log(`Error : ${error}`))
    }

    const [events, setEvents] = useState([]);

    const urlSec = "https://localhost:5001/";
    const getFutureEvents = () => {
        axios.get(`${urlSec}event/FutureEvents`)
            .then((response) => {
                const allEvents = response.data;
                setFutureEvents(allEvents);
            }).catch(error => console.log(`Error : ${error}`))
    }

    const [futureevents, setFutureEvents] = useState([]);

    useEffect(() => {
        getEvents()
        getFutureEvents()
    }, []);





    const PastEvent = () => {
        return (<div>
            <div className="text-center text-4xl mb-8 pt-4 text-white">List of all events below</div>

            <div className="my-2 flex justify-center items-center flex-col">


                {events.map((eve, index) => {
                    return <div key={index} className="w-10/12 h-auto bg-white flex flex-col rounded-lg m-4 shadow-2xl">
                        <iframe width="100%" src={eve.eventURL}
                            title="YouTube video player" frameBorder="0" allow="accelerometer;
             clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                            className='rounded-t-lg h-60 md:h-96'></iframe>
                        <div className="md:text-3xl text-2xl text-center my-5">{eve.eventName}</div>
                        <div className="flex justify-between mx-5 my-4 md:text-xl text-base">
                            <div className="mx-5">Start : {eve.startTime}</div>
                            <div className="mx-5">End : {eve.endTime}</div>
                        </div>
                        <div className="md:text-lg text-xs mx-5 mt-2 mb-5 text-gray-500">
                            <span className='underline'> Description : </span> {eve.description}
                        </div>
                    </div>
                })}

            </div>
        </div>)
    }

    const FutureEvent = () => {
        return (<div>
            <div className="text-center text-4xl mb-8 pt-4 text-white">List of all future events</div>

            <div className="my-2 flex justify-center items-center flex-col">


                {futureevents.map((eve, index) => {
                    return <div key={index} className="w-9/12 h-auto bg-gray-700 text-white flex flex-col rounded-lg m-4 shadow-2xl">
                        <div className="flex flex-col justify-center lg:h-80 h-60 border-b-2">
                            <div className="flex justify-center lg:text-4xl text-3xl">Next Event On</div>
                        </div>
                        <div className="md:text-2xl text-base text-center my-3">{eve.eventName}</div>
                        <div className="flex justify-between mx-5 my-2 md:text-xl text-base">
                            <div className="mx-5">Start :{eve.startTime}</div>
                            <div className="mx-5">End :{eve.endTime} </div>
                        </div>
                        <div className="md:text-lg text-xs mx-5 mt-2 text-gray-300">
                            <span className='underline'> Description : </span>{eve.description}
                        </div>
                        <div className="flex justify-center">
                            <div className="my-10 text-center text-xl border-2 border-red-500 px-5 py-2 rounded-xl w-11/12 cursor-pointer hover:bg-red-500 duration-200">Book a seat</div>
                        </div>
                    </div>
                })}


            </div>
        </div>)
    }


    const [currentEvent, showEvents] = useState(
        <h1 className='text-center text-3xl text-white p-5'>Click on the buttons above to see the events</h1>
    )


    return (


        <div className='relative top-0 right-0 left-0 bottom-0 bg-blue-300 '>

            {/* The below code is of top navbar */}

            <Navbar>
                <NavIcon />
            </Navbar>
            <div className="flex justify-between bg-blue-400 md:text-2xl text-xl text-white">
                <div className="text-center w-full h-full py-5 border-r-2 cursor-pointer" onClick={() => showEvents(PastEvent)}>Past Events</div>
                <div className="text-center w-full h-full py-5 border-l-2 cursor-pointer" onClick={() => showEvents(FutureEvent)}>Future Events</div>
            </div>

            {/* The below code is of the main display page */}

            {currentEvent}


            <Footer />
        </div>


    )
}

export default Eventpage