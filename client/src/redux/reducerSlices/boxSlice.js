
// first we have to import createSlice 

import { createSlice } from "@reduxjs/toolkit";

// now we define the initail state of the application its always defined as object

const initialState={
    backgroundColor:"red",
    width:40,
    height:40,
    radius:'0%',
    top:0,
    right:0
    
    
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
        },

        changePosition(state, actions){
          const{value, alignment}=actions.payload
            if(alignment==="horizontal"){
               state.right=value
               state.top=0
            } else{
              state.top=value;
              state.right=0
            }
        }
         
        
    }
})


export const { changeHeight,changeWidth,changeShape, changeBackground,changePosition} = boxSlice.actions
export default boxSlice.reducer
