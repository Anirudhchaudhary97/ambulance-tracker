
// configureStore without persistStore

// import { configureStore,Tuple } from '@reduxjs/toolkit'
// import userSlice from '../reducerSlices/userSlice'
// import logger from 'redux-logger'

//  const store = configureStore({
//   reducer: {
//     user:userSlice,
   
//   },
//   middleware: () => new Tuple( logger),
// })

// export default store





import { configureStore, Tuple, combineReducers } from '@reduxjs/toolkit'

import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userSlice from '../reducerSlices/userSlice';
import locationSlice from '../reducerSlices/locationSlice';
import hospitalSlice from '../reducerSlices/hospitalSlice';
const persistConfig = {
    key: 'root',
    storage,
  }
  const rootReducer = combineReducers({ 
    user: userSlice,
    location:locationSlice,
    hospital:hospitalSlice

  })

  const persistedReducer = persistReducer(persistConfig, rootReducer)  
const store = configureStore({
    reducer: persistedReducer,
  middleware: () => new Tuple( logger),

})
export default store
export const persistor = persistStore(store)











