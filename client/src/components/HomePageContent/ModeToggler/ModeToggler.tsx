import React from 'react'
import CodeIcon from '@mui/icons-material/Code'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button } from '@mui/material'
import { getCurrentMode, toggleConstructorMode } from '../../../store/calculator/calculatorSlice'
import { ConstructorMode } from '../../../ts/enums'
import classNames from 'classnames'

import styles from './ModeToggler.module.scss'

const ModeToggler = () => {
  const dispatch = useDispatch()
  const mode = useSelector(getCurrentMode)

  const handleModeChange = (newValue: ConstructorMode) =>
    dispatch(toggleConstructorMode(newValue))

  const onConstructorClick = () => handleModeChange(ConstructorMode.Constructor)
  const onRuntimeClick = () => handleModeChange(ConstructorMode.Preview)

  const isPreview = mode === ConstructorMode.Preview

  return (
    <Box className={styles.toggler}>
      <Button
        className={classNames({
          [styles.btn]: true,
          [styles.active]: isPreview
        })}
        startIcon={
          <RemoveRedEyeIcon className={classNames({
            [styles.activeIcon]: isPreview
          })} />
        }
        onClick={onRuntimeClick}
      >
        Runtime
      </Button>
      <Button
        className={classNames({
          [styles.btn]: true,
          [styles.active]: !isPreview
        })}
        startIcon={
          <CodeIcon className={classNames({
            [styles.activeIcon]: !isPreview
          })}/>
        }
        onClick={onConstructorClick}
      >
        Constructor
      </Button>
    </Box>
  )
}

export default ModeToggler
