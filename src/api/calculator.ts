import type { CalcReqBody } from '../common/types';
import makeCalculation from '../server';

export const calculate = async (body: CalcReqBody): Promise<any> => ({
  data: {
    result: makeCalculation(body),
  },
});
