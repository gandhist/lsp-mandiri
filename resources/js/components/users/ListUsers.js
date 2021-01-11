import React, {useEffect, useState} from 'react'
import {NavLink, Link} from 'react-router-dom';
import Index from './index';
import Api from '../Api';



const ListUsers = () =>{

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getUser = async () => {
        try {
            await Api.getListUsers().then(res => {
                setUsers(res.data.data)
            })
        } catch (error) {
            console.error('asasd',error.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const renderListUsers = () => {
        if(isLoading){
            return(
                <tr>
                    <td colSpan='9'>Loading Data...</td>
                </tr>
            );
        }
        else{
            if(users.length === 0){
                <tr>
                    <td colSpan='9'>No Data in Database</td>
                </tr>
            }
            else {
                // foreach
                return users.map(
                    (user, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.username}</td>
                            <td>{user.created_at}</td>
                            <td>{user.created_at}</td>
                            <td>{user.created_at}</td>
                            <td>{user.created_at}</td>
                            <td>{user.created_at}</td>
                        </tr>
                    )
                );
            }
        }
    }

    return (
        <Index title="User Management">
            
                        <div className="box-body">

                            {/* <div className="alert alert-success alert-dismissible fade in"> {{ session()->get('message') }}
                                <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                            </div> */}
                            <div style={{marginBottom: '20px'}}>
                                {/* <Add /> */}
                                <NavLink to="/users/add" className="btn bg-olive"><span>Input</span></NavLink>
                            </div>
                            {/* sub menu */}
                            <table  className="table table-striped table-bordered" cellSpacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Nama</th>
                                        <th>User Name</th>
                                        <th>Jabatan</th>
                                        <th>Tgl Input</th>
                                        <th>Aktif</th>
                                        <th>Action</th>
                                        <th>U_Tambah</th>
                                        <th>U_Ubah</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {renderListUsers()}
                                </tbody>
                            </table>
                        </div>
                    
                   
            
        </Index>
    );
}

export default ListUsers;