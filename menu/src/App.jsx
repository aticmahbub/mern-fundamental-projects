import {useState} from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];
const App = () => {
    const [menuItems, setMenuItems] = useState(menu);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(menu);
        } else {
            const filteredItems = menu.filter(
                (item) => item.category === category,
            );
            setMenuItems(filteredItems);
        }
    };
    return (
        <main>
            <section className='menu'>
                <Title title='our menu' />
                <Categories categories={categories} filterItems={filterItems} />
                <Menu menuItems={menuItems} />
            </section>
        </main>
    );
};
export default App;
