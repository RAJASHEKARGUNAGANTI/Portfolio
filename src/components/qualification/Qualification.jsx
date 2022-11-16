import React ,{ useState } from 'react'
import "./qualification.css"
import {GiGraduateCap} from 'react-icons/gi'
import {BiBriefcaseAlt2} from 'react-icons/bi'
const Qualification = () => {
    const[toggleState,setToggleState] = useState(1);
    const toggleTab =(index) =>{
        setToggleState(index);
    };
  return (
    <section className="qualification section" id='qualification'>
        <h5 className="section__subtitle">MY personal journey</h5>
        <h2 className="section__subtitle">Qualification</h2>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__active button--flex"}
                    onClick={() => toggleTab(1)}>
                    {/* <i className="uil uil-graduation-cap qualificationn__icon"></i> */}
                    <GiGraduateCap className='qualification__icon' />Education
                </div>
                <div className={toggleState === 2 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__active button--flex"}
                    onClick={() => toggleTab(2)}>
                <BiBriefcaseAlt2 className='qualification__icon' />
                    {/* <i className="uil uil-briefcase-alt qualificationn__icon"></i> */}
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 
                ? "qualification__content qualification__content-active" 
                : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">10th Class</h3>
                            <span className="qualifiaction__subtitle">BGHS</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2008-2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Intermediate</h3>
                            <span className="qualifiaction__subtitle">Sri Gayatri</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2019-2020
                            </div>
                        </div>   
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Under Graduation</h3>
                            <span className="qualifiaction__subtitle">VJIT</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2020 -2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Open Source</h3>
                            <span className="qualifiaction__subtitle">Github</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2021 - present
                            </div>
                        </div>   
                    </div>
                </div>

                <div className={toggleState === 2
                ? "qualification__content qualification__content-active" 
                : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Designer</h3>
                            <span className="qualifiaction__subtitle">Github</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2021 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">App Design</h3>
                            <span className="qualifiaction__subtitle">Kotlin</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2022 - present
                            </div>
                        </div>   
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">AI ML</h3>
                            <span className="qualifiaction__subtitle">Github</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2021 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">React</h3>
                            <span className="qualifiaction__subtitle">Github</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification