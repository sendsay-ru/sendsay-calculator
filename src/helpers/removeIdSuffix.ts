import { CLONE_SUFFIX } from '../constants/calculatorConstants';

export default function removeIdSuffix(id: string): string {
  return id.replace(CLONE_SUFFIX, '');
}
