import React from 'react'
import thirdQ from "./Questionset3.json"
import { NavLink } from 'react-router';

const Third = () => {
    const formaping = thirdQ.questions;
    console.log("formaping", formaping);

    return (<>

        <div className="pagesection">
            <div className="question-section">

                {
                    formaping.map((curr, index) => {
                        console.log("current ", curr);
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
            <NavLink to="/forthpage" className='nextbtn'>Next</NavLink>

        </div>


    </>)
}

export default Third
