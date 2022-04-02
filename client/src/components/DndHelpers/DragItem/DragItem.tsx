import React from 'react'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities'
import DragContainer from '../DragContainer/DragContainer'
import classNames from 'classnames';
import { CLONE_SUFFIX } from '../../../constants/calculatorConstants';

import styles from './DragItem.module.scss'


interface Props {
  id: string,
  children: React.ReactNode,
  forceLineAfter?: boolean,
  disabled?: boolean,
  index?: number
}

enum Position {
  Before,
  After
}

const DragItem = ({
  id,
  children,
  index,
  disabled=false,
  forceLineAfter=false
}: Props) => {
  const {
    setNodeRef,
    listeners,
    attributes,
    transition,
    transform,
    over,
    active
  } = useSortable({ id, disabled, data: { index } })

  const checkSorting = (id: string, activeId?:string, overId?: string) =>
    !activeId?.includes(CLONE_SUFFIX)
      && !overId?.includes(CLONE_SUFFIX)
      && overId === id
      && overId !== activeId

  const checkNewItem = ( forced: boolean, activeId?: string, overId?: string) =>
    activeId?.includes(CLONE_SUFFIX)
      && forced
      && Boolean(overId)

  const isLastItem = checkNewItem(forceLineAfter, active?.id, over?.id)
  const position = over?.data?.current?.index >= active?.data?.current?.index
    ? Position.Before
    : Position.After

  const innerSortBefore = checkSorting(id, active?.id, over?.id)
    && position === Position.Before
  const innerSortAfter = checkSorting(id, active?.id, over?.id)
    && position === Position.After

  return (
    <div
      className={classNames({
        [styles.insertAfter]: isLastItem || innerSortBefore,
        [styles.insertBefore]: innerSortAfter
      })}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        touchAction: 'none',
        transition,
        transform: CSS.Translate.toString(transform),
      }}
    >
      <DragContainer
        unDraggable={disabled}
        visiblyLocked={active?.id === id}
      >
        {children}
      </DragContainer>
    </div>
  )
}

export default DragItem
