import { Badge } from '@material-ui/core';
import React from 'react';
import {img_300,unavailable} from '../../config/config';
import './singleContent.css';
import ContentModal from '../Modal/contentModal.js';

const SingleContent = ({
        id,
        poster,
        title,
        date,
        media_type,
        vote_average
    }) => {
    return (
        <ContentModal media_type={media_type} id={id} >
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
                {media_type==="tv"?"Series":"Movie"}
                <span className="subTitle">{date}</span>
            </span>
        </ContentModal>
    )
}

export default SingleContent
