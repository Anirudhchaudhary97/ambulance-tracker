import { configureStore,combineReducers, Tuple } from "@reduxjs/toolkit";
import boxSlice from "../reducerSlices/boxSlice";
import logger from "redux-logger";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
  }

  const rootReducer = combineReducers({ 
    box: boxSlice,
    
  })

  const persistedReducer = persistReducer(persistConfig,rootReducer)

const store= configureStore({
   
    reducer:persistedReducer,
     middleware:()=>new Tuple(logger)    
    
    
})
export default store
export const persistor = persistStore(store)