import { Operations } from './enums'

export interface CalcReqBody {
  number1: string,
  number2: string,
  action: Operations
}

export interface CalcErrorResponse {
  message: string
}

export interface CalcSuccessfulResponse {
  result: string
}

export type CalcResBody = CalcErrorResponse | CalcSuccessfulResponse
