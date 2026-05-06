import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearItem:(state,action)=>{
            state.items=[];
        }
    }
})
export const{addItems,removeItems,clearItems}=cartSlice.actions
export default cartSlice.reducer