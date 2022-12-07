import React from 'react';
import { useDispatch } from 'react-redux';

import { setOperation } from '../../../../store/calculator/calculatorSlice';
import { Operations } from '../../../../ts/enums';
import RegularBtn from '../../../ui-kit/Buttons/RegularBtn/RegularBtn';

import styles from './OperationsBlock.module.scss';

const OperationsBlock = () => {
  const dispatch = useDispatch();

  const children = [
    { text: '/', operation: Operations.Division },
    { text: '∗', operation: Operations.Multiplication },
    { text: '-', operation: Operations.Substraction },
    { text: '+', operation: Operations.Addition },
  ];

  return (
    <div className={styles.container}>
      {children.map((btn) => {
        const onClick = () => dispatch(setOperation(btn.operation));

        return (
          <RegularBtn key={btn.text} onClick={onClick}>
            {btn.text}
          </RegularBtn>
        );
      })}
    </div>
  );
};

export default OperationsBlock;
