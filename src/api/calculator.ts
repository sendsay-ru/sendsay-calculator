import makeCalculation from '../server'
import type { CalcReqBody } from '../common/types'

export const calculate = async (body: CalcReqBody): Promise<any> => ({
  data: {
    result: makeCalculation(body)
  }
})
