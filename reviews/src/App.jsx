import {useState} from 'react';
import reviews from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const App = () => {
    const [index, setIndex] = useState(0);

    const {id, name, job, image, text} = reviews[index];

    const handleForwardClick = () => {
        setIndex((currentIndex) => {
            const newIndex = currentIndex + 1;
            if (newIndex > reviews.length - 1) {
                return 0;
            }
            return newIndex;
        });
    };
    const handleBackwardClick = () => {
        setIndex((currentIndex) => {
            const newIndex = currentIndex - 1;
            if (newIndex < 0) {
                return reviews.length - 1;
            }
            return newIndex;
        });
    };

    const handleRandom = () => {
        let randomNumber = Math.floor(Math.random() * reviews.length);
        setIndex(randomNumber);
    };
    return (
        <main>
            <article className='review'>
                <div className='img-container'>
                    <img className='person-img' src={image} alt={name} />
                    <span className='quote-icon'>
                        <FaQuoteRight />
                    </span>
                </div>
                <h2 className='author'>{name}</h2>
                <p className='job'>{job}</p>
                <p className='info'>{text}</p>
                <div className='btn-container'>
                    <button className='prev-btn' onClick={handleBackwardClick}>
                        <FaChevronLeft />
                    </button>
                    <button className='next-btn' onClick={handleForwardClick}>
                        <FaChevronRight />
                    </button>
                </div>
                <button className='btn btn-hipster' onClick={handleRandom}>
                    Surprise me
                </button>
            </article>
        </main>
    );
};
export default App;
