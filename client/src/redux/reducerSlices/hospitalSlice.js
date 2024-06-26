
import { createSlice } from '@reduxjs/toolkit'

const initialState = { 

    hospitalsDetail:[]
}

const hospitalSlice = createSlice({
  name: 'hospital',
  initialState: initialState,
  reducers: {
    setHospitalDetail(state, actions) {
         
         return{
            ...state,
            hospitalsDetail: actions.payload
         }
    },

   
  },
})

export const{ setHospitalDetail } = hospitalSlice.actions
export default hospitalSlice.reducer
