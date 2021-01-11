import React, { useEffect, useState } from 'react';
import {NavLink, Link, useHistory} from 'react-router-dom';
import Api from './Api';

const Login = () => {

    // state
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    

    const handleLogin = async () => {
        setLoading(true)
        try {
            await Api.login({
                username, password
            }).then(
                (res) => {
                    // 200 authorized
                    if(res.status == 200){
                        // save token to localstorage
                        console.log(res.data)
                        localStorage.setItem('access_token',JSON.stringify({login : true, access_token : res.data.data}))
                        history.push('/')
                    }
                    else {
                        alert(res.data.data.message)
                    }
                }
            ).catch(
                (err) => {
                    if(err.response.status == 422){
                        alert('data yang di input tidak boleh kosong')
                    }
                }
            )
        //     const s = await fetch('http://127.0.0.1:8000/api/login', {
        //     method: "POST",
        //     headers : {
        //       'Accept' : 'application/json',
        //       'Content-Type' : 'application/json',
        //     },
        //     body: JSON.stringify()
        //   });
        //   console.log(s)
        } catch {
            console.log('error on login')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

    }, [])


    return (
        <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Login</div>

                        <div className="card-body">
                            <form >

                                <div className="form-group row">
                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-right">Username</label>

                                    <div className="col-md-6">
                                        <input id="username" type="email" className="form-control" name="username" value={username} onChange={e => setUsername(e.target.value)} required autoComplete="email" autoFocus />

                                            {/* <span className="invalid-feedback" role="alert">
                                                <strong>pesan error</strong>
                                            </span> */}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                    <div className="col-md-6">
                                        <input id="password" type="password" className="form-control" name="password" value={password} onChange={e=> setPassword(e.target.value)} required autoComplete="current-password" />

                                            {/* <span className="invalid-feedback" role="alert">
                                                <strong>pesan error 2</strong>
                                            </span> */}
                                    </div>
                                </div>

                                <div className="form-group row mb-0">
                                    <div className="col-md-8 offset-md-4">
                                        <button type="button" onClick={handleLogin} className="btn btn-primary">
                                            {loading ? 'loading...' : 'Login'}
                                        </button>

                                            <Link className="btn btn-link"  to="/forgot_password">
                                                Forgot passwords?
                                            </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;