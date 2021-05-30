import React from 'react';
import { fromUnixTime, format } from 'date-fns'

import { flickrTypes } from '../../redux/Flickr';
import getImageUrl from '../../utils/getImageUrl';

import './style.scss';

interface CardProps extends flickrTypes.FlickrPhoto {};

const Card:React.VFC<CardProps> = ({title, secret, server, dateupload, id, owner }) => {
    const imageUrl = getImageUrl({
        server,
        id,
        secret
    })
    return (
        <div className="card">
            <img className="card__image" src={imageUrl} alt={title}/>
            <div className="card__info">
                <p className="card__title">{title}</p>
                <div className="card__additional">
                    <span className="card__name">{owner}</span>
                    <span className="card__time">{format(fromUnixTime(Number(dateupload)), 'MM/dd/yyyy')}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;