import CodeIcon from '@mui/icons-material/Code';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box, Button } from '@mui/material';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentMode, toggleConstructorMode } from '../../../store/calculator/calculatorSlice';
import { ConstructorMode } from '../../../ts/enums';

import styles from './ModeToggler.module.scss';

const ModeToggler = () => {
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();
  const dispatch = useDispatch();
  const mode = useSelector(getCurrentMode);

  const handleModeChange = (newValue: ConstructorMode) => dispatch(toggleConstructorMode(newValue));

  const removeVariable = () => {
    (window as any).isExausted = false;

    if (timerId) {
      clearTimeout(timerId);
    }
  };

  const onConstructorClick = () => handleModeChange(ConstructorMode.Constructor);

  const onRuntimeClick = () => {
    removeVariable();

    const timerId = setTimeout(() => {
      (window as any).isExausted = true;
    }, 61 * 1000);

    setTimerId(timerId);
    handleModeChange(ConstructorMode.Preview);
  };

  const isPreview = mode === ConstructorMode.Preview;

  return (
    <Box className={styles.toggler}>
      <Button
        className={classNames({
          [styles.btn]: true,
          [styles.active]: isPreview,
        })}
        startIcon={
          <RemoveRedEyeIcon
            className={classNames({
              [styles.activeIcon]: isPreview,
            })}
          />
        }
        onClick={onRuntimeClick}
      >
        Runtime
      </Button>
      <Button
        className={classNames({
          [styles.btn]: true,
          [styles.active]: !isPreview,
        })}
        startIcon={
          <CodeIcon
            className={classNames({
              [styles.activeIcon]: !isPreview,
            })}
          />
        }
        onClick={onConstructorClick}
      >
        Constructor
      </Button>
    </Box>
  );
};

export default ModeToggler;
