export const inject = (deps) => ({dispatch, getState}) => (next) =>(action) =>{
    return typeof action === 'function'? action({...deps,dispatch,getState}): next(action);
}