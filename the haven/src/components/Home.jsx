import React, {useState, useEffect} from "react";
import '../App';
import axios from "axios";
import { useAppContext } from "./context/appContext";
import {Navigate, useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";



 const Home = () =>{
    return (
        <div className="home-container">
            <div className="header">
            <section>
                <header>
                    <h1>The Harmony Haven</h1>
                    <h2>For Athletes by Athletes</h2>
                </header>
            </section> 
            </div>
            
        <div className="intro">
            <p> The objective of The Haven is to host information that teaches student athletes
                 at any level about the importance create a balanced lifestyle in which they can
                  make informed decisions about mental & physical health, sports, professional 
                  development, money, hobbies, nutrition and more.

</p>
        </div>

        <div className="title resource  w-100 m-0"><h1>Resources</h1></div>
        <div className="topics-container">
    
        <Link to ="/mental-health"> <div  className="topic-item item1" ><h1>Mental Health</h1></div></Link>
        <Link to ="/finances"><div className="topic-item item2 " > <h1>Finances</h1></div></Link>
        <Link to ="/pro-dev"><div className="topic-item item3" ><h1>Professional Development</h1> </div></Link>
        <Link to ="/nutrition"> <div className="topic-item item4" ><h1>Nutrition </h1></div></Link>
        <Link to ="/hobbies"> <div className="topic-item item5" > <h1>Hobbies</h1></div></Link>
        <Link to ="/future-athletes"><div className="topic-item item6" > <h1>Future Athletes</h1></div></Link>
        </div>

       <div className="about-section">

            <div className="title w-100 m-0"><h1 className="title">Inspiration</h1></div>
            <div><p>This project is inspired by my love of learning and my admiration for the work ethic and commitment demonstrated
                 by student-athletes all over the world, something that is worthy of the high commendation and honor.
             I recognize from first-hand experience that as athletes dedicate ample time to the sport they love,
              it can often lead to a personal imbalance as they invest all their energy and personal resources into 
              only our sport causing the athlete to neglect other fundamental aspects of their life such as mental health,
               nutrition, relationships, professional development and more. The goal is to create a safe, informative, platform 
               where student athletes can find information about all the ways to take care of themselves outside of their sport in order
                to maintain a balanced and fulfilling lifestyle and grow into  well-rounded, responsible individuals.</p></div>
       </div>
        </div>

      

       
    )

}
export default Home; 
