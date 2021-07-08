import React, { useCallback, useState } from 'react'
import './../../App.css'
// import { Redirect, Route } from 'react-router-dom'
import Navbar from './../navbar/navbar'
import CoursesBackPage from './../../assets/19362653.jpg'
import { motion } from 'framer-motion'
// import ReactPage from './react'
import { useHistory } from "react-router-dom"
// import Angular from './Angular'
import ReactImage from './../../assets/ReactImage.png'
import CSharpImage from './../../assets/CSharp.jpg'
import BlenderImage from './../../assets/Blender.jpg'
import MongoDBImage from './../../assets/MongoDB.jpg'
import NodejsImage from './../../assets/Nodejs.png'
import AngularImage from './../../assets/Angular.png'
import NavIcon from './../navbar icons/navbarIcon'
import Footer from './../footer/footer'

function CoursesPage() {

    const courses = [
        {
            id: 1,
            name: "React",
            location: '/courses/react',
            image: ReactImage
        },
        {
            id: 2,
            name: "Angular",
            location: '/courses/angular',
            image: AngularImage
        },
        {
            id: 3,
            name: "Nodejs",
            location: '/courses/node',
            image: NodejsImage
        },
        {
            id: 4,
            name: "Blender",
            location: '/courses/blender',
            image: BlenderImage
        },
        {
            id: 5,
            name: "MongoDB",
            location: '/courses/mongodb',
            image: MongoDBImage
        }, ,
        {
            id: 6,
            name: "C#",
            location: '/courses/csharp',
            image: CSharpImage
        }
    ]

    const history = useHistory();
    const [num, setNum] = useState(0)

    return (
        <div className='relative top-0 right-0 left-0 bottom-0 bg-blue-300 '>
            <Navbar>
                <NavIcon colorA="text-black" colorSecA='text-black font-semibold' />
            </Navbar>

            <div className="flex flex-wrap justify-center items-center bg-transparent z-10 p-5">
                {courses.map(course => {
                    const pusher = () => {
                        history.push(course.location)
                        setNum(course.id)
                    }
                    return (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            key={course.id}
                            className="m-3 bg-white min-w-min w-80 h-60 rounded-2xl cursor-pointer flex flex-col shadow-2xl"
                            onClick={pusher}
                        >
                            <img src={course.image} alt="" className='rounded-t-2xl h-3/5 border-b-2' />
                            <div className=" text-center text-2xl my-5">{course.name}</div>
                        </motion.div>

                    )
                })}
            </div>
            <Footer />

        </div>
    )
}

export default CoursesPage
