import React, { useEffect } from 'react'
import "./Style.css"
import firstQ from "./Questionset1.json"
import { NavLink } from 'react-router';
import { useState } from 'react';

const Firstpage = () => {
    const formaping = firstQ.questions;
   



    // FUNCTION IS HANDLE SELECTION CHANGE/
    const [useranswers, setuseranswers] = useState({})
    const [score, setscore] = useState(0)
    const handleAnswerChange = ({ selectindex, selectvalue, correctoption }) => {

        const realscore = selectvalue === correctoption;

        setscore((pre) => pre + (realscore ? 1 : 0))


        setuseranswers((pre) => ({
            ...pre,
            [selectindex]: selectvalue
        }))

    }
    console.log(" its will be the result of useranswer", useranswers);
    useEffect(() => {
        console.log("its will be the score of user", score);
    }, [score])
    return (<>

        <div className="pagesection">
            <div className="question-section">

                {
                    formaping.map((curr, index) => {
                        // console.log("current ", curr);
                        return (<>
                            <div key={index} className="dataforpage">
                                <h2>Question:{curr.question}</h2>
                                {/* NOW I AM GOING FOR LOOPING THROUGH THE ACTIONS  */}

                                {
                                    Object.entries(curr.options).map(([key, value], inx) => {
                                        console.log("key", key, "value", value);
                                        return (<div key={inx} className='options'>
                                            <input type="radio"
                                                name={`question-${index}`}
                                                id={`question-${index}-${key}`}
                                                value={value}
                                                onChange={() => handleAnswerChange({
                                                    selectindex: index,
                                                    selectvalue: value,
                                                    correctoption: curr.correctAnswer

                                                })}
                                            />
                                            <label htmlFor={`question-${index}-${key}`}>{key}: {value}</label>

                                        </div>)
                                    })
                                }
                            </div>





                        </>)

                    })

                }
            </div>
            <NavLink to="/secondpage" className='nextbtn'>Next</NavLink>

        </div>


    </>)
}

export default Firstpage