
export const homeData = (state = { post:[] }, action) => {
    switch(action.type){
        case '':
         return {...state, posts:action.payload.response}
        default:
         return state;
    }
}

