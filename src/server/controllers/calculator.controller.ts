import type { CalcReqBody } from '../../common/types';
import { ServerError } from '../errors/error';
import Calculator from '../services/сalculator';

const calculate = ({ number1, number2, action }: CalcReqBody) => {
  try {
    return Calculator.calculate(number1, number2, action);
  } catch (err: any) {
    throw new ServerError(err.message);
  }
};

export default calculate;
