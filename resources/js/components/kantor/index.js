import React from 'react';
import Standar from '../templates/Standar'
import ListKantor from './ListKantor';

// Untuk cara pakai component Standar
// Bisa dilihar di folder global

const Index = () =>{

    return(
        <div >
            <Standar
                name="Kantor PJK3 Mandiri"
                crumbread={['Daftar Kantor']}
            >
                <ListKantor />
            </Standar>

        </div>
    );
}

export default Index;
