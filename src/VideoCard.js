import React, { useRef, useEffect, useState } from 'react';

import "./VideoCard.css";
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);
    //added
    useEffect(() => {
        let options = {
          rootMargin: "0px",
          threshold: [0.25, 0.75]
        };

        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                videoRef.current.play();                
              } else {
                videoRef.current.pause();
                  }
            });
          };
      
          let observer = new IntersectionObserver(handlePlay, options);
      
          observer.observe(videoRef.current);
        });

    const onVideoPress = () =>{
        if (isVideoPlaying){
            //stop
            videoRef.current.pause()
            setIsVideoPlaying(false)
        }else{
            //play
            videoRef.current.play()
            setIsVideoPlaying(true)
        }
    }
    
  
    

   
    //useState
    //useRef
    

    
    return (
        <div className='videoCard'>
           <VideoHeader/>
           <video
            ref = {videoRef}
            onClick={onVideoPress}
            className ="videoCard__player"
            src={url}
            alt="Wikacy Reel" 
            loop
            />
            <VideoHeader
            />
            <VideoFooter
             channel = {channel}
             likes = {likes}
             shares = {shares}
             avatarSrc = {avatarSrc}
             song = {song} 
            />

        </div>
    )
}

export default VideoCard
