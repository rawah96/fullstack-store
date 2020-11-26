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
        default:
            return state;
    }
}

export default reducer;