import React from 'react'
import SubmitBtn from '../../../ui-kit/Buttons/SubmitBtn/SubmitBtn'
import { useDispatch, useSelector } from 'react-redux'
import { makeCalculation, getCalculatorInput, getCalculationStatus, getCurrentMode } from '../../../../store/calculator/calculatorSlice'
import { ConstructorMode, FetchStatus } from '../../../../ts/enums'
import checkInputValidity from '../../../../helpers/checkInputValidity'
import { ValidCalcInput } from '../../../../store/calculator/initialState'

import styles from './SubmitBlock.module.scss'


const SubmitBlock = () => {
  const mode = useSelector(getCurrentMode)
  const input = useSelector(getCalculatorInput)
  const status = useSelector(getCalculationStatus)
  const dispatch = useDispatch()

  const isLoading = status === FetchStatus.Pending
  const isDisabled = !checkInputValidity(input)

  const handleSubmitClick = () =>
    dispatch(makeCalculation(input as ValidCalcInput))

  const isDevMode = mode === ConstructorMode.Constructor

  return (
    <div className={styles.wrapper}>
      <SubmitBtn
        isLoading={isLoading}
        onClick={handleSubmitClick}
        isDisabled={isDisabled && !isDevMode}
      >
        =
      </SubmitBtn>
    </div>
  )
}

export default SubmitBlock
