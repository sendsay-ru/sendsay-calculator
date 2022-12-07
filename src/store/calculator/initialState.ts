import { Operations } from '../../common/enums';
import { FetchStatus, ConstructorMode } from '../../ts/enums';

export interface CalculatorInput {
  number1: string;
  number2: string;
  action: Operations | null;
}

export interface ValidCalcInput extends CalculatorInput {
  action: Operations;
}

export interface ReduxCalcState {
  input: CalculatorInput;
  mode: ConstructorMode;
  result: string | null;
  calculationStatus: FetchStatus;
  errorMessage: string | null;
}

export const initialState: ReduxCalcState = {
  input: {
    number1: '',
    number2: '',
    action: null,
  },
  mode: ConstructorMode.Constructor,
  result: null,
  calculationStatus: FetchStatus.Idle,
  errorMessage: null,
};
