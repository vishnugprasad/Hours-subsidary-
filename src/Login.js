import "./Login.css";
import { useState } from "react";
import axios from "axios";

const Login = (props) => {
    const [employeName, setEmployeeName] = useState("");
  const [userPassword, setPassword] = useState("");
  const[errorNot, setErrorNot] = useState(false)  // error notification using ustate//
  return (
    <div className=" loginModule">
      {/* <div className ="logo"></div> */}
      <div className="infoBox">
        <h1 className="text">We are turning into a Hybrid Workforce</h1>
        <h2 className="text2">
          Now you can confidently return back to your work station. Book your
          space in advance and use our resources efficiently
        </h2>
        <h2 className="text3">"We Make Flexible Working A Reality"</h2>
      </div>
      <div className="message">Employeename: admin
        Password: password
      </div>
      <div className="loginBox">
        <div className="inputBox">
          <input
            value={employeName}
            onChange={(e) => {
              setEmployeeName(e.target.value);
            }}
            className="inputLogin"
            placeholder="    Employee ID"
          ></input>
          <input
            className="inputLogin"
            placeholder="    Password"
            type="password"
            value={userPassword}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>

          {errorNot === true ? <div className="errorNotification">invalid credential</div>: null}  

          {/* checking the conditions and making the div visible or invisible */}

          <button
            disabled={!Boolean(employeName && userPassword)}
            className="inputSignin"
            onClick={() => {
              if ((employeName === "vishnu" && userPassword === "123456")||(employeName === "admin" && userPassword === "password")) {
                props.onLogin();

                axios.post("/signin", {});
              }

              else{
                setErrorNot(true); // setting the error notification using useState//
              }

              
              
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
