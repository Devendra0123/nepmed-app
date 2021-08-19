import React from 'react'
import "./Feed.css"
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Post from "./Post";
import EnterPostField from './EnterPostField';

function Feed() {
    return (
        <div className="feed">     
            <div className="truth_quote">
              <h3>Truth is a pathless land and it can not be achieved through any system or process</h3>
            </div>
            <EnterPostField />
            <Post />
            
        </div>
    )
}

export default Feed
