import React from 'react'

export const Message = ({children,type}) => {
  return (
    <div className={`alerta ${type}`}>{children}</div>
  )
}
