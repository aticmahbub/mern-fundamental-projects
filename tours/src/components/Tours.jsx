import React from 'react';
import Tour from './Tour';

export default function Tours({tours, handleRemove}) {
    return (
        <section>
            <div className='title'>
                <h2>our tours</h2>
                <div className='title-underline'></div>
            </div>
            <div className='tours'>
                {tours.map((tour) => (
                    <Tour key={tour.id} {...tour} handleRemove={handleRemove} />
                ))}
            </div>
        </section>
    );
}
