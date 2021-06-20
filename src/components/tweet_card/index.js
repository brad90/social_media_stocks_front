import React from 'react'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import './styles.scss'

function TweetCard({data}) {
   return (
      <div className="tweet__card">
         <div className="tweet__card__avatar">
            <Avatar  src="/profiles_default/profile_pic_1.jpeg" alt="profile picture"/>
         </div>
         <div className="tweet__card__info">
            <p>
               {data.tweet}
            </p>
            <div className="tweet__card__buttons">
               <Button className="bull button_transparent" size="small"><TrendingUpIcon />{data.trendup}</Button>
               <Button className="bear button_transparent" size="small"><TrendingDownIcon />{data.trenddown}</Button>
               <Button className={`${data.user_direction.toLowerCase() == 'bear' ? 'bear' : 'bull'}` }size="small">{data.user_direction}</Button>
            </div>
         </div>
      </div>
   )
}

export default TweetCard
