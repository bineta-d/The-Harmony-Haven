import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { YT_API_URL, YT_WATCH_URL } from "../API";
import { Link } from "react-router-dom";


const AppContext = createContext(null);

export const useAppContext = () =>{

    const context = useContext(AppContext);
    if(!context ){
        
        throw new Error('useAppcontext must be within appContextProvider!');
    };
    return context;
};

const AppContextProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);

    // Fetch video list on component mount
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                // Add additional query parameters such as q (search term) and part (required by YouTube API)
                const response = await axios.get(`${YT_API_URL}&q=ted+talks+motivation+discipline+athlete&part=snippet&type=video&maxResults=16`);
                console.log("API response", response.data);
                console.log("Items:", response.data.items);

                setVideos(response.data.items); // Assuming API returns 'items'
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <AppContext.Provider value={{ videos }}>
            {children}
        </AppContext.Provider>
    );
};

const VideoList = () => {
    const { videos } = useAppContext([]); // Access videos from context

    return (
            <div className="video-list"> 
            {videos.map((video, index) => (
                <div className="video" key={index}>
                    <div className="video-item title">
                        <h2>{video.snippet?.title}</h2> {/* Accessing video title */}
                    </div>
                    
                    <Link to={`${YT_WATCH_URL}${video.id.videoId}`}>
                    <div className=" video-item thumbnail">
                        <img src={video.snippet?.thumbnails.medium.url} alt="thumbnail"/>
                    </div>
                    </Link>

                </div>

            ))}
        </div>
)}

export {AppContextProvider, VideoList};

