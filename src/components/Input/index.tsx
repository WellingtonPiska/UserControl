import React from 'react'
import { StyledInput } from './styles'
import { InputProps } from './interface'

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ style, ...props }, ref) => {
    return <StyledInput ref={ref} style={style} {...props} />
  },
)

Input.displayName = 'Input'
