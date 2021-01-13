import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { authUser } from '../store/Index';
import Api from '../Api';

const ForgotPassword = () =>{
    const user = useRecoilValue(authUser)
    const history = useHistory();
    const [isLoading, setIsloading] = useState(false);

    const handleSignOut = async () => {
        setIsloading(true)
        try {
            await Api.logout().then(
                (res) => {
                    if(res.status == 200){
                        // revoking token
                        console.log(res)
                        localStorage.removeItem('access_token');
                        history.push('/login')
                    }
                    else {
                        alert(res.data.data.message)
                    }
                }
            ).catch(
                (err) => {
                if(err.response.status){
                    alert('something went wrong')
                }
            }
            );
        } catch (err) {
            console.log('error on logout')
        }
        finally {
            setIsloading(false)
        }
    }


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
                                {/* <span className="label label-warning">33</span> */}
                            </a>
                            <ul className="dropdown-menu" style={{width: '400px !important'}}>
                                <li className="header">-</li>
                                {/* <li>
                                    <ul className="menu">
                                        <li>
                                            <a href="{{ url('sk/list') }}?f_status_sk=mohon_1">
                                                <i className="fa fa-users text-aqua" />
                                                Telah mendaftar
                                            </a>
                                        </li>
                                    </ul>
                                </li> */}
                            </ul>
                        </li>
                        <li className="dropdown user user-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <img src="/AdminLTE-2.3.11/dist/img/avatar.png" className="user-image" alt="User Image" />
                            <span className="hidden-xs">{user.data.name}</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-footer">
                            <div>
                                <button className="btn btn-default" type="button" onClick={handleSignOut} >Sign Out</button>
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
