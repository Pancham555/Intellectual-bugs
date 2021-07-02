// import React, { useState, useEffect } from 'react'
// import './../../App.css'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { useHistory } from 'react-router-dom'

// function testPage() {
//     const history = useHistory()

//     let Question = (props) => {
//         return <div className=''>{props.question}</div>
//     }

//     let Option = (props) => {
//         return <div className="text-center text-white bg-black py-2 my-2 text-xl  rounded-3xl  cursor-pointer">{props.answer}</div>
//     }
//     const optionArr = [
//         {
//             id: 1,
//             option: 'Captcha'
//         },
//         {
//             id: 2,
//             option: 'Virtual Assistant'
//         },
//         {
//             id: 3,
//             option: 'A robot'
//         },
//         {
//             id: 4,
//             option: 'None of these'
//         }
//     ]


//     return (
//         <div className='overflow-x-hidden'>

//             <div className="absolute top-5 right-10 cursor-pointer text-5xl" onClick={() => history.goBack()}>&times;</div>

//             <div className="  mx-auto mt-24 shadow-2xl w-1/2 h-auto  border-4">
//                 <div className="mt-5 mx-16">

//                     <div className="flex text-3xl my-2">
//                         Q.<Question question="What is a bot ?" />
//                     </div>

//                     <div className="flex flex-col justify-center mt-2">

//                         {optionArr.map((props) => {
//                             return (
//                                 <Option answer={props.option} key={props.id} />
//                             )
//                         })}

//                         <div className="w-full flex justify-center">
//                             <div className="flex float-right mx-0 mr-0 py-10">
//                                 <div className="border-2 border-red-500 text-red-500 cursor-pointer mx-5 px-4 py-2 rounded-xl hover:text-white hover:bg-red-500 duration-200">Previous</div>
//                                 <div className="border-2 border-blue-500 text-blue-500 cursor-pointer mx-5 px-4 py-2 rounded-xl hover:text-white hover:bg-blue-500 duration-200">Next</div>
//                             </div></div>
//                     </div>

//                 </div>

//             </div>
//         </div>
//     )
// }

// export default testPage

import React from 'react'
import { useHistory } from 'react-router-dom'

function TestPage() {
    const history = useHistory()
    return (
        <div className='relative top-0 left-0 right-0 bottom-0 flex justify-center'>
            <div className="w-3/4 mt-16 h-auto">
                <div className="text-center text-xl my-2">Welcome, Pancham</div>
                <div className="text-center text-2xl mb-2 mx-5">Question: 1</div>
                <div className="w-full box-content border-2 border-black h-auto">
                    <div className="text-center text-xl font-semibold my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="w-full h-auto flex flex-wrap justify-around">
                        <div className="border-black border rounded-md md:w-5/12 w-36 my-4 py-2 bg-gray-400 p-2 cursor-pointer text-white hover:bg-gray-500 duration-200 shadow-2xl">Option</div>
                        <div className="border-black border rounded-md md:w-5/12 w-36 my-4 py-2 bg-gray-400 p-2 cursor-pointer text-white hover:bg-gray-500 duration-200 shadow-2xl">Option</div>
                        <div className="border-black border rounded-md md:w-5/12 w-36 my-4 py-2 bg-gray-400 p-2 cursor-pointer text-white hover:bg-gray-500 duration-200 shadow-2xl">Option</div>
                        <div className="border-black border rounded-md md:w-5/12 w-36 my-4 py-2 bg-gray-400 p-2 cursor-pointer text-white hover:bg-gray-500 duration-200 shadow-2xl">Option</div>
                    </div>
                    <div className="flex justify-around my-8">
                        <div className="md:w-3/12 w-32 mx-5 text-center rounded-lg border-2 p-2 bg-white font-medium border-red-400 hover:border-red-500 hover:bg-red-50 duration-200 text-red-500  cursor-pointer" onClick={() => history.push('/testselection')}>Quit</div>
                        <div className="md:w-3/12 w-32 mx-5 text-center rounded-lg border-2 p-2 bg-white font-medium border-blue-400 hover:border-blue-500 hover:bg-blue-50 duration-200 text-blue-500  cursor-pointer" onClick={() => history.push('/test')}>Next</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestPage

