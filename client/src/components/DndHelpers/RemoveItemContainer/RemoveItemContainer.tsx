import React from 'react'


interface Props {
  handleRemove(): void,
  children: React.ReactNode
}

const RemoveItemContainer = ({ handleRemove, children }: Props) => {
  return (
    <div onDoubleClick={handleRemove} style={{ touchAction: 'manipulation' }}>
      { children }
    </div>
  )
}

export default RemoveItemContainer
