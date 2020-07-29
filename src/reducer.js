export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]                 
            };
        case 'REMOVE_FROM_BASKET':

            //we cloned the basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((BasketItem) => BasketItem.id === action.id);
            if (index >=0) {
                // item exits in basket, remove it..
                newBasket.splice(index, 1);

            } else{
                console.warn(
                    'Cant remove product'
                );
            }

            return { ...state,
                 basket: newBasket, 
                };
        default:
            return state;
    }
};

export default reducer;