export const enum FetchStatus {
  Pending,
  Fulfilled,
  Rejected,
  Idle,
}

export const enum ConstructorMode {
  Constructor,
  Preview,
}

export const enum Operations {
  Addition = 1,
  Substraction,
  Multiplication,
  Division,
}

export const enum ElementId {
  Display = 'display',
  Operations = 'operations',
  Digits = 'digits',
  Equals = 'equals',
}
