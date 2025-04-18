import React from 'react';

function Title({title}) {
    return (
        <div className='title'>
            <h2>{title || 'Default title'}</h2>
            <div className='title-underline'></div>
        </div>
    );
}

export default Title;
