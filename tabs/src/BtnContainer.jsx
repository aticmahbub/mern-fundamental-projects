import React from 'react';

function BtnContainer({jobs, setCurrentItem, currentItem}) {
    return (
        <div className='btn-container'>
            {jobs.map((item, index) => {
                return (
                    <button
                        onClick={() => setCurrentItem(index)}
                        key={item.id}
                        className={
                            currentItem === index ? 'job-btn-active' : 'job-btn'
                        }
                    >
                        {item.company}
                    </button>
                );
            })}
        </div>
    );
}

export default BtnContainer;
