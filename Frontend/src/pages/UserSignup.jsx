import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'
import { UserDataContext } from "../context/UserContext";


const UserSignup = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[firstname,setFirstname] = useState("")
    const[lastname,setLastname] = useState("")
    const[userData,setUserData] = useState({})

    const navigate = useNavigate()

    const {user,setUser} = React.useContext(UserDataContext)

    const submitHandler = async (e)=>{
        e.preventDefault()
        const newUser ={
            fullname :{
                firstname:firstname,
                lastname:lastname
            },
            email:email,
            password:password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`,newUser)

        if(response.status ===201){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/home')
        }

        setEmail('')
        setPassword('')
        setFirstname('')
        setLastname('')
    }
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
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
                    setFirstname(e.target.value)
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
                Create Account
            </button>
            <p className="text-center">Already have a account? <Link to= '/login' className="text-blue-600">Login here</Link></p>
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
export default UserSignup;