import classNames from 'classnames'
import React from 'react'

import styles from './DragContainer.module.scss'

interface Props {
  children: React.ReactNode,
  dragging?: boolean,
  visiblyLocked?: boolean,
  unDraggable?: boolean,
  wrappedInCard?: boolean
}

const DragContainer = ({
  children,
  dragging = false,
  unDraggable=false,
  visiblyLocked=false,
  wrappedInCard=false,
}: Props) => {
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [styles.dragging]: dragging,
        [styles.dragDisabled]: unDraggable,
        [styles.locked]: visiblyLocked,
        [styles.card]: wrappedInCard
      })}
    >
      { children }
    </div>
  )
}

export default DragContainer