import React from 'react'
import * as C from './styles'
import { InputProps } from './interface'

const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input
