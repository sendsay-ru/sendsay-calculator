import type { Request, Response } from 'express'

import type { CalcReqBody } from '../../common/types'
import { ServerError } from '../errors/error'
import Calculator from '../services/сalculator'

export default class CalculatorController {
  static calculate (req: Request, res: Response) {
    try {
      const { number1, number2, action }: CalcReqBody = req.body
      const result = Calculator.calculate(number1, number2, action)

      return res.status(200).json({ result })
    } catch (err) {
      throw new ServerError(err.message)
    }
  }
}
