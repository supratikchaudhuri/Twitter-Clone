import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({ displayname, username, verified, text, image, avatar }) {
	return (
		<div className="post">
			<div className="post-avatar">
				<Avatar />
			</div>

			<div className="post-body">
				<div className="post-header">
					<div className="post-header-text">
						<h3>
							Supratik Chaudhuri
							<span>
								<CheckCircleIcon className="verification-badge" />
								supratikkk
							</span>
						</h3>
					</div>
					<div className="post-header-description">
						<p>Twitter clone using react components</p>
					</div>
				</div>
				<img src="https://i.gadgets360cdn.com/large/twitter-main_1563278463162.jpg" />

				<div className="post-footer">
					<ChatBubbleOutlineIcon fontSize="small" className="utility reply" />
					<RepeatIcon fontSize="small" className="utility rt" />
					<FavoriteBorderIcon fontSize="small" className="utility like" />
					<PublishIcon fontSize="small" className="utility share" />
				</div>
			</div>
		</div>
	);
}

export default Post;
