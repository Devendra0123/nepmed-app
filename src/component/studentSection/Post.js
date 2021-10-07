import React,{useEffect, useState} from 'react'
import "./Post.css"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import { IconButton } from '@material-ui/core';
import axios from "axios";
import Pusher from "pusher-js"

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
             <img src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t1.18169-9/12096526_481296872030546_4824792812474575147_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vpQCs1IYKT0AX9G6D0W&_nc_ht=scontent.fbwa1-1.fna&oh=f7d30b43093af002c1dce8aec4c27c9c&oe=61427B85" alt="" />
             <h4>Devendra</h4>
                 <span className="time_stamp">today, 2:15pm</span>
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
          }) : <h1>No feed</h1>
        }
      </div>  
    )
}

export default Post
