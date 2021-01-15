// Implementasi ADMIN LTE
// Biar component lain nggak harus bikin
// Header, navigation segala macem

import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Navigation from './Navigation';

// ada 1 parameter wajib, nama dan childComponent
// 1. Nama akan digunakan pada header
// 2. crumbread merupakan array yang akan jadi menu crumbread
// 3. back akan menjadi value url tombol kembali
// Parameter back akan diteruskan ke sebagai argumen untuk fungsi {{url('back)}}
// Jika di isi dengan false, maka button tidak akan tampil

const Standar = ({ name, children, crumbread = [], back = '/' }) =>{

    return(
        <Fragment>
            <Header />
            <Navigation />
            <div>
                <div className="content-wrapper" style={{minHeight:"100vh"}}>
                    <section className="content-header">
                        <h1>
                            {
                                (back) ?
                                    <Link
                                        to={ (back === '/') ? '/' : '/' + back }
                                        className="btn btn-md bg-purple">
                                        <i className="fa fa-arrow-left"></i>
                                    </Link>
                                : ''
                            }
                            {name}
                        </h1>
                        <ol className="breadcrumb">
                            <li>
                                <a href="/">
                                    <i className="fa fa-dashboard"></i> Home
                                </a>
                            </li>
                            {
                                (crumbread.length > 0) ?
                                    crumbread.map((element, index, array) => {
                                        if (index+1 == array.length) {
                                            return (<li className="active">
                                                <a href="#">{element}</a>
                                            </li>)
                                        } else {
                                            return (<li>
                                                <a href="#">{element}</a>
                                            </li>)
                                        }
                                    })
                                : ''
                            }
                        </ol>
                    </section>
                    {/* content */}
                    <section className="content">
                        {/* Default box */}
                        <div className="box box-content" style={{minHeight:"93vh"}}>
                            <div className="box-body">
                                {children}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    );
}

export default Standar;
