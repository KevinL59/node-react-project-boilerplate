import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import Core from "./components/Core"
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Core/>
    </Provider>,
    document.getElementById("core")
);