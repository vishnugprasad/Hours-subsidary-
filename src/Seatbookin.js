import "./Seatbookin.css";
import Calendar from "./Calendar";
import { useEffect, useState } from "react";

// function getInitialState() {
//   const seatArray = [];
//   for (let i = 0; i < 32; i++) {
//     //creating an array of 32 numbers
//     seatArray.push(i);
//   }
//   return seatArray;
// } 

const Seatbookin = () => {
  const getClassName = (value)=> {
    
    if(selectedSeat.includes(value)) {
    return "previousBookedSeat"
    }
     else if (value === currSelectedSeat) {
       return "currSelectedSeat "   //class is returned
     }

     else 
     return "seat" //class is returned
    
  }
  const[isBooked, setIsBooked] = useState(false)  // to change the color to violet on selection
  const [currSelectedSeat, setCurrSelectedSeat] = useState(null)
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [date, setDate] = useState("");
  useEffect(()=> { 

    setCurrSelectedSeat(null)
    setIsBooked(false);
  

  }, [date])
  
  var dcount;
  // const [color, setColor] = useState(null)
  useEffect(() => {
    // console.log(date);
    const currDate =
      date !== ""
        ? `${dcount[0]} ${dcount[1]} ${dcount[2]} ${dcount[3]}`
        : null;
    if (currDate) {
      const seats =
        JSON.parse(localStorage.getItem(currDate)) === null
          ? []
          : JSON.parse(localStorage.getItem(currDate));

      setSelectedSeat(seats);
    } // using local storage, getting an array // //localstorage will store only string, so stringify and on return changing it to array using parse
  }, [date,dcount]);
  dcount = date.toString().split(" ");

  return (
    <div className="bookingContainer">
      <Calendar date={date} setDate={setDate}></Calendar>

      <div className="BookingScreen">
        <div className="cubicle">
          <button
            onClick={() => {
             setCurrSelectedSeat(1)
              console.log(selectedSeat);
            }}
            className={getClassName(1)} 
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(2)
            }}
            className={getClassName(2)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(3)
            }}
            className={getClassName(3)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(4)
            }}
            className={getClassName(4)}
            disabled = {isBooked}
          ></button>
        </div>

        <div className="cubicle">
          <button
            onClick={() => {
              setCurrSelectedSeat(5)
            }}
            className={getClassName(5)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(6)
            }}
            className={getClassName(6)}
            disabled = {isBooked}
          ></button>
          <button
            onClick={() => {
              setCurrSelectedSeat(7)
            }}
            className={getClassName(7)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(8)
            }}
            className={getClassName(8)}
            disabled = {isBooked}
          ></button>
        </div>

        <div className="cubicle">
          <button
            onClick={() => {
              setCurrSelectedSeat(9)
            }}
            className={getClassName(9)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(10)
            }}
            className={getClassName(10)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(11)
            }}
            className={getClassName(11)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(12)
            }}
            className={getClassName(12)}
            disabled = {isBooked}
          ></button>
        </div>
        <div className="cubicle">
          <button
            onClick={() => {
              setCurrSelectedSeat(13)
            }}
            className={getClassName(13)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(14)
            }}
            className={getClassName(14)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(15)
            }}
            className={getClassName(15)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(16)
            }}
            className={getClassName(16)}
            disabled = {isBooked}
          ></button>
        </div>
        <div className="cubicle">
          <button
            onClick={() => {
              setCurrSelectedSeat(17)
            }}
            className={getClassName(17)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(18)
            }}
            className={getClassName(18)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(19)
            }}
            className={getClassName(19)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(20)
            }}
            className={getClassName(20)}
            disabled = {isBooked}
          ></button>
        </div>

        <div className="cubicle">
          <button
            onClick={() => {
              setCurrSelectedSeat(21)
            }}
            className={getClassName(21)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(22)
            }}
            className={getClassName(22)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(23)
            }}
            className={getClassName(23)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(24)
            }}
            className={getClassName(24)}
            disabled = {isBooked}
          ></button>
        </div>

        <div className="cubicle">
          <button
            onClick={() => {
              setCurrSelectedSeat(25)
            }}
            className={getClassName(25)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(26)
            }}
            className={getClassName(26)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(27)
            }}
            className={getClassName(27)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(28)
            }}
            className={getClassName(28)}
            disabled = {isBooked}
          ></button>
        </div>

        <div className="cubicle">
          <button
            onClick={() => {
              setCurrSelectedSeat(29)
            }}
            className={getClassName(29)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(30)
            }}
            className={getClassName(30)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(31)
            }}
            className={getClassName(31)}
            disabled = {isBooked}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(32)
            }}
            className={getClassName(32)}
            disabled = {isBooked}
          ></button>
        </div>
      </div>

      <div className=" containerTwo">
        <div className="instructionBox">
          <div className="booked">booked</div>
          <div className="available">available</div>
          <div className="selected">selected</div>
        </div>
        <div className="dateSelection">
          {date !== ""
            ? `${dcount[0]} ${dcount[1]} ${dcount[2]} ${dcount[3]}`
            : null}
          {/* // when string and variable needed to be printed together "$" "``" is used */}
        </div>
        <button
          onClick={() => {
            console.log(selectedSeat);
            const currDate =
              date !== ""
                ? `${dcount[0]} ${dcount[1]} ${dcount[2]} ${dcount[3]}`
                : null;

            if (currDate) {
              const seats = [...selectedSeat, currSelectedSeat]
              setSelectedSeat(seats)
              localStorage.setItem(currDate, JSON.stringify(seats));

              setIsBooked(true)
            }
          }}
          className={isBooked ?"bookedConfirm": "bookButton"}
        >
          {isBooked ? "BOOKED" : "CONFIRM BOOKING"}
        </button>
      </div>
    </div>
  );
};

export default Seatbookin;
