import { IAction } from './action';

import IStoreState from "./state"

function initialState(): IStoreState {
    return {
        firstState: ''
    };
}

export default function basicReducer (state: IStoreState = initialState(), action: IAction) : IStoreState {
    const newState : IStoreState = Object.assign({}, state);
    switch (action.type) {
        case 'INITIAL':
            newState.firstState = ''
            break;
        default:
            return state;
    }
    return newState;
};
