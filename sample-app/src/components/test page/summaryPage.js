import React, { useEffect } from 'react'
import './../../App.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

const SummaryPage = () => {
    const nameShow = useSelector(state => state.change)
    const emailShow = useSelector(state => state.change3)
    const testId = useSelector(state => state.change6)

    const getScore = () => {
        axios.post(`https://localhost:5001/test/score?id=${testId}&emailId=${emailShow}`)
            .then((res) => {
                console.log("Response", res.data)
            }).catch((err) => {
                console.log("Error", err)
            })
    }
    useEffect(() => {
        getScore()

    }, [])
    return (
        <div className="flex flex-col justify-center">
            <div className="flex justify-center mt-6 my-4 w-screen">
                <div className='flex justify-between m-5 flex-wrap font-serif w-9/12'>
                    <div className="md:w-6/12 w-96 border-yellow-500 border-2 rounded-lg h-auto my-5 order-2 lg:order-1">
                        <div className="m-5 ">
                            <div className="my-2 font-medium text-xl">Correct answers:</div>
                            <div className="my-2 font-medium text-xl">Wrong answers:</div>
                        </div>
                    </div>
                    <div className="w-96 border-yellow-500 border-2 rounded-lg h-auto my-5 order-1 lg:order-2">
                        <div className="mx-5 my-4 text-xl text-center">Congratulations {nameShow} 🎊 🎊 🎊 </div>
                        {/* Remove this after everything went correct */}
                        <button onClick={() => getScore()}>Click</button>
                        {/* Remove this after everything went correct */}
                    </div>
                </div>
            </div>
            <Link to='/testselection'>
                <div className="flex justify-center my-4">
                    <div className="md:w-3/12 w-32 mx-5 text-center rounded-lg border-2 p-2 bg-white font-medium border-green-400 hover:border-green-500 hover:bg-green-100 duration-200 text-green-500  cursor-pointer">Return to test page</div>
                </div>
            </Link>
        </div>
    )
}

export default SummaryPage
