import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import Utilities from './Utilities.js';
import db from './firebase';

function TweetBox() {
	const [ tweetMessage, setTweetMessage ] = useState('');

	const sendTweet = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			displayname: 'Tanmay Kapoor',
			username: '__tanmaykapoor__',
			verified: false,
			text: tweetMessage,
			image: 'https://www.verdict.co.uk/wp-content/uploads/2017/09/giphy-downsized-large.gif',
			avatar:
				'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'
		});

		setTweetMessage('');
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
					<Button class="tweet-button" type="submit" onClick={sendTweet}>
						Tweet
					</Button>
				</div>
			</form>
		</div>
	);
}

export default TweetBox;
