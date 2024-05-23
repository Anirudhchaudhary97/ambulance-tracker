
// first we have to import createSlice 

import { createSlice } from "@reduxjs/toolkit";

// now we define the initail state of the application its always defined as object

const initialState={
    backgroundColor:"red",
    width:40,
    height:40,
    radius:0
    
    
}

// now we createSlice

const boxSlice= createSlice({
    initialState:initialState,
    name:"box" ,
    reducers:{
        changeHeight(state){
            state.height=state.height+5
        },
        changeWidth(state){
            state.width=state.width+5
        },
        changeShape(state){
            if(state.radius==0){
            
                state.radius=state.radius=50
            }else{
                state.radius=0
            }
             
        },
        changeBackground(state,action){
            state.backgroundColor=action.payload
        }
        
    }
})


export const { changeHeight,changeWidth,changeShape, changeBackground} = boxSlice.actions
export default boxSlice.reducer
