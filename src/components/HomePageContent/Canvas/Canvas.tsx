import { useDroppable } from '@dnd-kit/core';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Box, Typography } from '@mui/material';
import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';

import { DISABLED_BLOCKS, DROPPABLE_CONTAINER_ID } from '../../../constants/calculatorConstants';
import { getCurrentMode } from '../../../store/calculator/calculatorSlice';
import { ConstructorMode, ElementId } from '../../../ts/enums';
import type { DraggableItem } from '../../../ts/types';
import DragItem from '../../DndHelpers/DragItem/DragItem';
import RemoveContainer from '../../DndHelpers/RemoveItemContainer/RemoveItemContainer';

import styles from './Canvas.module.scss';

interface Props {
  items: DraggableItem[];
  handleRemove(id: string): void;
}

const Canvas = ({ items, handleRemove }: Props) => {
  const mode = useSelector(getCurrentMode);
  const { isOver, setNodeRef } = useDroppable({
    id: DROPPABLE_CONTAINER_ID,
  });

  const isDevMode = mode === ConstructorMode.Constructor;

  if (!items.length) {
    return (
      <Box
        className={classNames({
          [styles.container]: true,
          [styles.emptyContainer]: true,
          [styles.droppable]: isOver,
        })}
        ref={setNodeRef}
      >
        <AddPhotoAlternateIcon />
        <Typography variant="h3" className={styles.title}>
          Перетащите сюда
        </Typography>
        <Typography variant="body1" className={styles.body}>
          любой элемент из левой панели
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      className={classNames({
        [styles.container]: true,
      })}
      ref={setNodeRef}
    >
      {isDevMode ? (
        <>
          {items.map((el, i, arr) => {
            const onRemove = () => {
              if (el.id !== ElementId.Display) {
                handleRemove(el.id);
              }
            };
            const isDisabled = DISABLED_BLOCKS.includes(el.id);
            const isLastItem = arr.length - 1 === i;

            return (
              <RemoveContainer key={el.id} handleRemove={onRemove}>
                <DragItem forceLineAfter={isLastItem} index={i} id={el.id} disabled={isDisabled}>
                  {el.component}
                </DragItem>
              </RemoveContainer>
            );
          })}
        </>
      ) : (
        <>{items.map((el) => el.component)}</>
      )}
    </Box>
  );
};

export default Canvas;
