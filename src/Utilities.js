import React, { useRef } from 'react';
import './Utilities.css';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import GifIcon from '@material-ui/icons/Gif';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Gif } from '@material-ui/icons';


function Utilities() {

	const picInput = useRef(null);
	const gifInput = useRef(null);

	return (
		<div className="utilities">
			<input type="file" ref={picInput} style={{ display: 'none' }} />
			<input type="file" ref={gifInput} style={{ display: 'none' }} />

			<CropOriginalIcon className="utility" onClick={() => picInput.current.click()}/>
			<GifIcon className="utility" onClick={() => gifInput.current.click()}/>
			<EqualizerIcon className="utility" />
			<SentimentSatisfiedIcon className="utility" />
			<CalendarTodayIcon className="utility" />
		</div>
	);
}

export default Utilities;
