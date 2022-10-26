import React from 'react';
import { useState } from 'react';
import Questions from "./Questions.json";
import Confetti from "../party.png"
import Replay from "../replay.png"
import "../App.css"
function Quizcomp() {

    const [currQ, setcurrQ] = useState(0);
    const [currScore, setcurrScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [isChosen,setisChosen]= useState(false);
    
    const handleResponse=(isFlag)=>{
        setisChosen(true);
        if(isFlag){
            setcurrScore(currScore+1)
        }
    }
    const resetQ=()=>{
        setShowScore(false)
        setcurrQ(0)
        setcurrScore(0)
    }
    const handleNext=()=>{
        setisChosen(false);
        const newQ= currQ+1;
        if(newQ < Questions.length){
             setcurrQ(newQ)
        }
        else{
            setShowScore(true)
        }   
    }
    return (
        <div className='main'>
          {showScore ?
                (
                    <div className='scoreboard'>
                        <h1><img src={Confetti} height="40px" weight="40px"/> Congratulations</h1>
                        <h3>Score is {currScore} / {Questions.length}</h3> 
                        <div> <button onClick={resetQ} className="">
                        <img src={Replay} height="20px" weight="20px"/>
                        Play Again</button></div>
                    </div>
                ) : 
                (
                    <div className='quizlet'>
                        <div className='questionHeader'>
                            <div className='questionNo'>
                                <span>{currQ+1} out of {Questions.length} Questions</span>
                            </div>
                            <div className='question'>
                                <span>{Questions[currQ].Q}</span>
                            </div>
                        </div>
                        
                        <div className='questionContent'>
                            <div className='innerbox'>
                               {Questions[currQ].options.map((ans)=>
                                  <button 
                                  className='options'
                                  style={ { 
                                    backgroundColor:
                                    (isChosen)?
                                    (ans.flag? "#c2fab1":"#e69e93"):"white"}}
                                  onClick={()=>handleResponse(ans.flag)}>{ans.a}</button>
                               )}

                            </div>
                            <div className='next' onClick={handleNext}>
                                <button>Next Question</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
    }
    export default Quizcomp