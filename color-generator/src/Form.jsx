import React, {useState} from 'react';

function Form() {
    const [color, setColor] = useState();
    console.log(color);
    const handleSubmit = (e) => {};
    return (
        <section className='container'>
            <h4>color generator</h4>
            <form className='color-form' onSubmit={handleSubmit}>
                <input
                    type='color'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <input
                    type='text'
                    name=''
                    id=''
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder='#000000'
                />
                <button
                    type='submit'
                    className='btn'
                    style={{background: color}}
                >
                    {' '}
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Form;
