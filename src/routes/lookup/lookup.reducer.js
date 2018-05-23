
export const homeReducer = (state = { posts:[] }, action) => {
    switch(action.type){
        case 'POST_DATA_DATA_RECIEVED':
         return {...state, posts:action.response}
        default:
         return {...state};
    }
}

