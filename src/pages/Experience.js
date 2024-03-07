import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import vtlogo from "../assets/vt-logo.jpg";
import chslogo from "../assets/chs-logo.jpg"; 
import cwnblogo from "../assets/cwnb-logo.jpg";
import reachlogo from "../assets/reach-logo.jpg";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2018 - May 2022"
          iconStyle={{ background: "#3e497a", color: "#fff", backgroundImage: `url(${chslogo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <h3 className="vertical-timeline-element-title">
            Chantilly High School
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Chantilly, Virginia
          </h4>

          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2022 - PRESENT"
          iconStyle={{ background: "#3e497a", color: "#fff", backgroundImage: `url(${vtlogo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <h3 className="vertical-timeline-element-title">
            Virginia Tech
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Blacksburg, Virginia
          </h4>

          <p> Bachelor of Science in Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023 - June 2023"
          iconStyle={{ background: "#3e497a", color: "#fff", backgroundImage: `url(${cwnblogo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <h3 className="vertical-timeline-element-title">
            Summer Research Intern - Virginia Tech
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Blacksburg, Virginia
          </h4>
          <p>Code World, No Blanket Lab</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2024 - PRESENT"
          iconStyle={{ background: "#3e497a", color: "#fff", backgroundImage: `url(${reachlogo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <h3 className="vertical-timeline-element-title">
            Research Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Blacksburg, Virginia
          </h4>
          <p>
            Reimagining Equity and Accessibility in Computing for Humanity (REACH) Lab
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
