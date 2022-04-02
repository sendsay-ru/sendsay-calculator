import { CLONE_SUFFIX } from '../constants/calculatorConstants'

export default function addIdSuffix<T extends { id: string }>(items: T[]): T[]{
  return items.map(el => {
    return {
      ...el,
      id: `${el.id}${CLONE_SUFFIX}`
    }
  })
}
