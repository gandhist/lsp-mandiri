import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Index from './index';
import Api from '../Api';


const Add = () => {

    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(1);
    const [active, setActive] = useState(active);

    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            let data = {
                name: name,
                username: username,
                email: email,
                password: password,
                role_id: role,
                is_active: active,
            }
            await Api.storeUser(data).then(
                (res) => {
                    alert(res.data.meta.message)
                    // if success move to /users
                    history.push('/users')
                },
                (err) => {
                    console.log(err.message)
                    console.error('err buat user', err)
                }
            )
        } catch (error) {
            console.error('err create user', error.message)
            alert('something went wrong')
        }
        finally {
            setIsLoading(false)
        }

    }
    return (
        <Index title="create user">
            <div className="box-header with-border">
                <h3 className="box-title">Create User</h3>
            </div>
            {/* /.box-header */}
            {/* form start */}
            <form role="form" action="#">
                <div className="box-body">
                    <div className="form-group">
                        <label htmlFor="name">Nama</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" name="name" id="name" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="form-control" name="username" id="username" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control" name="email" id="email" placeholder="Enter username" />
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
                    <button onClick={handleSubmit} type="button" name="submit" disabled={isLoading} className="btn btn-primary">{isLoading ? 'Processing...' : 'Submit'}</button>
                </div>
            </form>
        </Index>
    );
}

export default Add;