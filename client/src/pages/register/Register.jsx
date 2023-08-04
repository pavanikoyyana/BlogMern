import { NavLink } from "react-router-dom";
import "./register.css";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Register() {
  const{BASE_URL}=useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/register`, { username, email, password });
    //   console.log(res);
   
      res && window.location.replace("/login");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username.."
          className="registerInput"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email.."
          className="registerInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password.."
          className="registerInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="Submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <NavLink className="link" to="/login">
          Login
        </NavLink>
      </button>
      {error && <span style={{color:'red',marginTop:"10px"}}>Something went wrong !</span>} 
    </div>
  );
}
