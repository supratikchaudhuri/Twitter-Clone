import React from 'react';
import './Widgets.css';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetButton} from "react-twitter-embed";
import WidgetSearch from "./WidgetSearch"
import WhatsHappening from "./WhatsHappening";



function Widgets() {
	return (
		<div className="widgets">
			<WidgetSearch/>
			<WhatsHappening/>
		</div>
	);
}

export default Widgets;
