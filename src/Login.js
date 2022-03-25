import "./Login.css";
import { useRef, useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [employeName, setEmployeeName] = useState("")
  const[userPassword, setPassword] = useState("")
    return (
    <div className=" loginModule">
      <div className="infoBox">
        <h1 className="text">We are turning into a Hybrid Workforce</h1>
        <h2 className = "text2">Now you can confidently return back to your work station.
        Book your space in advance and use our resources efficiently 
        </h2>
        <h2 className="text3">"We Make Flexible Working A Reality"</h2>
      </div>
    <div className="loginBox">
      <div className="inputBox">
        <input
        value = {employeName}
        onChange = {(e)=> {
          setEmployeeName(e.target.value)
          
        }}
          className="inputLogin"
          placeholder="    Employee ID"
          
        ></input>
        <input
          className="inputLogin"
          placeholder="    Password"
          type="password"
          value = {userPassword}
          onChange = {(e)=> {
            setPassword(e.target.value)
          }}
          
        ></input>

        <button 
        disabled = {!Boolean(employeName && userPassword)}

          className="inputSignin"
          onClick={() => {
            props.onLogin();
            console.log("clicked");
                        axios.post("/signin", {
              
            });
          }}
        >
          Sign In
        </button>
      </div>
    </div>
    </div>
  );
};

export default Login;
