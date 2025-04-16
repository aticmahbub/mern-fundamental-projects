import React from 'react';

function Categories({categories, filterItems}) {
    console.log(categories);
    return (
        <div className='btn-container'>
            {categories.map((category) => {
                return (
                    <button
                        onClick={() => filterItems(category)}
                        key={category}
                        type='button'
                        className='btn'
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
}

export default Categories;
