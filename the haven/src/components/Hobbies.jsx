import React from "react";
import '../App';
import { Link } from "react-router-dom";
import { AppContextProvider, VideoList } from "./context/appContext";

 const Hobbies = ()=> {
    return (
        <AppContextProvider>
        <div className="topic-container">
           <div className="topic-header">
            <h1 className="topic-title">HOBBIES</h1>
            {/* Automatically render the VideoList component */}
            <div className="topic-description">
               <div> 
                <p>Student athletes are masters of overcoming adversity, as they navigate the dual demands of academics and sports.
        Their journey is marked by constant challenges, from rigorous training schedules to the pressure of
        competitions.
        The need for consistent resources for their mental wellness is paramount, given the unique stressors they
        encounter.
        Recognizing this, many former and current athletes have spearheaded initiatives to provide support and promote
        mental well-being within the athletic community. These initiatives encompass mentorship programs, mental health
        awareness campaigns,
        and advocacy for more comprehensive resources. By sharing their own experiences and advocating for mental
        health,
        these athletes contribute to fostering a culture that values and prioritizes the well-being of student athletes.
        The following are some notable initiatives led by athletes.</p></div>
        <div className="topic-img"></div>
            </div>
        </div>

        </div>
        </AppContextProvider>
    )
}
export default Hobbies; 