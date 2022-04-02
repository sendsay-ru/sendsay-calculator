import React from 'react'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { getCalculatorInput, getResult, getErrorMessage } from '../../../../store/calculator/calculatorSlice'
import classNames from 'classnames'

import styles from './Display.module.scss'

const Display = () => {
  const input = useSelector(getCalculatorInput)
  const result = useSelector(getResult)
  const error = useSelector(getErrorMessage)
  const displayedValue = error
    || result
    || input.number2
    || input.number1
    || null

  const isDefault = displayedValue === null

  return (
    <Box className={styles.wrapper}>
      <Box className={classNames({
          [styles.display]: true,
          [styles.digits]: !isDefault
        })
      }>
        <Box className={classNames({
          [styles.digitsArea]: true,
          [styles.text]: error,
          [styles.value]: !isDefault
        })}>
          { displayedValue ?? '0' }
        </Box>
      </Box>
    </Box>

  )
}

export default Display