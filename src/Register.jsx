import React from 'react'
import { useState } from 'react'
import axios from "axios";
import './login.css'
import Rout from './Rout';
import Login from './Login';
import { Link } from 'react-router-dom';
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        {
          name,
          email,
          password,
        }
      );

      setMessage(response.data.message);

      console.log(response.data.user);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <>
    <Rout/>
    <div className="container">
      <div className="login-box">

        <h1>Welcome Back 👋</h1>

        <p>Create a new account</p>

        <form onSubmit={handleRegister}>

          <label>Name</label>

          <input id="log"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input id="log"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input id="log"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button id='logi' type="submit">
            Sign Up
          </button>
          <Link to={'/Login'}><button id='back'>Go Back</button></Link>

        </form>

        {message && (
          <p style={{color:message=="Registration Failed"? "red":"green"}} className="message">
            {message}
          </p>
        )}

      </div>
    </div></>
  );
}
export default Register;