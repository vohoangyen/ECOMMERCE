import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex( item => item.id === action.payload.id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`Đã tăng số lượng ${state.cartItems[itemIndex].name} trong giỏ hàng`,{
                    position: "bottom-right"
                })
            }else{
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
                toast.success(`Đã thêm ${action.payload.name} vào giỏ hàng`,{
                    position: "bottom-right"
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action){
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            toast.error(`Đã xóa ${action.payload.name} khỏi giỏ hàng`,{
                position: "bottom-right"
            })
        },

        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1
            }else if(state.cartItems[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
                state.cartItems = nextCartItems;
                    
                toast.error(`Đã xóa ${action.payload.name} khỏi giỏ hàng`,{
                    position: "bottom-right"
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        getTotals(state, action){
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) => { // callback function
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal;
            }, { // initial value
                total: 0,
                quantity: 0
            });

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },

        clearCart(state, action){
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    }
})

export const { addToCart, removeFromCart, decreaseCart, getTotals, clearCart } = cartSlice.actions;

export default cartSlice.reducer