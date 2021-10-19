import React, {Suspense, Lazy} from 'react';
import { BrowserRouter as Router, Router, Switch } from 'react-router-dom';

const Login = Lazy(() => import('./view/login/Login'))

const Routes = () => {
    <Router>
        <Suspense fallback={<div></div>}>
            <Switch>
                <Router path="/login" component={Login}/>
            </Switch>
        </Suspense>
    </Router>
}

export default Router;