import React from 'react';
import './Feed.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
	return (
		// {/* Feed */}
		<div className="feed">
			{/* Header */}
			<div className="feed-header">
				<h2>Home</h2>
				<StarBorderIcon className="star" />
			</div>

			{/* Tweet box */}
			<TweetBox />

			{/* Post */}
			<Post />
			{/* Post */}
			{/* Post */}
			{/* Post */}
			{/* Post */}
		</div>
	);
}

export default Feed;
