import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
      carts: null,
      total: null,
    },
    reducers:{
        setCartData: (state, {payload}) => {
            state.total = payload.total;
          state.carts = payload.carts;
        },
    }
})


export const {setCartData} = cartSlice.actions

