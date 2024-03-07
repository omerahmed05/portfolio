import React, { useState, useEffect } from "react";
import EventItem from "../components/EventItem";
import { EventList } from "../helpers/EventList";
import "../styles/Events.css";

function Events() {
  return (
    <div className="events"> 
      <h1 className="eventsTitle">Events</h1>
      <p className="eventsDescription">Check out some of the events I've attended!</p> 
      <div className="eventList">
        {EventList.map((event, idx) => {
          return (
            <EventItem key={idx} id={idx} name={event.name} image={event.image}/> 
          );
        })}
      </div>
    </div>
  );
}

export default Events;
