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
                 
                  <img src="https://www.facebook.com/photo/?fbid=481296872030546&set=a.119393948220842" alt="user"/>
                
                  <span>Devendra</span>          
              </div>
           </div>
        </div>
    )
}

export default Navbar
