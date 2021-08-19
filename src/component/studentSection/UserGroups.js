import React from 'react';
import "./UserGroups.css";

function UserGroups({groupImage, groupName}) {
    return (
        <div className="user_group">
            <img src={groupImage} />
            <p>{groupName}</p>
        </div>
    )
}

export default UserGroups
