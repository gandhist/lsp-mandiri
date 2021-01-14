import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import Authenticated from './middleware/Authenticated';


import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import NotFound from "./templates/NotFound";
import Dashboard from "./Dashboard";
import Kantor from "./kantor/index";
import ListUsers from "./users/ListUsers";
import UsersAdd from "./users/Add";
import UsersEdit from "./users/Edit";


const App = () => {
    return (
        <Router>
            <RecoilRoot>
                <Suspense fallback="">
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/forgot_password">
                            <ForgotPassword />
                        </Route>

                        <Authenticated>
                            <Route exact path="/">
                                <Dashboard />
                            </Route>

                            <Route exact path="/kantor">
                                <Kantor />
                            </Route>

                            {/* if role administrator */}
                            <Route exact path="/users">
                                <ListUsers />
                            </Route>
                            <Route exact path="/users/add">
                                <UsersAdd />
                            </Route>
                            <Route exact path="/users/edit/:id">
                                <UsersEdit />
                            </Route>
                            {/* end of if role administrator */}
                        </Authenticated>

                        {/* if url notfound */}
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Suspense>
            </RecoilRoot>
        </Router>
    );
};

// export default App;
ReactDOM.render(<App />, document.getElementById("app"));