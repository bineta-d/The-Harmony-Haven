import React from "react";
import '../App';
import { Link } from "react-router-dom";
// import { AppContextProvider} from "./context/appContext";
import { AppContextProvider, VideoList} from "./context/appContext";



 const Finance = ()=> {
    return ( <div>
        <div class="topic-container"> 
        <div className="topic-header">
        <h1 className="topic-title">FINANCES</h1>
        {/* Automatically render the VideoList component */}
        <div className="topic-description">
           <div> 
            <p>Student-athletes face unique financial challenges, balancing scholarships, stipends, and 
                personal expenses. Managing finances while maintaining their athletic and academic commitments
                 is critical. Understanding budgeting, managing student loans, and learning to save for the future
                  can provide stability and confidence. Whether it's navigating NIL (Name, Image, Likeness) deals or 
                  planning for life after sports, financial literacy is key to long-term success. Below are some resources 
                  and tips for financial management, specifically designed for student-athletes.</p></div>
    <div className="topic-img1"></div>
    
        </div>
        {/* <VideoList /> */}
       </div> 

    <div className="middle-section">

    <div className="resources">
     <h1 className="title">Resources</h1>
    {/* <div className=""> */}
        
      
        <div className="resource-container">
         
        <div className="resource-list">
        <ul> 
            {/* // Budgeting  */}
            <li className="resource-item" >
                <a href="">Budgeting </a>
                <p> Managing finances effectively starts with budgeting. Student-athletes often have limited 
                    time, so developing a simple budget plan to track income from scholarships or NIL deals 
                    and managing expenses such as housing, food, and travel is essential.</p>
            <a href=""></a>
           </li>

                {/* // Saving */}
            <li className="resource-item" >
                <a href="">Saving & Investing</a>
                <p> Understanding how to save and invest during college can build a foundation for financial
                     security after graduation. Learn the basics of saving strategies, the importance of
                      emergency funds, and how investing can benefit you in the long run.</p>
           <a href=""></a>
            </li>

            {/* //Student Loans */}
            <li className="resource-item" >
                <a href="">Student Loans</a>
                <p> Managing student loans while balancing academic and athletic responsibilities
                     can be overwhelming. Knowing how to navigate loan repayment and understanding
                     options can relieve stress and help athletes stay financially stable post-graduation.</p>
            <a href=""></a>
            </li>

            {/* // NIL */}
            <li className="resource-item">
                <a href="">NIL (Name, Image, Likeness)</a>
                <p> The ability to earn from NIL deals has changed the financial landscape for college athletes.
                     It's crucial to understand how to manage this income responsibly while balancing your education and sport. </p>
            <a href=""></a>
            </li>

            {/* // Self Harm */}
            {/* <li className="resource-item" >
                <a href="">Self Harm?</a>
                <p> Some student-athletes resort to self-harm as a way to cope with emotional pain or stress. 
                    This harmful behavior requires immediate intervention through counseling or therapy. 
                    Athletes can find healthier coping mechanisms through mindfulness, creative outlets, and 
                    support networks to express emotions safely. Discover more about how to find help using 
                   "" the resource provided.</p>
           <a href=""></a>
            </li> */}

            {/* // Addiction */}
            {/* <li className="resource-item" >
                <a href="">Addiction?</a>
                <p>Addiction can develop in student-athletes due to substance use as 
                    a coping mechanism for stress or injury recovery. It can negatively 
                    impact athletic and academic performance. Seeking help from addiction 
                    specialists, attending recovery programs, and building a strong support
                     system are essential steps to overcoming addiction. 
                   ""  Look into the resource below for ways to start your journey to recovery.</p>
           <a href=""></a>
            </li>  */}

            {/* // Bipolar Disorder  */}
            {/* <li className="resource-item" >
                <a href="">Bipolar Disorder?</a>
                <p>Bipolar disorder involves drastic mood swings, from extreme highs (mania) to deep 
                    lows (depression), affecting consistency in sports and academics. Athletes can seek
                     professional treatment, such as medication and therapy, to manage symptoms and create
                      a structured routine to stabilize mood and performance. Explore the following resource
                    ""   for guidance and support..</p>
            <a href=""></a>
            </li> */}


        

            


        </ul>
        </div>
        <div className=" resource-right ">
            <h1>Anti-Stress</h1>
            <div className="">
            <ul className="list-2"> 
            {/* // anxiety  */}
            <li className="resource-item" >
                <a href="" className="anti-stress-item">Therapy and Counseling</a>
                <p> Therapy and counseling offer personalized guidance to student-athletes struggling with mental health
                     challenges like anxiety or depression. By learning new ways to manage stress, athletes can prevent 
                     serious mental health issues. Regular sessions with a counselor provide coping strategies, emotional 
                     support, and a safe space to address deeper concerns.</p>
            <a href="https://ericmondayfoundation.org/mental-health-resources/">The Eric Monday Foundation</a><br/>
            <a href="https://www.nimh.nih.gov/health/find-help">Help for Mental Illnesses</a><br/>
            <a href="https://www.theplayerstribune.com/collections/mental-health-awareness">The Player's Tribune: Mental Health Awareness Collection</a><br/>
            <a href="https://www.onlinemswprograms.com/resources/mental-health-resources-for-athletes/">Mental Health Resources for Athletes</a><br/>

           </li>

                {/* // Relaxation Exercise */}
            <li className="resource-item" >
                <a href="" className="anti-stress-item">Relaxation Exercises</a>
                <p> Relaxation exercises, such as stretching and meditation, can help student-athletes reduce
                     stress and anxiety by providing simple, quick breaks. These exercises allow athletes to focus 
                     on calming their minds and bodies, preventing burnout. Practicing relaxation techniques regularly 
                     can improve mental clarity, mood, and overall well-being.

</p>
            <a href="https://insighttimer.com/meditation-topics/sport">Insight Timer:Meditation for Athletes</a><br/>
           <a href="https://asmy.org.au/tv/?gad_source=1&gclid=Cj0KCQjwxsm3BhDrARIsAMtVz6Ol01T1kKs1xDKve96PTQ6NnfDlrjc6r9VWmsak5FX4zqWwBPR2FXAaAvBjEALw_wcB">
            Australian School of Meditation and Yoga
           </a>
           <a href="https://www.centerfoundation.org/flexibility-sport-performance/?gad_source=1&gclid=Cj0KCQjwxsm3BhDrARIsAMtVz6MfobhjmeDe2TxfA0tFsepZcLV8NuCxw0m4gKEBdWUi9BGTP1REpJUaAszWEALw_wcB">
            Center Foundation
            </a>
            </li>

            {/* // Psychiatric Care */}
            <li className="resource-item" >
                <a href="" className="anti-stress-item">Psychiatric Care</a>
                <p> Student-athletes dealing with extreme mental health challenges, such as depression or
                     anxiety, may experience suicidal thoughts. Immediate help from crisis hotlines, campus
                      counselors, and trusted coaches or teammates is essential. Creating a strong support 
                      system and seeking professional care are crucial for recovery and well-being. Find valuable
                    ""   assistance and information through the following resource.</p>

            <a href="https://www.naia.org/student-athlete-wellness-center/mental-health/index">Student Athlete Wellness Center</a><br/>
            <a href="https://aaadfoundation.org/free-therapy/"></a>
            </li>

            {/* // Physical Activity*/}
            <li className="resource-item" >
                <a href=""  className="anti-stress-item">Relaxing Physical Activities</a>
                <p> Consistent engagement in relaxing physical activities, such as yoga and stretching, is vital for
                     maintaining the overall well-being of student-athletes. These practices not only enhance flexibility
                      and reduce the risk of injury but also promote recovery and mental clarity. Incorporating yoga and stretching 
                      into a regular routine can alleviate stress, improve focus, and support emotional balance. Additionally, these 
                      activities foster mindfulness, helping athletes to stay present and manage performance anxiety. You can find free
                      resources below to get started with these activities.</p>
            <a href="https://www.doyogawithme.com/">Do Yoga with me</a>
            <a href="https://www.yogajournal.com/practice/beginners/yoga-for-beginners/" >Yoga For Beginners</a><br/>
           <a href="https://www.youtube.com/@BreatheAndFlow">Breathe & Flow: Yoga Youtube Channel </a><br/>
            </li>

            {/* // Sleep Habits */}
            <li className="resource-item" >
                <a href="" className="anti-stress-item">Sleep Habits</a>
                <p> Consistent sleep is essential for maintaining mental and physical health in student-athletes.
                     Sleep deprivation can worsen stress, anxiety, and depression, while adequate sleep helps improve
                      mood, cognitive function, and athletic performance. Developing a regular sleep schedule, avoiding 
                      late-night study sessions, and creating a restful sleep environment can significantly enhance mental
                       well-being.</p>
           <a href=""></a>
            </li>

            {/* // DIet IMporvement */}
            <li className="resource-item" >
                <a href="" className="anti-stress-item">Diet Improvement</a>
                <p>A balanced diet is crucial for student-athletes' mental health and performance.
                     Poor nutrition can increase stress and anxiety, while a well-rounded diet supports 
                     cognitive clarity, energy levels, and emotional stability. Prioritizing healthy foods, 
                     staying hydrated, and maintaining consistent eating habits can promote better mental and physical health.</p>
           <a href="https://www.myplate.gov/"></a><br/>
           <a href=""> </a>
            </li> 

          
        </ul>
        </div>
        </div> 
        
        </div>
       
        {/* <div className=" resource-right tips">
            <h1>Tips & Tricks:</h1>

            <div className="tip1"> Hello</div>

            <div className="tip1"> Hello</div>
            <div className="tip1"> Hello</div>
            <div className="tip1"> Hello</div>
            <div className="tip1"> Hello</div>
        </div>  */}

        </div> 

         
        
    </div>

    </div> 
      
    <div className="explore-section">
        <div className="explore-section">
          <h1 className="title">Explore Content</h1>
          <VideoList />
          
          </div>
      
    
        
    </div> 
    </div>
        
    )
}
export default Finance; 