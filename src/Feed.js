import React, {useState, useEffect} from 'react';
import './Feed.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TweetBox from './TweetBox';
import Post from './Post';
import db from "./firebase"

function Feed() {

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts").onSnapshot((snapshot) =>
		  setPosts(snapshot.docs.map((doc) => doc.data()))
		);
	  }, []);

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
			{posts.map((post) => (
          <Post
            key={post.text}
            displayname={post.displayname}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}

			
		</div>
	);
}

export default Feed;
