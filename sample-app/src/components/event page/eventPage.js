import React, { useState, useEffect } from 'react'
import './../../App.css'
import Share from './../../assets/share.png'
import Navbar from './../navbar/navbar'
import NavIcon from './../navbar icons/navbarIcon'
import Accordion from './../courses page/Course components/Accordion'
import Footer from './../footer/footer'
import { motion } from 'framer-motion'
import { auto } from 'async'
import axios from 'axios'

function EventPage() {

    const url = "https://localhost:5001/";
    const [events, setEvents] = useState([])
    const [futureEvents, setFutureEvents] = useState([])
    const getEvents = () => {
        axios.get(`${url}event`)
            .then((response) => {
                const allEvents = response.data;
                setEvents(allEvents);
            }).catch(error => console.log(`Error : ${error}`))
    }

    const getFutureEvents = () => {
        axios.get(`${url}event/FutureEvents`)
            .then((response) => {
                const allEvents = response.data;
                setFutureEvents(allEvents);
            }).catch(error => console.log(`Error : ${error}`))
    }

    const [pastEvent, futureEvent] = useState(true);

    useEffect(() => {
        if (pastEvent) {
            if (events.length === 0) {
                getEvents();
                console.log('Namaste');

            }
        } else {
            if (futureEvents.length === 0)
                getFutureEvents();
        }
    }, [pastEvent, events, futureEvents]);



    return (
        <div>
            <Navbar>
                <NavIcon colorC="text-black" colorSecC='text-black font-semibold' />
            </Navbar>
            <div className="sticky top-0 left-0 right-0 bg-blue-400 flex text-center text-xl text-white">
                <div className="w-1/2 border-r-2 py-2 cursor-pointer" onClick={() => futureEvent(true)}>Past Events</div>
                <div className="w-1/2 border-l-2 py-2 cursor-pointer" onClick={() => futureEvent(false)}>Future Events</div>
            </div>
            <div className='flex justify-center mt-10 w-full text-base flex-wrap'>

                {(pastEvent) ?
                    events.map((props) => {
                        const Booking = () => {
                            alert("Your ticket is booked")
                            //sending part goes here
                        }
                        const Sharer = () => {
                            alert("Share this event using the link 👉 http://localhost:3000/events")
                        }
                        return (
                            <div key={props.eventId} className="w-96 rounded-md border-2 h-full relative m-4 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between m-2">
                                        <div className="mx-2 flex flex-col"><span>{props.eventName}</span>
                                            <div className="text-sm flex flex-col">
                                                <span className='text-gray-500 my-1'>Started on {props.startTime}</span>
                                                <span className='text-gray-500 my-1'>Ended on {props.endTime}</span>
                                            </div>
                                        </div>
                                        <div className="font-extrabold cursor-pointer text-2xl text-gray-400 mx-2">
                                            <img src={Share} alt="" className='w-4 h-4 my-2' onClick={Sharer} />
                                        </div>
                                    </div>

                                    <iframe src={props.eventURL} frameBorder="0" className='w-full h-44' allowFullScreen></iframe>

                                    <div className="m-2 text-gray-500">{props.description}</div>
                                </div>
                                <div className=" mt-5 mb-2 text-gray-500 mx-5 flex justify-between">
                                    <div className="my-auto">Participants : {props.attendee}</div>

                                    <Accordion heading="Panelists">
                                        {props.panelists.map((prom, num) => {
                                            return (
                                                <div key={num} className="py-1 px-2">{prom}</div>
                                            )
                                        })}
                                    </Accordion>

                                </div>
                                <motion.div
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "tween" }}
                                    className="bg-blue-500 text-white rounded-3xl text-center text-xl
                                    p-2 m-5 cursor-pointer"onClick={Booking}>Attend
                                </motion.div>
                            </div>
                        )
                    })

                    :

                    futureEvents.map((props) => {
                        let add = 0
                        const Booking = () => {
                            alert("Your ticket is booked")
                            console.log(props.eventId)
                            //sending part goes here
                        }
                        const Sharer = () => {
                            alert("Share this event using the link 👉 http://localhost:3000/events")
                        }

                        return (
                            <div key={props.eventId} className="w-96 rounded-md border-2 h-full relative m-4 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between m-2 relative">
                                        <div className="mx-2 flex flex-col"><span>{props.eventName}</span>
                                            <div className="text-sm flex flex-col">
                                                <span className='text-gray-500 my-1'>Starts in {props.startTime}</span>
                                            </div>
                                        </div>
                                        <div className="font-extrabold cursor-pointer text-2xl text-gray-500 mx-2" >
                                            <img src={Share} alt="" className='w-4 h-4 my-2' onClick={Sharer} />
                                        </div>
                                    </div>

                                    <div className="w-full h-44 bg-purple-600 text-white flex flex-col justify-center">
                                        <div className="flex justify-center text-2xl">New Event Coming Soon</div>
                                    </div>

                                    <div className="m-2 text-gray-500">{props.description}</div>
                                </div>
                                <div className=" mt-5 mb-2 text-gray-500 mx-5 flex justify-between">
                                    <div className="my-auto">Participants : {props.attendee + add}</div>


                                    <Accordion heading="Panelists">
                                        {props.panelists.map((prom, num) => {
                                            return (
                                                <div key={num} className="py-1 px-2">{prom}</div>
                                            )
                                        })}
                                    </Accordion>

                                </div>
                                <motion.div
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "tween" }}
                                    className="bg-blue-500 text-white rounded-3xl text-center text-xl
                                    p-2 m-5 cursor-pointer" onClick={Booking}>Attend
                                </motion.div>
                            </div>
                        )
                    })

                }







            </div>
            <Footer />
        </div >)
}

export default EventPage

