import React from 'react';
import './Utilities.css';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import GifIcon from '@material-ui/icons/Gif';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

function Utilities() {

	function handleClick(e) {
		document.getElementById("img-upload").click();
	}
	

	return (
		<div className="utilities">
			<CropOriginalIcon className="utility"/>
			<GifIcon className="utility" />
			<EqualizerIcon className="utility" />
			<SentimentSatisfiedIcon className="utility" />
			<CalendarTodayIcon className="utility" />
		</div>
	);
}

export default Utilities;
