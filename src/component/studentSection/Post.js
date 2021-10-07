import React,{useEffect, useState} from 'react'
import "./Post.css"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import { IconButton } from '@material-ui/core';
import axios from "axios";
import Pusher from "pusher-js"
import CircularProgress from '@material-ui/core/CircularProgress';
import { pink } from '@material-ui/core/colors';

function Post() {
  const [posts, setPosts] = useState(null);

  const fetchPosts= async() =>
  await axios.get("https://devendra13.herokuapp.com/sync").then(response=>{
  console.log(response);
  setPosts(
    response.data.sort((a, b) => 
      new Date(a) < new Date(b) ? 1 : -1)
  );
  }).catch(error=>{
     console.log(error);
   })

  useEffect(()=>{
    const pusher = new Pusher('b6adbe58378609c354f0', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('posts');
    channel.bind('inserted', function(data) {
      fetchPosts();
    });
  },[]);
  
  useEffect(()=>{
    fetchPosts();
  },[]);

  console.log(posts);
    return (
      <div className="posts">
        {
          posts ? posts.map(item=>{
           return (<div key={item._id} className="post">
          <div className="post_top_section">
          <div className="user_info">
             <img src="data:image/jpeg;base64,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" alt="" />
             <h4>Devendra</h4>
                 <span className="time_stamp">today</span>
             </div> 
             <div className="more_icon">
             <IconButton>
             <MoreVertIcon />
             </IconButton> 
          </div>
          </div>
          <div className="user_post">
             <p>{item.caption ? item.caption : null}</p>
             <img src={item.image ? item.image : null} alt="" />
          </div>
          <div className="post_icons">
            <ThumbUpAltIcon />
            <CommentIcon />
            <ShareIcon />
          </div>
        </div>)
          }) : <CircularProgress className="progressBar" style={{ color: pink[500] }} size={35}/>
        }
      </div>  
    )
}

export default Post
