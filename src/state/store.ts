import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from './loggedInSlice'


const store = configureStore({
  reducer: {
    logged: loggedInReducer
  }
})

type stateType = ReturnType<typeof store.getState>


export default store

export type { stateType }