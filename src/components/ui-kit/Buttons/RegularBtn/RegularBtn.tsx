import { Button } from '@mui/material';
import React from 'react';

import styles from './RegularBtn.module.scss';

interface Props {
  onClick(): void;
  children: React.ReactNode;
}

const RegularBtn = ({ onClick, children }: Props) => {
  return (
    <Button className={styles.btn} onClick={onClick}>
      {children}
    </Button>
  );
};

export default RegularBtn;
