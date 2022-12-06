import removeIdSuffix from "./removeIdSuffix";

export default function checkById(cloneId: string, originId: string) {
  return removeIdSuffix(cloneId) === originId
}
