import {useState} from 'react';
import data from './data';
import Questions from './Questions';
const App = () => {
    const [questions, setQuestions] = useState(data);
    const [activeId, setActiveId] = useState(3);
    const [showInfo, setShowInfo] = useState(false);
    const toggleQuestion = (id) => {
        const newActiveId = id === activeId ? null : id;
        setActiveId(newActiveId);
    };
    return (
        <div>
            <h2>Accordion Starter</h2>
            <div>
                <Questions
                    questions={questions}
                    activeId={activeId}
                    toggleQuestion={toggleQuestion}
                />
            </div>
        </div>
    );
};
export default App;
