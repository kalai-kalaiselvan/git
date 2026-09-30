import { useState } from 'react'
import axios from "axios";
import { Link, Route } from 'react-router-dom';
import './login.css'
import Rout from './Rout';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        }
      );

      setMessage(response.data.message);

      console.log(response.data.user);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <>
    <Rout/>
    <div className="container">
      <div className="login-box">

        <h1>Welcome Back 👋</h1>

        <p>Login to your account</p>

        <form onSubmit={handleLogin}>

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
            Login
          </button>

        </form>
        <p>Don't have an account? <Link to={'/Register'}>Sign Up</Link></p>

        {message && (<p style={{color:message=="Login Successfull"? "green":"red"}} className="message"> {message}</p>)}

      </div>
    </div></>
  );
}

export default Login;

