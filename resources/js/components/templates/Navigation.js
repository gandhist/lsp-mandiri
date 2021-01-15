import React from 'react';
import {NavLink} from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { authUser } from '../store/Index';


const Navigation = () => {

    const user = useRecoilValue(authUser);

    return (
        <div>
            <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                    <div className="pull-left image">
                        <img src="/AdminLTE-2.3.11/dist/img/avatar.png" className="img-circle" alt={user.data.name} />
                    </div>
                    <div className="pull-left info">
                        <p>{user.data.name}</p>
                        <NavLink exact to="/"><i className="fa fa-circle text-success" /> Online</NavLink>
                    </div>
                    </div>
                    {/* sidebar menu: : style can be found in sidebar.less */}
                    <ul className="sidebar-menu">
                    <li className="header">Menu Utama</li>
                    <li className="treeview">
                        <NavLink exact to="/">
                        <i className="fa fa-dashboard" /> <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="treeview">
                        <NavLink exact to="/kantor">
                        <i className="fa fa-building" /> <span>Kantor</span>
                        </NavLink>
                    </li>
                    <li className="treeview">
                        <NavLink exact to="/badanusaha">
                        <i className="fa fa-building" /> <span>Badan Usaha</span>
                        </NavLink>
                    </li>
                    <li className="treeview">
                        <a href="#">
                        <i className="fa fa-gear" /> <span>Referensi</span>
                        <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right" />
                        </span>
                        </a>
                        <ul className="treeview-menu">
                        <li className="treeview">
                            <a href="#">
                            <i className="fa fa-users" /> <span>User &amp; Hak Akses</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right" />
                            </span>
                            </a>
                            <ul className="treeview-menu">
                            <li>
                                <NavLink exact to="/users">
                                <i className="fa fa-user" /> <span>Admin</span>
                                </NavLink>
                            </li>
                            <li>
                                <a href="{{ url('user_role') }}">
                                <i className="fa fa-user" /> <span>Hak Akses</span>
                                </a>
                            </li>
                            </ul>
                        </li>
                        {/* ganti password */}
                        <li className="treeview">
                            <a href="#">
                            <i className="fa fa-key" /> <span>Ganti Password</span>
                            </a>
                        </li>
                        {/* end of ganti password */}
                        </ul>
                    </li>
                    </ul>
                </section>
                {/* /.sidebar */}
                </aside>

        </div>
    );
}

export default Navigation;
