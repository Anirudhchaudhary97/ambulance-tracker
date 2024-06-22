
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

   
  },
})

export const{ changePickupAdress } = locationSlice.actions
export default locationSlice.reducer
