import React from 'react';

import Header from '../templates/Header';
import Navigation from '../templates/Navigation';

import ListKantor from '../kantor/ListKantor';

const Index = () =>{

    return(
        <div >
            <Header />
            <Navigation />
            <ListKantor />
        </div>
    );
}

export default Index;
