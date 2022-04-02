import { http } from './setup'
import { CalcResBody, CalcReqBody } from '../../../common/types'

export const calculate = (body: CalcReqBody) => {
  return http.post<CalcResBody>('/api/calculate', body)
}
