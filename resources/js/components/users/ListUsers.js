import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Api from '../Api';



const ListUsers = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const getUser = async () => {
    //     try {
    //         await Api.getListUsers().then(res => {
    //             setUsers(res.data.data)
    //         })
    //     } catch (error) {
    //         console.error('asasd',error.message)
    //     }
    //     finally {
    //         setIsLoading(false)
    //     }
    // }

    useEffect(() => {
        try {
            Api.getListUsers().then(res => {
                setUsers(res.data.data)
            })
        } catch (error) {
            console.error('asasd', error.message)
        }
        finally {
            setIsLoading(false)
        }
    }, [])

    const renderListUsers = () => {
        if (isLoading) {
            return (
                <tr>
                    <td colSpan='9'>Loading Data...</td>
                </tr>
            );
        }
        else {
            if (users.length === 0) {
                <tr>
                    <td colSpan='9'>No Data in Database</td>
                </tr>
            }
            else {
                console.log(users)
                // foreach
                return users.map(
                    (user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.username}</td>
                            <td>{user.created_at}</td>
                            <td>{user.created_at}</td>
                            <td style={{
                                display: 'flex',
                                justifyContent: 'space-evenly'
                            }}>
                                <Link to={`/users/edit/${user.id}`} className="btn btn-warning btn-xs"><span className='glyphicon glyphicon-pencil'></span></Link>
                                <button className='btn btn-xs btn-danger'  ><span className='glyphicon glyphicon-trash'></span></button>
                            </td>
                            <td>{user.created_at}</td>
                            <td>{user.created_at}</td>
                        </tr>
                    )
                );
            }
        }
    }

    return (
        <Fragment>
            <div style={{ marginBottom: '20px' }}>
                {/* <Add /> */}
                <NavLink to="/users/add" className="btn bg-olive"><span>Input</span></NavLink>
            </div>
            {/* sub menu */}
            <table className="table table-striped table-bordered" cellSpacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Noaa</th>
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
        </Fragment>
    );
}

export default ListUsers;
