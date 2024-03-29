const initialState = {
    cart:[]
};

const cartReducer= (state = initialState, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:[...state.cart,action.payload]

            };

            case 'REMOVE_FROM_CART':
                return{
                    ...state,
                    cart: state.cart.filter(item => item.id !==action.payload)
                };

                case 'INCREMENT_QUANTITY':
                    return {
                        ...state,
                        cart: state.cart.map(item =>
                        item.id === action.payload ? {...item, quantity:item.quantity+1}:item)
                    };

                    case 'DECREMENT_QUANTITY':
                        return{
                            ...state,
                            cart:state.cart.map(item =>
                                item.id === action.payload ? {...item, quantity:Math.max(1,item.quantity)} : item)
                        };

                        default:
                            return state;
    }
};

export default cartReducer;