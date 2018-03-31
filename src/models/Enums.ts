export const LoadStates = {
    Empty: 'Empty',
    InProgress: 'InProgress',
    Error: 'Error',
    Loaded: 'Loaded',
}

export enum PageStates {
    Empty,
    Loading,
    List,
    Edit,
    New,
    Error,
} 

export enum ErrorType {
    unknow = 'Unknown',
    ajax = 'Ajax',
}