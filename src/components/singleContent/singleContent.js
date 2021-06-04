import { Badge } from '@material-ui/core';
import React from 'react';
import {img_300,unavailable} from '../../config/config';
import './singleContent.css';

const SingleContent = ({
        id,
        poster,
        title,
        date,
        media_type,
        vote_average
    }) => {
    return (
        <div className="media">
            <Badge 
            badgeContent={vote_average}
            color={vote_average>6?'primary':'secondary'}
            />
            <img 
            className="poster"
            alt={title} 
            src={poster?`${img_300}/${poster}`:`${unavailable}`}
            />
            <b className="title">{title}</b>
            <span className="subTitle">
                {media_type==="TV"?"Series":"Movie"}
                <span className="subTitle">{date}</span>
            </span>
        </div>
    )
}

export default SingleContent
