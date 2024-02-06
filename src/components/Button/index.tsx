import * as C from './styles'
import { ButtonProps } from './interface'

const Button = ({ Text, onClick, Type = 'button' }: ButtonProps) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  )
}

export default Button
