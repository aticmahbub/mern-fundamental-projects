import React from 'react';
import {useState} from 'react';

export default function Tour({id, image, info, name, price, handleRemove}) {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className='single-tour'>
            <img className='img' src={image} alt={name} />
            <span className='tour-price'>{price}</span>
            <div className='tour-info'>
                <h5>{name}</h5>
                <p>{readMore ? info : `${info.substring(0, 100)}...`}</p>
                <button
                    onClick={() => setReadMore(!readMore)}
                    className='info-btn'
                >
                    {readMore ? 'Read less' : 'Read more'}
                </button>
            </div>
            <button
                onClick={() => handleRemove(id)}
                className='btn btn-block delete-btn'
            >
                Remove
            </button>
        </article>
    );
}
