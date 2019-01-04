import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from "redux";

import IStoreState from '../state';
import * as Actions from '../action';

interface IMainPageState {
    myState: string,
}

interface IMainPageDispatchProps {
    myAction(): Actions.IAction,
}

interface IMainPageStateProps {
    isDemographicDataLoad: Boolean
}

type GlobalProps = IMainPageDispatchProps & IMainPageStateProps

class MainPage extends React.Component<GlobalProps, IMainPageState> {

    public state: IMainPageState;

    constructor(props: any) {
        super(props)
        this.state = {
            myState: ''
        }
    }

    render() {
        return (
            <div>
                Bonjour a tous
            </div>
        )
    }
}

function mapDispatchToProps(dispatch: Dispatch<Actions.IAction>) {
    return bindActionCreators(Actions, dispatch)
}


function mapStateToProps(state: IStoreState) {
    return {
        firstState: state.firstState
    };
}

//export default MainPage;
export default connect<{}, {}, {}>(mapStateToProps, mapDispatchToProps)(MainPage);