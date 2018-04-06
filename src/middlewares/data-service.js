import axios from 'axios';
import { ModalWindow } from '../components/modal-window/modal-window';

const config ={
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers:{'content-type':'application/json'},
    responseType: 'json', // default
    timeout: 10000,
};

const extractPromiseData = promise => next => type => {
    ModalWindow.open('loader');
    promise.then( response => response.data)
        .then( response => {
            next({ type:`${type}_DATA_RECIEVED`, response});
            ModalWindow.close('loader');
        })
        .catch( error => {
            next({
                type:`${type}_DATA_ERROR`,
                error
            })
            ModalWindow.close('loader');
        });
}

const postApiGenerator = ({url, method, data}) => {
    return axios.post(url, {
        ...config,
        method,
        data
    });
};

const getApiGenerator = ({url, method, params}) => {
    return axios.get(url, {
        ...config,
        method,
        params
    })
};

export const dataService = store => next => action => {
    const { type, method , url, data={}, params={}} = action;
    switch(action.method){
        case 'POST':
            const postPromise = postApiGenerator({method,url,data});
            extractPromiseData(postPromise)(next)(type);
            break;
        case 'GET':
            const getPromise = getApiGenerator({method,url,params});
            extractPromiseData(getPromise)(next)(type);
            break;
        default:
            break;
    }
    return next(action);
};
