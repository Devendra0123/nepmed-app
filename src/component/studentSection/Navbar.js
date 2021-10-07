import React from 'react';
import "./Navbar.css";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 3,
    border: `none`,
    padding: '0 4px',
  },
}))(Badge);

function Navbar() {
    return (
        <div className="navbar">
           <div className="navbar_left">
             <h1>D</h1>
             <div className="navbar_search">
               <PersonIcon style={{color:"grey"}} />
               <input type="text" placeholder="Search" />
               <SearchIcon style={{color:"grey"}} />
               <button type="submit"></button>
             </div>
           </div>
           <div className="navbar_right">
           <div className="message_icon">    
             <IconButton>
             <StyledBadge badgeContent={4} color="error">
              <MessageIcon style={{color:"white"}} />
              </StyledBadge>
             </IconButton>
           </div>
           <div className="notification_icon">
           <IconButton>
           <StyledBadge badgeContent={4} color="error">     
              <NotificationsIcon style={{color:"white"}} />     
            </StyledBadge>
            </IconButton>
           </div>
              <div className="navbar_user">
                 
                  <img src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=" alt="user"/>
                
                  <span>Devendra</span>          
              </div>
           </div>
        </div>
    )
}

export default Navbar
