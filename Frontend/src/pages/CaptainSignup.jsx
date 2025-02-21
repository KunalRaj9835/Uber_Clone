import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {

    const navigate = useNavigate()

    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[firstname,setFirstname] = useState("")
    const[lastname,setLastname] = useState("")
    const[userData,setUserData] = useState({})
    
    const [ vehicleColor, setVehicleColor ] = useState('')
    const [ vehiclePlate, setVehiclePlate ] = useState('')
    const [ vehicleCapacity, setVehicleCapacity ] = useState('')
    const [ vehicleType, setVehicleType ] = useState('')

    const {captain,setCaptain} = React.useContext(CaptainDataContext)

    const submitHandler = async(e)=>{
        e.preventDefault()
        const CaptainData ={
            fullname :{
                firstname:firstname,
                lastname:lastname
            },
            email:email,
            password:password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,CaptainData)

        if(response.status === 201){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token',data.token)
            navigate('/captain-home')
        }

        setEmail('')
        setPassword('')
        setFirstname('')
        setLastname('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
    }
    return (
        <div className="py-5 px-5 h-screen flex flex-col justify-between">
        <div>
        <img className="w-16 mb-4" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=""/>
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
            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
            <button 
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border  w-full text-base placeholder:text-sm">
                Create Captain Account
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