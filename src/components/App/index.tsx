import React from 'react';

import Header from '../Header';
import CardList from '../CardList';

import './style.scss';

const App: React.VFC = () => (
    <div className="app" id="app">
        <Header />
        <CardList />
    </div>
);

export default App;
