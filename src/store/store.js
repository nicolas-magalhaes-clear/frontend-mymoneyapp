import { configureStore } from '@reduxjs/toolkit'
import billingCycleSlice from './actions/billingCycleSlice'
export const store = configureStore({
  reducer: {
    billingCycle: billingCycleSlice
  },
})