import { configureStore } from '@reduxjs/toolkit'
import CalculatorReducer from './calculator/calculatorSlice'

const store = configureStore({
  reducer: {
    calculator: CalculatorReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store
