import React from 'react'
import { Container } from './styles'
import { SidebarItemProps } from './interface.ts'

export const SidebarItem: React.FC<SidebarItemProps> = ({
  Icon,
  Text,
  onClick,
  isActive,
}) => {
  const activeStyle = isActive
    ? { backgroundColor: 'blue', color: 'white' }
    : {}

  return (
    <Container onClick={onClick} style={activeStyle}>
      <Icon />
      {Text}
    </Container>
  )
}
