import React from 'react'
import { DragOverlay as DndOverlay } from '@dnd-kit/core'
import type { DraggableItem } from '../../../ts/types'
import DragContainer from '../DragContainer/DragContainer'


interface Props {
  activeItem: DraggableItem | null,
}

const DragOverlay = ({ activeItem }: Props) => {
  if (!activeItem) {
    return null
  }

  return (
    <DndOverlay>
      <DragContainer wrappedInCard={!activeItem.isOnCanvas} dragging>
        { activeItem.component }
      </DragContainer>
    </DndOverlay>
  )
}

export default DragOverlay
