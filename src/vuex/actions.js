import axios from 'axios';

export default {
    async GET_CARDS_FROM_API({commit}) {
        try {
            const cards = await axios.get('http://localhost:3000/cards');
            commit('SET_CARDS_TO_STATE', cards.data);
            return cards.data;
        } catch (err) {
            throw err;
        }
    },
    ADD_TO_CART({commit}, card) {
        commit('SET_CART', card);
    },
    DELETE_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index);
    },
    INCREMENT_CART_ITEM({commit}, index) {
        commit('INCREMENT', index);
    },
    DECREMENT_CART_ITEM({commit}, index) {
        commit('DECREMENT', index);
    },
};
