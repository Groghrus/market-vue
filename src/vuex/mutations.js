export default {
    SET_CART: (state, card) => {
        if (state.cart.length) {
            let isCardExists = false;
            state.cart.map(function (item) {
                if (item.id === card.id) {
                    isCardExists = true;
                    item.quantity++;
                }
            });
            if (!isCardExists) {
                state.cart.push(card);
            }
        } else {
            state.cart.push(card);
        }
    },
    REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1);
    },
    SET_CARDS_TO_STATE: (state, cards) => {
        state.cards = cards;
    },
    INCREMENT: (state, index) => {
        state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity--;
        }
    },
};


