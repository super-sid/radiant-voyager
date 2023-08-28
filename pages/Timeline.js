// pages/Timeline.js

import React from 'react';
import { Timeline } from 'react-timeline-component';

const TimelineOfLeonardoDaVinci = () => {
  return (
    <Timeline>
      <TimelineItem>
        <h2>1452</h2>
        <p>Leonardo da Vinci is born in Anchiano, near Florence, Italy.</p>
      </TimelineItem>
      <TimelineItem>
        <h2>1469</h2>
        <p>Leonardo begins his apprenticeship in the workshop of Andrea del Verrocchio in Florence.</p>
      </TimelineItem>
      <TimelineItem>
        <h2>1482</h2>
        <p>Leonardo moves to Milan and becomes the engineer and architect for Duke Ludovico Sforza.</p>
      </TimelineItem>
      <TimelineItem>
        <h2>1495</h2>
        <p>Leonardo begins work on his famous painting, the Mona Lisa.</p>
      </TimelineItem>
      <TimelineItem>
        <h2>1506</h2>
        <p>Leonardo returns to Florence and continues working on his art and engineering projects.</p>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineOfLeonardoDaVinci;