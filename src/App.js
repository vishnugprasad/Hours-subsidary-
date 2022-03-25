import Login from "./Login";
import { useState } from "react";
import DropMenu from "./Dropdown";
import "./App.css";
import Seatbookin from "./Seatbookin";

function App() {
  
  const [login, setLogin] = useState(true);
  const className =  login === true ? "bodyLogin" : "bookingBackGround";
 
  const loginHandler = () => {                   
    setLogin(false);
  };
  return (
    <div className={`dropMenu ${className}`}>
      <DropMenu></DropMenu>

      
        {login === true ? (
          <Login onLogin={loginHandler}></Login>      /*  is loginHandler invoked here ?*/
        ) : (
          <Seatbookin ></Seatbookin>
        )}
      
    </div>
  );
}

export default App;
