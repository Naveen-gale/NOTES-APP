import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/ContextProvider"

const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()
  const { setUser } = useAuth()   // 🔥 THIS LINE WAS MISSING

  const handelSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password }
      )

      // Save token + user
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user", JSON.stringify(response.data.user))

      // Update context
      setUser(response.data.user)

      alert(response.data.message)
      navigate("/")

      setemail("")
      setpassword("")

    } catch (err) {
      console.log("Login Error:", err)

      if (err.response && err.response.data) {
        alert(err.response.data.message)
      } else {
        alert("Server error, try again later")
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <form onSubmit={handelSubmit} className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-1">Password</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="••••••••"
          />
        </div>

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-lg shadow-md">
          Login
        </button>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
