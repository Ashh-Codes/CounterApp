import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counterSlice",
    initialState:{count:0},
    reducers:{
        //define action 
        //here state is initial state
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
            return {...state,count:0}//as cannot directly assign to constant value,immutable data is object
        },
        incrementByAmount:(state,valueFRomComponent)=>{
            state.count += +valueFRomComponent.payload//+ to string to number
        }
    }
})

export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions// to share to counter component
export default counterSlice.reducer//to share to counterstore