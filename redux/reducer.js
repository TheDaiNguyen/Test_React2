import { createSlice } from "@reduxjs/toolkit";

const xeSlice = createSlice({
    name: 'xe',
    initialState: {
        listXe: []
    },
    reducers: {
        addXe(state, action) {
            state.listXe.push(action.payload);
        },
        setXe(state, action) {
            state.listXe = action.payload;
        },
        updateXe(state, action) {
            const index = state.listXe.findIndex(xe => xe.id === action.payload.id);
            if (index !== -1) {
                state.listXe[index] = action.payload;
            }
        },
        deleteXe(state, action) {
            state.listXe = state.listXe.filter(xe => xe.id !== action.payload); // Lọc theo id
        }        
    },
});

export const { addXe, setXe, updateXe, deleteXe } = xeSlice.actions;
export default xeSlice.reducer;