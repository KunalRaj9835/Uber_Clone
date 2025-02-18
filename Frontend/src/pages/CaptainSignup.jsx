import React, { useState } from "react";
import { Link } from "react-router-dom";
const CaptainSignup = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[firstname,setFristname] = useState("")
    const[lastname,setLastname] = useState("")
    const[userData,setUserData] = useState({})
    
    const submitHandler = (e)=>{
        e.preventDefault()
        setUserData({
            fullName :{
                firstname:firstname,
                lastname:lastname
            },
            email:email,
            password:password
        })
        setEmail('')
        setPassword('')
        setFristname('')
        setLastname('')
    }
    return (
        <div className="py-5 px-5 h-screen flex flex-col justify-between">
        <div>
        <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=""/>
        <form onSubmit={(e) =>{
            submitHandler(e)
        }}>
            <h3 className="text-base font-medium mb-2"> What's your name</h3>
            <div className="flex gap-4 mb-6">
            <input 
                required 
                value={firstname}
                onChange={(e) => {
                    setFristname(e.target.value)
                }}
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm"
                type="text" 
                placeholder="Firstname"/>
                <input 
                required 
                value={lastname}
                onChange={(e) => {
                    setLastname(e.target.value)
                }}
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm"
                type="text" 
                placeholder="Lastname"/>
            </div>
            <h3 className="text-base font-medium mb-2"> What's your email</h3>
            <input 
                required
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
                type="email" 
                placeholder="email@example.com"/>
            <h3 className="text-base font-medium  mb-2">Enter Password</h3>
            <input 
                required
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm" 
                type="password" 
                placeholder="password"/>
            <button 
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border  w-full text-base placeholder:text-sm">
                Login
            </button>
            <p className="text-center">Already have a account? <Link to= '/captain-login' className="text-blue-600">Login here</Link></p>
        </form>
        </div> 
        <div>
            <p className="text-[10px] leading-tight text-center">
            By continuing, you acknowledge and agree to our Terms and Conditions and Privacy Policy. You consent to the collection, use, and processing of your data as outlined in our policies
            </p>
        </div>       
    </div>
    )
}
export default CaptainSignup;