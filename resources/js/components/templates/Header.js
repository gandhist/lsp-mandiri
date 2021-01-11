import React from 'react';
import { useRecoilValue } from "recoil";
import { authUser } from '../store/Index';

const ForgotPassword = () =>{
    const user = useRecoilValue(authUser)


    return(
        <div>
            <header className="main-header">
                <a href="{{ url('') }}" className="logo">
                    <span className="logo-mini">P3SM</span>
                    <span className="logo-lg"><img src="#" height="30px" alt="" className="img-fluid" /></span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    </a>
                    <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown notifications-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <i className="fa fa-bell-o" />
                                <span className="label label-warning">33</span>
                            </a>
                            <ul className="dropdown-menu" style={{width: '400px !important'}}>
                                <li className="header">Kamu Punya 4 notifikasi</li>
                                <li>
                                    <ul className="menu">
                                        <li>
                                            <a href="{{ url('sk/list') }}?f_status_sk=mohon_1">
                                                <i className="fa fa-users text-aqua" /> 
                                                Telah mendaftar
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown user user-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <img src="AdminLTE-2.3.11/dist/img/avatar.png" className="user-image" alt="User Image" />
                            <span className="hidden-xs">{user.data.name}</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-footer">
                            <div>
                                <button className="btn btn-default" type="submit">Sign Out</button>
                            </div>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </nav>
                </header>

        </div>
    );
}

export default ForgotPassword;