import React from "react";
import { useParams } from "react-router-dom";
import { EventList } from "../helpers/EventList";
import "../styles/ProjectDisplay.css";

function EventDisplay() {
  const { id } = useParams();
  const event = EventList[id]; 
  
  return (
    <div className="project">
      <h1>{event.name}</h1>
      
      {event.name === "Wayne Scales Symposium" ? (
        <div className="symposium-images-container">
          <div className="image-container">
            <img src={event.image} alt={event.name} />
            <p>This is me giving a presentation at the Dr. Wayne Scales Undergraduate Research Symposium.</p>
          </div>
          <div className="image-container">
            <img src={event.image2} alt={event.name} />
            <p>
              This is a group photo of the top selected contestant along with Dr. Wayne Scales himself. 
              <br/><br/>
              Nate Carter (at left), me (middle), Justin Dean (at right, wearing red)
            </p>
          </div>
        </div>
      ) : (
        <img src={event.image} alt={event.name} />
      )}

      <p>
        <b>{event.name}</b>
      </p>
      <div className="description-container">
        <p>
          <b>Description:</b> 
        </p>
        <div className="description">{event.description}</div>
      </div>
    </div>
  );
}

export default EventDisplay;
