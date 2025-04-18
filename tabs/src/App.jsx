import {useEffect} from 'react';
import {useState} from 'react';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [currentItem, setCurrentItem] = useState(0);

    const fetchJobs = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setJobs(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    if (loading) {
        return (
            <section className='jobs-center'>
                <div className='loading'></div>
            </section>
        );
    }
    return (
        <section className='jobs-center'>
            {/* button container */}
            <BtnContainer jobs={jobs} setCurrentItem={setCurrentItem} />
            {/* job info */}
            <JobInfo jobs={jobs} currentItem={currentItem} />
        </section>
    );
};
export default App;
