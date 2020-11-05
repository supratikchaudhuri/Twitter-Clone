import React from 'react'
import "./WhatsHappening.css";
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetButton, TwitterTweetEmbed} from "react-twitter-embed";

function WhatsHappening() {
    return (
        <div className="whats-happening">
            <h2>What's Happening</h2>
            <TwitterTweetEmbed tweetId={'1297005786669907969'}/>
            <TwitterTimelineEmbed sourceType="profile" screenName="agrim26" options={{height: 400}}/>        
        </div>
    )
}

export default WhatsHappening
