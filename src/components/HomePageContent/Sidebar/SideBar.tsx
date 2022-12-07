import { Stack } from '@mui/material';
import React from 'react';

import removeIdSuffix from '../../../helpers/removeIdSuffix';
import type { DraggableItem } from '../../../ts/types';
import DragContainer from '../../DndHelpers/DragContainer/DragContainer';
import DragItem from '../../DndHelpers/DragItem/DragItem';

interface Props {
  items: DraggableItem[];
  activeId: string | null;
}

const SideBar = ({ items, activeId }: Props) => {
  return (
    <Stack spacing={'12px'}>
      {items.map((el) => {
        if (el.isOnCanvas || removeIdSuffix(el.id) === activeId) {
          return (
            <DragContainer key={el.id} unDraggable visiblyLocked>
              {el.component}
            </DragContainer>
          );
        }

        return (
          <DragItem id={el.id} key={el.id}>
            <DragContainer wrappedInCard>{el.component}</DragContainer>
          </DragItem>
        );
      })}
    </Stack>
  );
};

export default SideBar;
