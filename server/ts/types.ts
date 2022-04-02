export interface RestApiError {
  statusCode: number,
  message: string,
}

export interface CalcStrategy {
  makeCalculation(a: string, b: string): string;
  convertToNumber(arr: string[]): number[];
  getResult(a: number, b: number): number;
  round(res: number): number;
  formatResult(res: number): string;
}
