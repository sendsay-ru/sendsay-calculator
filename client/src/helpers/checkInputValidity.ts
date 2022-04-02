import { CalculatorInput } from '../store/calculator/initialState'

export default function checkInputValidity(input: CalculatorInput): boolean {
  return !Object.values(input).includes('')
}
