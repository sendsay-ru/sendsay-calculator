import React from 'react';
import { useDispatch } from 'react-redux';

import { setNumber } from '../../../../store/calculator/calculatorSlice';
import RegularBtn from '../../../ui-kit/Buttons/RegularBtn/RegularBtn';

import styles from './ButtonContainer.module.scss';

const ButtonContainer = () => {
  const dispatch = useDispatch();

  const children = [
    { text: '7' },
    { text: '8' },
    { text: '9' },
    { text: '4' },
    { text: '5' },
    { text: '6' },
    { text: '1' },
    { text: '2' },
    { text: '3' },
    { text: '0' },
    { text: ',' },
  ];

  return (
    <div className={styles.container}>
      {children.map((btn) => {
        const onClick = () => dispatch(setNumber(btn.text));

        return (
          <RegularBtn key={btn.text} onClick={onClick}>
            {btn.text}
          </RegularBtn>
        );
      })}
    </div>
  );
};

export default ButtonContainer;
