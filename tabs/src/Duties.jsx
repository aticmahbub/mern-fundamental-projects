import React from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';
import {v4 as uuidv4} from 'uuid';
function Duties({duties}) {
    console.log(duties);
    return (
        <div>
            {duties.map((duty, index) => {
                const id = uuidv4();
                return (
                    <div key={id} className='job-desc'>
                        <FaAngleDoubleRight className='job-icon' />
                        <p>{duty}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Duties;
