import {useState} from 'react';

import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
export default function SingleQuestion({
    id,
    title,
    info,
    activeId,
    toggleQuestion,
}) {
    const isActive = id == activeId;
    return (
        <article className='question'>
            <header>
                <h2>{title}</h2>
                <button
                    className='question-btn'
                    onClick={() => toggleQuestion(id)}
                >
                    {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {isActive && <p>{info}</p>}
        </article>
    );
}
