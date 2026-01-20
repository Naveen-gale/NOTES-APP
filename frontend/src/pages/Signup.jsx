import React, { useState } from 'react'
import axios from 'axios' // FIX 3: Added import
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Signup = () => { // FIX 4: Capitalized
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navegate = useNavigate()
   

    const handelSubmit = async (e) => {
      e.preventDefault(); // CRITICAL: Stops the page from refreshing
      try {
            // FIX 2: Changed port to 3000 to match your server
            const response = await axios.post("http://localhost:3000/api/auth/register", { name, email, password })
            console.log("Success:", response.data)
             setemail("")
    setpassword("")
    setname("")
    alert("User created successfully")
    if(response.data.success){
      navegate('/login')
      
    }
      } catch (err) {
            console.log("Error:", err)
      }
   
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      {/* FIX 1: Changed onChange to onSubmit */}
      <form onSubmit={handelSubmit} className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
          <input 
            type="text" 
            
            onChange={(e)=>setname(e.target.value)}
            value={name}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
          <input 
          value={email}
            type="email" 
            onChange={(e)=>setemail(e.target.value)}
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-1">Password</label>
          <input 
            type="password"
            value={password} 
            onChange={(e)=>setpassword(e.target.value)}
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="••••••••"
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg shadow-md">
          Sign Up
        </button>
        <p>Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link></p>
      </form>
    </div>
  )
}

export default Signup