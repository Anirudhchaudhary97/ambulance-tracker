'use client'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store/configureStore'

// import { persistor } from './store/configureStore'
// import { PersistGate } from 'redux-persist/integration/react';

const ReduxProvider = ({children}) => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor} loading={null}> */}
      {children}
      {/* </PersistGate> */}
      </Provider>
  )
}

export default ReduxProvider
