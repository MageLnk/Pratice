import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../globalContext/globalContext'
import { Button } from 'antd';
import './home.css';

const Home = props => {
    const { count, setCount } = useContext(GlobalContext)
    return (
        <div>
            <div>
                <p>Hello there</p>
                <p>Hello there o k ase</p>
            </div>
            <div className='olakase'>
                <p>El conteo es: {count}</p>
            </div>
            <div>
                <Button onClick={e => setCount(count + 1)}>
                    Incrementa
                </Button>
            </div>
            <div>
                <p>
                    ASdfdasfsafdasff
                </p>
            </div>
            <Link to='/otherpage'>
                <Button type='danger'>
                    Other Page
                </Button>
            </Link>
        </div>
    );
}

export default Home;
