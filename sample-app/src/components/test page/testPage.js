import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios"
import { useSelector } from 'react-redux'

function TestPage() {

    const statmail = useSelector(state => state.change3)
    const state = useSelector(state => state.change4)
    const stateSec = useSelector(state => state.change5)
    const [arrLen, setArrLen] = useState(0)
    const [data, setData] = useState(
        {
            "optionList": {}

        }
    )
    const [num, setNum] = useState(0)
    const [answers, setAnswers] = useState('')
    const [response, setResponse] = useState()
    const getQuestions = () => {
        axios.get(`https://localhost:5001/test?id=${state}&levelName=${stateSec}`)
            .then((res) => {
                const allEvents = res.data[num];
                setArrLen(res.data)
                if (allEvents === undefined) {
                    setData(
                        {
                            "questionId": 0,
                            "question": "",
                            "optionList": {
                                "optionId": 0,
                                "optionA": "",
                                "optionB": "",
                                "optionC": "",
                                "optionD": "",
                                "questionId": 0
                            },
                            "answer": null,
                            "typeOfQuestion": "",
                            "testId": 0
                        }
                    )
                    console.log(allEvents)
                }
                else {
                    setData(allEvents)
                }

            }).catch((err) => { console.log(`Error : ${err}`) })
    }

    const getAnswers = () => {
        axios.post(`https://localhost:5001/test?id=${data.questionId}&emailId=${statmail}&answer=${answers}`)
            .then((res) => {
                // console.log(res)
                setResponse(res.data.message)
            }).catch((err) => {
                console.log(err)
            })
    }


    const history = useHistory()
    const increaser = () => {
        if (num < (arrLen.length - 1)) {
            setNum(num + 1)
            setResponse("")
            setAnswers("")
        }
    }
    const decreaser = () => {
        if (num > 0) {
            setNum(num - 1)
            setResponse("")
            setAnswers("")
        }
    }
    const checker = () => {
        if (answers.length === 0) {
            setResponse("Please choose an option to continue")
        }
        else {
            getAnswers()
        }

    }

    const optionA = (e) => {
        setAnswers(`${data.optionList.optionA}`)
        // console.log(data.optionList.optionA)

    }
    const optionB = () => {
        setAnswers(`${data.optionList.optionB}`)
        // console.log(data.optionList.optionB)

    }
    const optionC = () => {
        setAnswers(`${data.optionList.optionC}`)
        // console.log(data.optionList.optionC)

    }
    const optionD = () => {
        setAnswers(`${data.optionList.optionD}`)
        // console.log(data.optionList.optionD)

    }
    const score = () => {
        // axios.post("")
    }

    let [min, setMin] = useState(10)
    let [sec, setSec] = useState(59)


    useEffect(() => {
        getQuestions()

        const timer = setInterval(() => {
            if (sec > 0) {
                setSec(sec - 1)
            }
            else if (min === 0 && sec === 0) {
                setSec(0)
                setMin(0)
                // alert("Opps! Time out")
            }
            else if (sec === 0) {
                setSec(60)
                setMin(min - 1)
            }
        }, 1000);
        return () => clearInterval(timer)

    }, [num, sec])
    return (
        <div className='relative top-0 left-0 right-0 bottom-0 flex justify-center'>
            {/* <div className="absolute top-6 left-20 cursor-pointer font-medium text-xl" onClick={decreaser}>⬅Back</div> */}
            <div className="w-3/4 mt-10 h-auto">
                <div className="text-center text-xl my-2">Welcome, Pancham</div>

                <div className="w-full">
                    <div className="text-center text-2xl mb-2 mx-5">Question: {num + 1}</div>
                    <div className="w-full box-content border-2 border-black h-auto relative">
                        <div className="text-center text-xl font-semibold my-4">{data.question}</div>
                        <div className="absolute top-0 right-0 mx-5 my-3 font-semibold">Time left: {min} :{sec < 10 ? 0 : null}{sec} </div>
                        <div className="w-full h-auto flex flex-wrap justify-around">
                            <div className={`border-black bg-blue-500 hover:bg-blue-400 border rounded-md md:w-5/12 w-36 my-4 py-2 p-2 cursor-pointer text-white duration-200 shadow-2xl`}
                                // style={{ backgroundColor: "#334257" }}
                                onClick={optionA}>{data.optionList.optionA}</div>
                            <div className={`border-black bg-blue-500 hover:bg-blue-400 border rounded-md md:w-5/12 w-36 my-4 py-2 p-2 cursor-pointer text-white duration-200 shadow-2xl`}
                                // style={{ backgroundColor: "#334257" }}
                                onClick={optionB}>{data.optionList.optionB}</div>
                            <div className={`border-black bg-blue-500 hover:bg-blue-400 border rounded-md md:w-5/12 w-36 my-4 py-2 p-2 cursor-pointer text-white duration-200 shadow-2xl`}
                                // style={{ backgroundColor: "#334257" }}
                                onClick={optionC}>{data.optionList.optionC}</div>
                            <div className={`border-black bg-blue-500 hover:bg-blue-400 border rounded-md md:w-5/12 w-36 my-4 py-2 p-2 cursor-pointer text-white duration-200 shadow-2xl`}
                                // style={{ backgroundColor: "#334257" }}
                                onClick={optionD}>{data.optionList.optionD}</div>
                        </div>
                        <div className={`my-2 mx-12 font-medium text-lg`}>Your answer : <span className={`${response === "CORRECT ANSWER!" ? "text-green-400" : ""} ${response === "WRONG ANSWER!" ? "text-red-400" : ""}`}> {answers}</span></div>
                        <div className={`my-2 mx-12 font-medium text-lg ${response === "CORRECT ANSWER!" ? "text-green-400" : ""} ${response === "WRONG ANSWER!" ? "text-red-400" : ""}`}>{response}</div>
                        <div className="flex justify-around my-8">
                            <div className="md:w-3/12 w-32 mx-5 text-center rounded-lg border-2 p-2 bg-white font-medium border-red-400 hover:border-red-500 hover:bg-red-100 duration-200 text-red-500  cursor-pointer" onClick={() => history.push('/testselection')}>Quit</div>
                            {(!(min === 0 && sec === 0)) ?
                                <>

                                    {
                                        data.question === "" ? null :
                                            <>
                                                <div className="md:w-3/12 w-32 mx-5 text-center rounded-lg border-2 p-2 bg-white font-medium border-blue-400 hover:border-blue-500 hover:bg-blue-100 duration-200 text-blue-500  cursor-pointer" onClick={increaser} >Next</div>
                                            </>
                                    }
                                    {data.question === "" ? null :
                                        <>
                                            <div className="md:w-3/12 w-32 mx-5 text-center rounded-lg border-2 p-2 bg-white font-medium border-green-400 hover:border-green-500 hover:bg-green-100 duration-200 text-green-500  cursor-pointer" onClick={checker} >Check answer</div>
                                        </>
                                    }

                                </> : <h1 className='font-semibold text-center text-xl'>Opps! Time Out</h1>
                            }

                        </div>
                    </div>
                </div>

                {num === (arrLen.length - 1)
                    && response
                    ?
                    <div className="flex justify-center my-4">
                        <div className="md:w-3/12 w-32 mx-5 text-center rounded-lg border-2 p-2 bg-white font-medium border-green-400 hover:border-green-500 hover:bg-green-100 duration-200 text-green-500  cursor-pointer" onClick={score}>View Score</div>
                    </div>
                    : null}
            </div>
        </div >
    )
}

export default TestPage

