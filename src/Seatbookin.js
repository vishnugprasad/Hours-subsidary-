import "./Seatbookin.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import Calendar from "./Calendar";
import { useState } from "react";
import { DateRangePickerView } from "@mui/lab/DateRangePicker/DateRangePickerView";

const Seatbookin = () => {
  const [date, setDate] = useState("")
  var dcount = date.toString().split(" ")

  return (
    <div className="bookingContainer">
      <Calendar date = {date}
      setDate = {setDate}></Calendar>
      
      <div className="BookingScreen">
        <div className="cubicle">
          {/* <button className="seat"></button> */}
          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "yellow" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "yellow" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>
        </div>

        <div className="cubicle">
          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "green" }}> </PersonIcon>
          </IconButton>
        </div>

        <div className="cubicle">
          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "green" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>
        </div>

        <div className="cubicle">
          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>
        </div>

        <div className="cubicle">
          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>
        </div>

        <div className="cubicle">
          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>
        </div>

        <div className="cubicle">
          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>
        </div>

        <div className="cubicle">
          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>

          <IconButton aria-label="delete" className="seat">
            <PersonIcon sx={{ color: "pink" }}> </PersonIcon>
          </IconButton>
        </div>
      </div>
      <div className = "dateSelection">{

      date !== "" ?
       `${dcount[0]} ${dcount[1]} ${dcount[2]} ${dcount[3]}` : null } 
        {/* // when string and variable needed to be printed together "$" "``" is used */}
      </div>
    </div>
  );
};

export default Seatbookin;
