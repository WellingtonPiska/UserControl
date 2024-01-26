import React from 'react'

export interface SidebarItemProps {
  Icon: React.ComponentType
  Text: string
  onClick: React.MouseEventHandler<HTMLDivElement>
  isActive: boolean
}
