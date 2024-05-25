
// first we have to import createSlice 

import { createSlice } from "@reduxjs/toolkit";

// now we define the initail state of the application its always defined as object

const initialState={
    backgroundColor:"red",
    width:40,
    height:40,
    radius:'0%'
    
    
}

// now we createSlice

const boxSlice= createSlice({
    initialState:initialState,
    name:"box" ,
    reducers:{
        changeHeight(state){
            if(state.radius === '50%'){
                const newHeight = state.height + 5
                state.width = newHeight
                state.height = newHeight
              }else{
                state.height=state.height+5
              }
        },
        changeWidth(state){
            if(state.radius === '50%'){
                const newWidth = state.width + 5
                state.width = newWidth
                state.height = newWidth
              }else{
                state.width=state.width + 5
              }
        },
        changeShape(state){
        
        state.radius='50%'
        state.width=state.height
             
        },
        changeBackground(state,action){
            state.backgroundColor=action.payload
        }
        
    }
})


export const { changeHeight,changeWidth,changeShape, changeBackground} = boxSlice.actions
export default boxSlice.reducer
