import React, {useState} from "react";
import { useRef } from "react"; 
import { state, clickCheck, classCheck } from "./../state/state"
// import { DirOrder } from "../state/directives";
import { MakeMotionDiv, MotionDiv } from './motiondivs';
import { MakeDirectiveDiv, DirectiveDiv, DirVoteSpeakDiv } from "./directivedivs"
import { Attendence, Page, Status } from './../state/structs';
import { Motions } from '../state/motions';

function stringify(num) {
    return (num < 10 ? "0" + String(num) : String(num));
}

//Module to vote on a Directive or Motion
function VoteModule(props) {
    function pass() {
        if (props.type === "motion"){
            state.passMotion(props.index);
        } else if (props.type === "directive") {
            state.passDirective(props.index);
        }
    }

    function fail() {
        if (props.type === "motion"){
            state.failMotion(props.index);
        } else if (props.type === "directive") {
            state.failDirective(props.index);
        }
    }

    function remove() {
        if (props.type === "motion"){
            state.removeMotion(props.index);
        } else if (props.type === "directive") {
            state.removeDirective(props.index);
        }
    }

     if (props.removable) {
        return  <ul className="list-inline pass-module">
                    <li className="list-inline-item">
                        <button type="button" className="btn btn-demo" onClick={clickCheck(pass)}>Pass</button>
                    </li>
                    <li className="list-inline-item">
                        <button type="button" className="btn btn-demo" onClick={clickCheck(fail)}>Fail</button>
                    </li>
                    <li className="list-inline-item">
                        <button type="button" className="btn btn-demo" onClick={clickCheck(remove)}>Remove</button>
                    </li>
                </ul>
     } else {
        return  <ul className="list-inline pass-module">
                    <li className="list-inline-item">
                        <button type="button" className="btn btn-demo" onClick={clickCheck(pass)}>Pass</button>
                    </li>
                    <li className="list-inline-item">
                        <button type="button" className="btn btn-demo" onClick={clickCheck(fail)}>Fail</button>
                    </li>
                </ul>
     }

}

//Small Components
function DelegateDiv(props) {
  function updateAttendence(){
    if (state.getAttendence(props.index) === Attendence.Absent){
      state.markPresent(props.index);
    } else {
      state.markAbsent(props.index);
    }
  }

  if (props.attendence === Attendence.Absent){
    return <div className="card mini delegate pink" onClick={clickCheck(updateAttendence)}><p>{props.name}</p></div>
  } else {
    return <div className="card mini delegate" onClick={clickCheck(updateAttendence)}><p>{props.name}</p></div>
  }
}

function SpeakerDiv(props) {
    const [search, setSearch] = useState("");
    const present = state.filterPresent(search);
    const searchInput = useRef(null);

    function changeDel(del){
        const index = state.getDelegates().indexOf(del);
        
        props.parent.removeSpeaker(props.index);
        props.parent.addSpeaker(props.index, index);
    }

    function handleClick() {
        if (searchInput.current) {
            searchInput.current.focus();
        }
    }

    const presentDels = (state.getPresent().length > 0) ?
    [<input ref={searchInput} placeholder='Search...' onChange={(e) => setSearch(e.target.value)} key="search" ></input>,
    present.length > 0 ? 
        present.map(del => 
            <button className="dropdown-item text-center text-uppercase" onClick={clickCheck(() => changeDel(del))} key={del.getName()}>
                {del.getName()} {del.getTimesSpoken()}
            </button>):
        <button className="dropdown-item text-center text-uppercase"> No Delegates Found </button>]:
        <button className="dropdown-item text-center text-uppercase"> No Delegates Present </button>;
    

  return  <div className="dropdown">
              <button className="speakerbtn" data-bs-toggle="dropdown" onClick={clickCheck(handleClick)}>
                  <div className={props.spoken? "card mini speaker pink" : "card mini speaker"}>
                      <p>{props.name}</p>
                  </div>
              </button>
              <div className="dropdown-menu">
                    {presentDels}
              </div>
          </div>
}

