// what the data layer looks like at the beggining.. 
export const initialState = {
    cart: [],
};

//  reducer for dispatching items to the data layer
const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        // whenever we receive add to card action, dispatch action
        // with this type -- reducer listens
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            }
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(cart => cart.id === action.id);
            let newCart = [...state.cart];
            if(index >= 0) {
                // fount item inside cart
                newCart.splice(index, 1);
            } else {
                console.warn('warning..')
            }

            return {
                ...state,
                cart: newCart
            }
        default:
            return state;
    }
}

export default reducer;