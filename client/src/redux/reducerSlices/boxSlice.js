
// first we have to import createSlice 

import { createSlice } from "@reduxjs/toolkit";

// now we define the initail state of the application its always defined as object

const initialState={
    backgroundColor:"red",
    width:20,
    height:20,
    
}

// now we createSlice

const boxSlice= createSlice({
    initialState:initialState,
    name:"box" ,
    reducers:{
        changeHeight(state){
            state.height=state.height+1
        }
    }
})


export const { changeHeight } = boxSlice.actions
export default boxSlice.reducer
