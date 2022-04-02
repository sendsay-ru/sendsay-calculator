import { MouseSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'

const useCalculatorSensors = () => {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5
    }}
  )
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      distance: 5
    }}
  )
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 5
    }}
  )

  return useSensors(mouseSensor, touchSensor, pointerSensor)
}

export default useCalculatorSensors
