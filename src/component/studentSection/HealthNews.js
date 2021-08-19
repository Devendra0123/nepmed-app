import React from 'react'
import "./HealthNews.css"

function HealthNews() {
    return (
        <div className="health_news">
          <div className="transparent_background">
           <div className="health_news_title">
               <h3>News</h3>
           </div> 
           <div className="single_news">
           <div className="news_title">
               <h4>Hello news</h4>
           </div>
           <div className="news_content">
               <p>Hey</p>
               <button type="button">&#xbb;</button>
           </div>
           </div>
           <div className="single_news">
           <div className="news_title">
               <h4>Hello news</h4>
           </div>
           <div className="news_content">
               <p>Hey</p>
               <button type="button">&#xbb;</button>
           </div>
           </div>
           <div className="single_news">
           <div className="news_title">
               <h4>Hello news</h4>
           </div>
           <div className="news_content">
               <p>Hey</p>
               <button type="button">&#xbb;</button>
           </div>
           </div>
           </div>
        </div>
    )
}

export default HealthNews
