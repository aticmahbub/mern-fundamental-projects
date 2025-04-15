import {useEffect} from 'react';
import {useState} from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleRemove = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };
    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTours(data);
            setLoading(false);
            console.log(tours);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchTours();
    }, []);

    if (loading) return <Loading />;

    return (
        <main>
            <Tours tours={tours} handleRemove={handleRemove} />
            {tours.length < 1 && (
                <>
                    <h2>No tours left</h2>
                    <button
                        onClick={fetchTours}
                        style={{marginTop: '2rem'}}
                        className='btn'
                    >
                        Refetch
                    </button>
                </>
            )}
        </main>
    );
};
export default App;
