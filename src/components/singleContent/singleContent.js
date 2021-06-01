import React from 'react';
import {img_300,unavailable} from '../../config/config';

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average
}) => {
    return (
        <div>
            <img alt="Poster unavailable" src={poster?`${img_300}/${poster}`:`${unavailable}`}/>

        </div>
    )
}

export default SingleContent
