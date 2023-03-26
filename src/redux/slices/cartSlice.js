import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload.id)
        },
        updateItem(state, action) {
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            })
        }
    }
})

export const { add, remove, updateItem } = cartSlice.actions;
export default cartSlice.reducer;