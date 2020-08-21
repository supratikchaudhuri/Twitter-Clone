import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import Utilities from './Utilities.js';

function TweetBox() {
	return (
		<div className="tweetbox">
			<Avatar className="avatar" />
			<form>
				<div className="tweetbox-input">
					<input placeholder="Whats Happening?" type="text" />
				</div>

				<div className="tweetbox-function">
					<Utilities />
					<Button class="tweet-button">Tweet</Button>
				</div>
			</form>
		</div>
	);
}

export default TweetBox;
