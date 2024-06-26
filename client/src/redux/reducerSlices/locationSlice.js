
import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    pickUpCord:[27.5, 83.45],
    pickUpAdress:""
}

const locationSlice = createSlice({
  name: 'location',
  initialState: initialState,
  reducers: {
    changePickupAdress(state, actions) {
         state.pickUpAdress=actions.payload
    },
    changePickUpCord(state,actions){
      state.pickUpCord=actions.payload
    }

   
  },
})

export const{ changePickupAdress,changePickUpCord} = locationSlice.actions
export default locationSlice.reducer
