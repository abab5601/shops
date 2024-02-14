import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            cart: null
        }
    },
    getters: {
        car(state) {
            if (!state.cart) {
                state.cart = JSON.parse(localStorage.getItem('cart')) || {}
            }
            return state.cart;
        }
    },
    mutations: {
        add(state, { id, name = "" }) {
            state.cart = JSON.parse(localStorage.getItem('cart')) || {};
            state.cart[id] ??= 0;
            state.cart[id]++;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        remove(state, { id, name = "" }) {
            state.cart = JSON.parse(localStorage.getItem('cart')) || {};
            state.cart[id] ??= 0;
            if (state.cart[id] > 0) {
                state.cart[id]--;
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        clear(state) {
            state.cart = null;
            localStorage.removeItem('cart');
        },
        save(state, { id, name = "", value }) {
            state.cart = JSON.parse(localStorage.getItem('cart')) || {};
            state.cart[id] = value;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }
})
export default store;