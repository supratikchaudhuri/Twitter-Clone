import React from 'react';
import './styles/PostFooter.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function PostFooter() {
	return (
		<div className="post-footer">
			<ChatBubbleOutlineIcon fontSize="small" className="utility reply" />
			<RepeatIcon fontSize="small" className="utility rt" />
			<FavoriteBorderIcon fontSize="small" className="utility like" />
			<PublishIcon fontSize="small" className="utility share" />
		</div>
	);
}

export default PostFooter;
