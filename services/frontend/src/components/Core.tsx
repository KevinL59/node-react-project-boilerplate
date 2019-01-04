import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Component
import MainPage from './MainPage';

// Style
import '../style/Core.scss'

class Core extends React.Component {

    render() {
        return (
            <div className="main-wrapper">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={MainPage}/>
                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Core;