function TimerDiv() {
    const placeholderMin = stringify(state.getLength().min);
    const placeholderSec = stringify(state.getLength().sec);
    const timerMin = stringify(state.getTime().minutes);
    const timerSec = stringify(state.getTime().seconds);

    let timerNums;


    function write(){
        state.writeTimer();
    }

    function statusCheck(){
        if (state.getTimerStatus() === Status.Inactive){
        return "Start";
        } else if (state.getTimerStatus() === Status.Active){
        return "Pause";
        } else {
        return "Play";
        }
    }

    function reset() {
        state.resetTimer();
    }

    function buttonCheck(){
        if (state.getTimerStatus() === Status.Inactive) {
        const minutesString = document.getElementById("timer-min").value;
        const secondsString = document.getElementById("timer-sec").value;

        const minutes = (minutesString === "") ? 0 : parseInt(minutesString);
        const seconds = (secondsString === "") ? 0 : parseInt(secondsString);

        state.setTimer(minutes, seconds);
        state.playTimer();
        } else if (state.getTimerStatus() === Status.Active) {
        state.pauseTimer();
        } else {
        state.playTimer();
        }

    }

  if (state.getTimerStatus() === Status.Inactive){
      timerNums = <p className="timer-inactive">
      <input id={"timer-min"} placeholder={placeholderMin} maxLength="2" pattern="\d*"></input> Min 
      <input id={"timer-sec"} placeholder={placeholderSec} maxLength="2" pattern="\d*"></input> Sec
      </p>
  } else {
      timerNums = <div>
      <p className='timer-active' onClick={clickCheck(write)}>
          <span id="timer-min" className='timer-text timer-min h1 font-weight-bold'>{timerMin}</span> Min 
          <span id="timer-sec" className='timer-text timer-sec h1 font-weight-bold'>{timerSec}</span> Sec
      </p>
      </div>
  }

  return    <div className={state.getTimerStatus() === Status.Done ? "timerDiv pink" : "timerDiv"}>
                <div className="timer py-4" key="timer">
                    {timerNums}
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <button type="button" className="btn btn-demo" onClick={clickCheck(reset)}>Reset</button>
                    </li>
                    <li className="list-inline-item">
                        <button type="button" className="btn btn-demo" onClick={clickCheck(buttonCheck)}>{statusCheck()}</button>
                    </li>
                </ul>
                {(state.currentMotion.type === Motions.Unmod || state.currentMotion.type === Motions.ExtendUnmod) ? 
                    []: state.config.autoplay? 
                    <button id="autoplay" className="btn" onClick={clickCheck(() => {state.config.autoplay = false})}>Turn Off Autoplay on Next Speaker</button>:
                    <button id="autoplay" className="btn" onClick={clickCheck(() => {state.config.autoplay = true})}>Turn On Autoplay on Next Speaker</button>
                }
            </div>
      
}


//Page Components
function DelegatePage() {
    const numPresent = state.numPresent();
    const delegates = state.getDelegates().map((del, index) =>
        <DelegateDiv attendence={del.attendence} name={del.name} index={index} key={index}/>
    );
    const sigCount =    <div id='sigcount' className='notready card inactive'>
                            <p>A Directive Requires</p>
                            <h1>{state.signum}</h1>
                            <p>Signatories</p>
                        </div>


    return [<div id="delList" className={classCheck("left side col-8")} key="delList">{delegates}</div>, 
            <div id="delMain" className={classCheck("side col-4")} key="delMain">
                <div className='card'>
                    <p>There are</p>
                    <h1>{numPresent}</h1>
                    <p>Delegates</p>
                </div>
                <div className='card'>
                    <p>A 2/3 Majority Requires</p>
                    <h1>{Math.round(numPresent * 2/3)}</h1>
                    <p>Delegates</p>
                </div>
                <div className='card'>
                    <p>A Simple Majority Requires</p>
                    <h1>
                        {numPresent === 0 ? 0: numPresent % 2 === 0 ?
                        Math.round(numPresent * 1/2) + 1:
                        Math.round(numPresent * 1/2)}
                    </h1>
                    <p>Delegates</p>
                </div>
                {sigCount}
            </div>]
}

function UnmodPage() {
  return <div id="unmodMain" className={classCheck("")}>
            <TimerDiv />
            {state.timer.status === Status.Done?
                [<button className="btn btn-demo fit-button" onClick={clickCheck(() => state.toPage(Page.motions))}>Return to Motions</button>]: 
                []}
        </div>
}

function SpeakersPage() {
    const speakers = state.getSpeakers().map((speaker, index) =>
    <SpeakerDiv parent={state} spoken={speaker.hasSpoken()} name={state.getSpeaker(index)} index={index} key={index}/>
    );

    const speakerNum = state.speakers?
    <h1>{Math.min(state.speakers.numSpeakers, state.speakers.speakerNum + 1)} / {speakers.length} Speakers</h1>:
    <h1> No Speakers List</h1>;

    const speakerChange = <ul className="list-inline">
                            <li className="list-inline-item">
                                <button type="button" className="btn btn-demo" onClick={clickCheck(lastSpeaker)}>Last Speaker</button>
                            </li>
                            <li className="list-inline-item">
                                <button type="button" className="btn btn-demo" onClick={clickCheck(nextSpeaker)}>Next Speaker</button>
                            </li>
                        </ul>

    function lastSpeaker() {
        state.lastSpeaker();
    }

    function nextSpeaker() {
        state.nextSpeaker();
    }

    return  [<div id="speakersList" className={classCheck("left side col-4")} key="speakersList">
                {speakers}
            </div>,
            <div id="modMain" className={classCheck("side col-8")} key="modMain">
                <h1>{state.currentMotion.topic}</h1>
                <TimerDiv />
                {speakerChange}
                {speakerNum}
                {state.speakers.numSpeakers === state.speakers.speakerNum?
                [<button className="btn btn-demo fit-button" onClick={clickCheck(() => state.toPage(Page.motions))}>Return to Motions</button>]: 
                []}
            </div>]
}

