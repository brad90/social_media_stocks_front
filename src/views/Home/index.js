import React, {useEffect}from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Top5Table from "../../components/top5table"
import TweetCard from "../../components/tweet_card"
import { Link } from "react-router-dom"
import "./styles.scss"

function Home() {

   const placeholder = require("../../default_data/home_tweets.json")
   return (
      <div className="home">
         <div className="home__wrapper above_the_fold">
            <div className="home__text__left">
               <h1>Share.<br />Follow.<br />Trade.<br/></h1>
               <p>Something else goes here</p>
               <Link to="/login" className="home__text__left__button">
               <a>
                  Start Viewing For Free
                  <ArrowRightAltIcon/>
               </a>
               </Link>
            </div>
            <div className="home__text__right"> 
               {placeholder.latest_tweets.map(item => <TweetCard data={item}/>)}
            </div>
         </div>
         <div className="home__wrapper">
               <Top5Table/>      
         </div>
      </div>
   )
}

export default Home
