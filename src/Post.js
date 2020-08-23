import React, {forwardRef} from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import PostFooter from './PostFooter';

const Post = forwardRef(({ 
	displayname,
	username, 
	verified, 
	text, 
	image, 
	avatar
}, ref) => {
	return (
		<div className="post" ref = {ref}>
			{/* post Avatar */}
			<div className="post-avatar">
				<Avatar src = {avatar}/>
			</div>

			{/* PostBody */}
			<div className="post-body">
				<div className="post-header">
					<div className="post-header-text">
						<h3>
							{displayname}
							{verified ? <CheckCircleIcon className="verification-badge" /> : null}
							<span>
								@{username}
							</span>
						</h3>
					</div>
					<div className="post-header-description">
						<p>{text}</p>
					</div>
				</div>
				<img src={image} />

				{/* postFooter */}
				<PostFooter />
			</div>
		</div>
	);
})

export default Post;
