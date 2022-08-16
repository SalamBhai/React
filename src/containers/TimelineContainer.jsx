import { useState } from "react";
import { Timeline } from "../components";

const TimeLineContainer = ({timelines, activeTimeline, setActiveTimeline}) => {

 

    // const handleItemClick = (id) => {
    //     setTimelines(timelines.map(timeline => {
    //         timeline.isActive = timeline.id === id;
    //         return timeline;
    //     }));

    // }

    return (
        <div style={{display: 'flex', overflowX:'scroll', gap:8}}>
            {timelines.map(timeline =>
                <Timeline title={timeline.title} isActive={timeline.id === activeTimeline} onClick={() => setActiveTimeline(timeline.id)}/>
            )}
        </div>
    )
};

export default TimeLineContainer;