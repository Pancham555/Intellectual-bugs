import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './../../App.css'
import Navbar from './../navbar/navbar'

function SignIn() {


    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailErr, setEmailErr] = useState({})
    const [passwordErr, setPasswordErr] = useState({})
    const SubmitForm = (e) => {
        e.preventDefault()
        const isValid = validation()
        if (isValid) {
            setEmail("")
            setPassword("")

            history.push('/selection')
            //comment this only when the backend is running

            //Sending part goes here
            axios.post('https://localhost:5001/user/login',
                // data
            )
                .then(res => {
                    console.log(res)
                    if (res[0].result !== null) {
                        //res.data[0].result !== null
                        if (res[0].result === "False") {
                            //res.data[0].result === "False"
                            setLoginSuccess(res[0].message)
                            //setLoginSuccess(res.data[0].message)
                        } else {
                            // history.push("/selection")
                            //uncomment this only when the backend is running
                        }

                    }
                }).catch(err => {
                    console.log(err)
                })
        }
    }
    const validation = () => {
        const emailError = {}
        const passwordError = {}
        let valid = true
        if (!email.includes("@")) {
            emailError.Error = 'You email must contain @'
            valid = false
        }
        if ((!(password.includes("1"))) &&
            (!(password.includes("2"))) &&
            (!(password.includes("3"))) &&
            (!(password.includes("4"))) &&
            (!(password.includes("5"))) &&
            (!(password.includes("6"))) &&
            (!(password.includes("7"))) &&
            (!(password.includes("8"))) &&
            (!(password.includes("9"))) &&
            (!(password.includes("0")))
        ) {
            passwordError.Error = 'Your password must contain number/s'
            valid = false
        }
        setEmailErr(emailError)
        setPasswordErr(passwordError)
        return valid
    }
    const Clear = () => {
        setEmail("")
        setPassword("")
    }
    return (
        <>
            <Navbar />
            <div className="flex justify-center">
                <form onSubmit={SubmitForm} className="text-sm shadow-2xl w-11/12 md:w-5/12 h-auto mt-16 mb-2 pb-5 rounded-2xl border-4 flex justify-center flex-col items-center">
                    <div className="text-2xl my-5">Sign In</div>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="my-4 w-3/4 outline-none border-b-2" placeholder="Email" />
                    {Object.keys(emailErr).map((key, index) => {
                        return <div key={index} className='text-red-600 text-center'>{emailErr[key]}</div>
                    })}
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="" id="" className="my-4 w-3/4 outline-none border-b-2" placeholder="Password" />
                    {Object.keys(passwordErr).map((key, index) => {
                        return <div key={index} className='text-red-600 text-center'>{passwordErr[key]}</div>
                    })}
                    <div className="flex justify-between w-full px-16 pt-6 pb-4">
                        <button type="button" className="text-xs md:text-sm border-2 border-black outline-none px-2 py-1 rounded-lg"
                            onClick={Clear}
                        >Clear All</button>
                        <button type="submit" className="text-xs md:text-sm border-2 border-black outline-none px-2 py-1 rounded-lg"
                        >Submit</button>
                    </div>
                    <div className="text-center">Didn't have an account ? <span className='text-blue-500 cursor-pointer' onClick={() => history.push('/signup')}> Sign Up </span></div>
                </form>
            </div>
        </>
    )
}

export default SignIn





