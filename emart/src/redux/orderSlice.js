import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    bills: localStorage.getItem("bills") ? JSON.parse(localStorage.getItem("bills")) : [],
}


export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {

        addCartItems(state,action){
            state.bills.push(action.payload)
            toast.success(`Đã đặt hàng thành công!`,{
                position: "bottom-right"
            })
            localStorage.setItem("bills", JSON.stringify(state.bills));
        }
    }
})

export const { addCartItems } = orderSlice.actions;
export default orderSlice.reducer