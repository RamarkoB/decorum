import React, {useState} from "react";
import { state } from "./../state/state"
import { TimelineDiv } from "./motiondivs";

const StatPages = {
    timeline: "Timeline",
    speakers: "Times Spoken"
}

function TimelinePage() {
    const history = state.timeline.length === 0 ?
    <div className="card">
                <h3>No Motions Have Been Passed!</h3>
            </div> :
    state.timeline
        .map((motion, index) => <div className="event">
                                    <TimelineDiv motion={motion} index={index} key={index}/> 
                                    <div className="line" key={"line" + index}></div>
                                </div>);
    return <div id="timeline">
        {history}
    </div>
}

function SpeakerCountPage() {
    const dels = state.getPresent().map(delegate => 
    <tr>
        <td>{delegate.name}</td>
        <td>{delegate.timesSpoken}</td>
    </tr>)

    return <div id="speakerCount">
        <table>
            <tr>
                <th>Delegate</th>
                <th>Times Spoken</th>
            </tr>
            {dels}
        </table>
    </div>
}

function StatsPage() {
    const [page, setPage] = useState(null);

    function getPage(){
        switch (page) {
            case StatPages.speakers: return <SpeakerCountPage />
            default: return <TimelinePage />;
        }
    }
    
    const pages = Object.values(StatPages).map((stat, index) => <div className="card mini" key={index} onClick={() => setPage(stat)}> <p>{stat}</p></div>)

    return [<div id="statsSelect" className="left side col-4" key="statsSelect">
                {pages}
            </div>,
            <div id="statsMain" className="side col-8" key="statsMain">
                {getPage()}
            </div>]
}

export default StatsPage;