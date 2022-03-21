import "./Login.css";
import { useRef } from "react";
import axios from "axios";

const Login = (props) => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  // console.log(props);
  return (
    <div className="loginBox">
      <div className="inputBox">
        <input
          className="inputLogin"
          placeholder="    username"
          ref={userNameRef}
        ></input>
        <input
          className="inputLogin"
          placeholder="    password"
          type="password"
          ref={passwordRef}
        ></input>

        <button
          className="inputSignin"
          onClick={() => {
            props.onLogin();
            console.log("clicked");
            // console.log(userNameRef.current.value);
            // console.log(passwordRef.current.value);
            axios.post("/signin", {
              userName: userNameRef.current.value,
              password: passwordRef.current.value,
            });
          }}
        >
          sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
