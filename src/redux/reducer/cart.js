import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: [],
    },

    reducers: {
        addItems: (state, action) => {
            state.items = action.payload.items;
        },
        addItem: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        changeQuantity: (state, action) => {
            state.items = state.items.map((item) =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});

export const { addItems, addItem, changeQuantity, deleteItem } =
    cartSlice.actions;

export default cartSlice.reducer;
