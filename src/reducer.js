export const initialState = {
    cart:[],
}


const reducer = (state,action) =>{
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,//spread operator
                cart:[...state.cart, action.item],
            }

            default:
                return state;
    }
}


export default reducer;