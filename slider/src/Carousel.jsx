import React, {useState} from 'react';
import {shortList, list, longList} from './data';
import {FaQuoteRight} from 'react-icons/fa';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';

function Carousel() {
    const [people, setPeople] = useState(shortList);
    const prevSlide = () => {};
    const nextSlide = () => {};
    return (
        <section className=' slider-container'>
            {people.map((item) => {
                const {image, name, quote, title} = item;
                return (
                    <article className='slide'>
                        <img className='person-img' src={image} alt={name} />
                        <h5 className='name'>{name}</h5>
                        <p className='title'>{title}</p>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight className='icon' />
                    </article>
                );
            })}
            <button type='button' onClick={prevSlide} className='prev'>
                <FiChevronLeft />
            </button>
            <button type='button' onClick={nextSlide} className='next'>
                <FiChevronRight />
            </button>
        </section>
    );
}

export default Carousel;
