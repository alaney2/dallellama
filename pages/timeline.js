import React from 'react';
import Link from 'next/link';
import { Chrono } from 'react-chrono';
import styles from '../styles/Timeline.module.css';


const Timeline = () => {
  const timelineData = [
    {
      title: 'Event 1',
      cardTitle: 'Card Title 1',
      cardSubtitle: 'Card Subtitle 1',
      cardDetailedText: 'Detailed description of event 1.',
    },
    {
      title: 'Event 2',
      cardTitle: 'Card Title 2',
      cardSubtitle: 'Card Subtitle 2',
      cardDetailedText: 'Detailed description of event 2.',
    },
    {
      title: 'Event 2',
      cardTitle: 'Card Title 2',
      cardSubtitle: 'Card Subtitle 2',
      cardDetailedText: 'Detailed description of event 2.',
    },
    {
      title: 'Event 2',
      cardTitle: 'Card Title 2',
      cardSubtitle: 'Card Subtitle 2',
      cardDetailedText: 'Detailed description of event 2.',
    },
    {
      title: 'Event 2',
      cardTitle: 'Card Title 2',
      cardSubtitle: 'Card Subtitle 2',
      cardDetailedText: 'Detailed description of event 2.',
    },
    // Add more timeline events here
  ];

  return (
    <>
      <Chrono
        items={timelineData}
        mode="VERTICAL_ALTERNATING"
        cardWidth={500}
        cardHeight={300}
        contentDetailsHeight={250}
        fontSizes={{
          title: "1rem"
        }}
        activeItemIndex={timelineData.length}
        disableClickOnCircle={true}
        disableNavOnKey={true}
        hideControls={true}
        enableOutline={true}
        // flipLayout={true}
        theme={{
          // primary: 'black',
          // secondary: 'blue',
          // cardBgColor: 'gray',
          // titleColor: 'black',
          // titleColorActive: 'red',
        }}
      >
        {/* <div>
          <p>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</p>
        </div>
        <div>
          <p>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</p>
        </div> */}
      </Chrono>
    </>
  );
};

export default Timeline;
