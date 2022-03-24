import React, { useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from 'components/DayList';

// eslint-disable-next-line
import InterviewerList from "./InterviewerList";

import Appointment from "components/Appointment";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer:{
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer:{
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  {
    id: 5,
    time: "4pm",
  }
];


const [days, setDays] = useState([]);

useEffect(() => {
  axios.get("/api/days").then((response) => {
    return setDays(response.data);
  });
}, []);

const appointment = appointments.map((appt) => {
  console.log(appt, "appt")
  return (
      <Appointment key={appt.id} id={appt.id} time={appt.time} interview={appt.interview} />
    )
});
console.log(appointment)

export default function Application(props) {
  const [day, setDay] = useState("Monday");

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList
          days={days}
          day={day}
          setDay={setDay}
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
      {appointment} 
        {/* {appointments.map(appointment => {
          return (
          <Appointment 
            key={appointment.id}
            id={appointment.id}
            time={appointment.time}
            interview={appointment.interview}
          /> ) */}


        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );

    
          
            
    

          
    
    
  
}