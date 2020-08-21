import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import PostFooter from './PostFooter';

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
				<PostFooter />
			</div>
		</div>
	);
}

export default Post;
