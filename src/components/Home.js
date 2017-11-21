import React from 'react';
import '../styles/Home.css';
import SearchContainer from '../containers/SearchContainer';

const Home = ({ history }) => {
    return (
        <div className="home">
            <SearchContainer/>
        </div>
    );
}

export default Home;