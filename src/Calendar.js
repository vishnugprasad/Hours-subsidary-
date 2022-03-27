import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import "./Calendar.css";




const Calendar = (props) => {   //passig the props from seatbooking (useState)
  
  return (
    <div className="calendarPosition">
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <StaticDatePicker 
          displayStaticWrapperAs="desktop"
          openTo="year" 
          minDate={Date.now()}
           value={props.date}
          onChange={(newValue) => {
            props.setDate(newValue)
            
              console.log(newValue);
            //   setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
