import React, { useState } from 'react';
import './styles/TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import Utilities from './Utilities';

function TweetBox() {
	const [ tweetMessage, setTweetMessage ] = useState('');

	const sendTweet = (e) => {
		e.preventDefault();
	};

	return (
		<div className="tweetbox">
			<Avatar className="avatar" />
			<form>
				<div className="tweetbox-input">
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						placeholder="Whats Happening?"
						type="text"
						value={tweetMessage}
					/>
				</div>

				<div className="tweetbox-function">
					<Utilities />
					<Button className="tweet-button" type="submit" onClick={sendTweet}>
						Tweet
					</Button>
				</div>
			</form>
		</div>
	);
}

export default TweetBox;
