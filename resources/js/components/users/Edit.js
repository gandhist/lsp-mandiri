import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import Api from '../Api';
import Standar from "../templates/Standar";


const Edit = () => {
    const { id } = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(1);
    const [active, setActive] = useState(active);
    const [error, setError] = useState({
        name: {
            status: false,
            errClass: 'form-group',
            message: ''
        },
        email: {
            status: false,
            errClass: 'form-group',
            message: ''
        },
        username: {
            status: false,
            errClass: 'form-group',
            message: ''
        },
        password: {
            status: false,
            errClass: 'form-group',
            message: ''
        },
        role: {
            status: false,
            errClass: 'form-group',
            message: ''
        },
        active: {
            status: false,
            errClass: 'form-group',
            message: ''
        },
    })
    console.log(error)


    const handelUpdate = async () => {
        setIsLoading(true)
        try {
            let data = {
                id: id,
                _method: 'patch',
                name: name,
                username: username,
                email: email,
                password: password,
                role_id: role,
                is_active: active,
            }
            await Api.updateUser(data).then(
                (res) => {
                    alert(res.data.meta.message)
                    // if success move to /users
                    // history.push('/users')
                },
                (err) => {
                    if (err.response.status == 422) {
                        const errx = err.response.data.errors
                        const er = Object.keys(err.response.data.errors)
                        let a = [];
                        er.forEach(key => {
                            console.log(key, ...errx[key])
                            a = {
                                [key]: {
                                    status: true,
                                    errClass: 'form-group has-error',
                                    message: errx[key].toString()
                                }
                            }
                            // setError({
                            //     ...error, [key]: {
                            //         status: true,
                            //         errClass: 'form-group has-error',
                            //         message: errx[key].toString()
                            //     }
                            // });
                        });

                        console.log(a)
                    }
                }
            )
        } catch {
            alert('something went wrong')
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        Api.find(id).then(
            (res) => {
                let data = res.data.data
                setName(data.name);
                setEmail(data.email);
                setUsername(data.username);
                setRole(data.role_id ?? 1);
                setActive(data.is_active);
                // update data here
            })
    }, [id])

    return (
        <Standar
            name="Edit User"
            crumbread={['User', 'Edit']}
            back='users'
        >
            <form role="form" action="#">
                <div className="box-body">
                    <div className={`${error.name.errClass}`}  >
                        <label htmlFor="name">Nama</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" name="name" id="name" placeholder="Enter name" />
                        <span className='help-block' id='name-error' > {error.name.message}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="form-control" name="username" id="username" placeholder="Enter username" />
                    </div>
                    <div className={error.email.errClass}>
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control" name="email" id="email" placeholder="Enter username" />
                        <span className='help-block' id='name-error' > {error.email.message}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" name="password" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <select value={role} onChange={e => setRole(e.target.value)} className="form-control" name="role_id">
                            <option value='1' >Administrator</option>
                        </select>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input value={active} onClick={e => setActive(active ? false : true)} type="checkbox" name="is_active" defaultChecked="checked" /> Active
                        </label>
                    </div>
                </div>
                {/* /.box-body */}
                <div className="box-footer">
                    <button onClick={handelUpdate} type="button" name="submit" disabled={isLoading} className="btn btn-primary">{isLoading ? 'Processing...' : 'Submit'}</button>
                </div>
            </form>
        </Standar>
    );
}


export default Edit;
