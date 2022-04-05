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
       return "currSelectedSeat "
     }

     else 
     return "seat"
    
  }
  const [currSelectedSeat, setCurrSelectedSeat] = useState(null)
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [date, setDate] = useState("");
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
  }, [date]);
  var dcount = date.toString().split(" ");

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
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(2)
            }}
            className={getClassName(2)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(3)
            }}
            className={getClassName(3)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(4)
            }}
            className={getClassName(4)}
          ></button>
        </div>

        <div className="cubicle">
          <button
            onClick={() => {
              setCurrSelectedSeat(5)
            }}
            className={getClassName(5)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(6)
            }}
            className={getClassName(6)}
          ></button>
          <button
            onClick={() => {
              setCurrSelectedSeat(7)
            }}
            className={getClassName(7)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(8)
            }}
            className={getClassName(8)}
          ></button>
        </div>

        <div className="cubicle">
          <button
            onClick={() => {
              setCurrSelectedSeat(9)
            }}
            className={getClassName(9)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(10)
            }}
            className={getClassName(10)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(11)
            }}
            className={getClassName(11)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(12)
            }}
            className={getClassName(12)}
          ></button>
        </div>
        <div className="cubicle">
          <button
            onClick={() => {
              setCurrSelectedSeat(13)
            }}
            className={getClassName(13)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(14)
            }}
            className={getClassName(14)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(15)
            }}
            className={getClassName(15)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(16)
            }}
            className={getClassName(16)}
          ></button>
        </div>
        <div className="cubicle">
          <button
            onClick={() => {
              setCurrSelectedSeat(17)
            }}
            className={getClassName(17)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(18)
            }}
            className={getClassName(18)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(19)
            }}
            className={getClassName(19)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(20)
            }}
            className={getClassName(20)}
          ></button>
        </div>

        <div className="cubicle">
          <button
            onClick={() => {
              setCurrSelectedSeat(21)
            }}
            className={getClassName(21)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(22)
            }}
            className={getClassName(22)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(23)
            }}
            className={getClassName(23)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(24)
            }}
            className={getClassName(24)}
          ></button>
        </div>

        <div className="cubicle">
          <button
            onClick={() => {
              setCurrSelectedSeat(25)
            }}
            className={getClassName(25)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(26)
            }}
            className={getClassName(26)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(27)
            }}
            className={getClassName(27)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(28)
            }}
            className={getClassName(28)}
          ></button>
        </div>

        <div className="cubicle">
          <button
            onClick={() => {
              setCurrSelectedSeat(29)
            }}
            className={getClassName(29)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(30)
            }}
            className={getClassName(30)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(31)
            }}
            className={getClassName(31)}
          ></button>

          <button
            onClick={() => {
              setCurrSelectedSeat(32)
            }}
            className={getClassName(32)}
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
              localStorage.setItem(currDate, JSON.stringify(seats));
            }
          }}
          className="bookButton"
        >
          Book Seat
        </button>
      </div>
    </div>
  );
};

export default Seatbookin;
