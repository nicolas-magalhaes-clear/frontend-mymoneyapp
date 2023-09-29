import { configureStore } from '@reduxjs/toolkit'
import billingCycleSlice from './actions/billingCycleSlice'
import authSlice from './actions/authSlice'
export const store = configureStore({
  reducer: {
    billingCycle: billingCycleSlice,
    authSlice: authSlice
  },
})