function VotingPage() {
    const [voteDirective, setVoteDirective] = useState("No");

    const directives = state.getDirectives(state.currentMotion.order).map((dir, index) =>
        <DirVoteSpeakDiv dir={dir} status={dir.status} index={index} key={index}/>
    );

    const directiveVotes = state.getDirectives(state.currentMotion.order).map((dir, index) =>
    <DirectiveDiv dir={dir} removable={false} status={dir.status} index={index} key={index}/>
);

    const speakerNum = state.dirState.speakers ?
    <h1>{Math.min(state.dirState.numSpeakers, state.dirState.speakerNum + 1)} / {state.dirState.numSpeakers} Speakers</h1>:
    <h1> No Speakers List</h1>;

    const speakerChange = <ul className="list-inline">
                            <li className="list-inline-item">
                                <button type="button" className="btn btn-demo" onClick={clickCheck(lastSpeaker)}>Last Speaker</button>
                            </li>
                            <li className="list-inline-item">
                                <button type="button" className="btn btn-demo" onClick={clickCheck(nextSpeaker)}>Next Speaker</button>
                            </li>
                        </ul>

    function lastSpeaker() {
        state.lastSpeaker();
    }

    function nextSpeaker() {
        state.nextSpeaker();
    }

    function voteDirectiveDiv(){
        switch (voteDirective) {
            case "No":
                return <button type="button" className="btn btn-demo fit-button" onClick={clickCheck(() => setVoteDirective("All"))}>Vote on Directives</button>
            default:
                return <button type="button" className="btn btn-demo fit-button" onClick={clickCheck(() => setVoteDirective("No"))}>Return to Speeches</button>
        }
    }

    
    return  [<div id="dirSpeakersList" className={classCheck("left side col-4")} key="speakersList">
                {directives}
            </div>,
            <div id="dirSpeakersMain" className={classCheck("side col-8")} key="modMain">
                {
                    voteDirective === "No"?
                    [voteDirectiveDiv(),
                    <TimerDiv />,
                    speakerChange,
                    speakerNum]:
                    [voteDirectiveDiv(),
                    directiveVotes]
                }
                {state.dirState.numSpeakers === state.dirState.speakerNum?
                <button className="btn btn-demo fit-button" onClick={() => state.toPage(Page.motions)}>Return to Motions</button>: 
                []}
            </div>]
}

function DirectivesPage() {
    const directives = state.getDirectives().map((dir, index) =>
        <DirectiveDiv dir={dir} removable={true} status={dir.status} index={index} key={index}/>
    );

    // function pastDirectives() {
    //     console.log(state.getPastDirectives());
    // }

    // function passedDirectives() {
    //     console.log(state.getPassedDirectives());
    // }

    // function failedDirectives() {
    //     console.log(state.getFailedDirectives());
    // }

    function voteOnDirective() {
        state.genVoting(state.currentMotion.numSpeakers, state.currentMotion.speakingTime, state.currentMotion.order);
        state.toPage(Page.speakers);
    }

    return  [<div id="directivesList" className={classCheck("left side col-4 shrink")} key="directivesList">
                <MakeDirectiveDiv />
                {state.getCurrentMotionType() === Motions.Voting ?
                    <button className="btn btn-demo" onClick={clickCheck(voteOnDirective)}>Vote on Directives</button>:
                    <div></div>
                }

                <button className="btn btn-demo" onClick={clickCheck(() => state.clearDirectives())}>Clear Directives</button>
                {/* <button className="btn btn-demo notready" onClick={pastDirectives}>All Past Directives</button>
                <button className="btn btn-demo notready" onClick={passedDirectives}>Passed Directives</button>
                <button className="btn btn-demo notready" onClick={failedDirectives}>Failed Directives</button> */}
            </div>,
            <div id="directivesMain" className={classCheck("side col-8 grow")} key="directivesMain">
                {directives}
            </div>];
}

function MotionsPage() {
  const motionTypes = state.getMotionTypes().map((motion) => {
    if (state.currentMotion === null) {
        if (motion !== Motions.Extend) {
            return <MakeMotionDiv motion={motion} key={motion}/>
        }
    } else if ((state.currentMotion.type === Motions.Mod) || (state.currentMotion.type === Motions.Unmod)) {
        return <MakeMotionDiv motion={motion} key={motion}/>
    } else {
        if (motion !== Motions.Extend) {
            return <MakeMotionDiv motion={motion} key={motion}/>
        }       
    }
    return [];
  });
  
  const motions = state.getMotions()
                .map((motion, index) => <MotionDiv motion={motion} index={index} key={index}/> );

  return [<div id="motionSelect" className={classCheck("left side col-4 shrink")} key="motionSelect">{motionTypes}</div>,
          <div id="motionsMain" className={classCheck("side col-8 grow")} key="motionsMain">{motions}</div>]
}

export { VoteModule, SpeakerDiv, stringify };
export { DelegatePage, UnmodPage, SpeakersPage, DirectivesPage, MotionsPage, VotingPage};