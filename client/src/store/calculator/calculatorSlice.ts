import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { calculate } from '../../api/calculator'
import { CalcReqBody, CalcErrorResponse, CalcSuccessfulResponse } from '../../../../common/types'
import { initialState } from './initialState'
import { FetchStatus, Operations } from '../../ts/enums'
import type { RootState } from '../store'
import { DEFAULT_ERROR_MESSAGE } from '../../constants/calculatorConstants'

export const makeCalculation = createAsyncThunk(
  'calculator/makeCalculation',
  async (body: CalcReqBody, { rejectWithValue }) => {
    try {
      const response = await calculate(body)

      return response.data
    } catch (err: any) {
      if (!err.response.data.message) {
        rejectWithValue(err.response.data)
      }

      return rejectWithValue(err.response.data)
    }
  }
)

const checkManyZeroes = (payload: string, number: string): boolean =>
  number === '0' && payload === '0'

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    toggleConstructorMode(state, { payload }) {
      return {
        ...initialState,
        mode: payload
      }
    },
    setOperation(state, { payload }) {
      if (payload === Operations.Substraction) {
        if (state.input.number1 === '') {
          return {
            ...state,
            input: {
              ...state.input,
              number1: '-'
            }
          }
        }

        if (state.input.action && state.input.number2 === '') {
          return {
            ...state,
            input: {
              ...state.input,
              number2: '-'
            }
          }
        }
      }

      if (state.input.number1 !== '' && !state.input.action) {
        state.input.action = payload
      }
    },
    setNumber(state, { payload }) {
      state.result = null
      state.errorMessage = null

      if (state.input.action) {
        if (checkManyZeroes(payload, state.input.number2)) {
          return
        }
        state.input.number2 += String(payload)

        return
      }

      if (checkManyZeroes(payload, state.input.number1)) {
        return
      }
      state.input.number1 += String(payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(makeCalculation.pending, (state) => {
        state.calculationStatus = FetchStatus.Pending
      })
      .addCase(makeCalculation.fulfilled, (state, action) => {
        state.calculationStatus = FetchStatus.Idle
        state.result = (action.payload as CalcSuccessfulResponse).result
        state.input = initialState.input
      })
      .addCase(makeCalculation.rejected, (state, { payload }) => {
        state.calculationStatus = FetchStatus.Rejected
        state.errorMessage = (payload as CalcErrorResponse).message ?? DEFAULT_ERROR_MESSAGE
        state.input = initialState.input
      })
  }
})

export default calculatorSlice.reducer

export const { setOperation, setNumber, toggleConstructorMode } = calculatorSlice.actions

export const getResult = (state: RootState) => state.calculator.result
export const getCurrentMode = (state: RootState) => state.calculator.mode
export const getCalculatorInput = (state: RootState) => state.calculator.input
export const getCalculationStatus = (state: RootState) =>
  state.calculator.calculationStatus
export const getErrorMessage = (state: RootState) =>
  state.calculator.errorMessage
