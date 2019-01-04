export interface IAction { 
    type: string,
    payload: any 
}

export function myAction(): IAction {
    return {
        type: 'INITIAL',
        payload: ''
    };
}