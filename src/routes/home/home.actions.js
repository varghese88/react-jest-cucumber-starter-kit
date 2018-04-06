export const displayCartPage = () => ({
    type:'DISPLAY_CART'
});

export const getPostData = () =>({
    type:'POST_DATA',
    method:'GET',
    url:'/posts'
})