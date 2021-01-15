import React from 'react';

import Header from '../templates/Header';
import Navigation from '../templates/Navigation';


const Index = () =>{

    return(
        <div >
            <Header />
            <Navigation />
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            <a href="#" className="btn btn-md bg-purple">
                                <i className="fa fa-arrow-left"></i>
                            </a>
                            Kantor PJK3 Mandiri
                        </h1>
                        <ol className="breadcrumb">
                            <li>
                                <a href="#">
                                    <i className="fa fa-dashboard"></i> Home
                                </a>
                            </li>
                            <li className="active">
                                <a href="#">Daftar Kantor</a>
                            </li>
                        </ol>
                    </section>
                    {/* content */}
                    <section className="content">
                        {/* Default box */}
                        <div className="box box-content">
                            <div className="box-body">
                                Yo leliho
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Index;
