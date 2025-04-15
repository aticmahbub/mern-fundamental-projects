import React from 'react';
import SingleQuestion from './SingleQuestion';

export default function Questions({questions, toggleQuestion, activeId}) {
    return (
        <section className='container'>
            <h1>Questions</h1>
            <div>
                {questions?.map((question) => {
                    return (
                        <SingleQuestion
                            key={question.id}
                            {...question}
                            toggleQuestion={toggleQuestion}
                            activeId={activeId}
                        />
                    );
                })}
            </div>
        </section>
    );
}
