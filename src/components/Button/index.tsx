import { StyledButton } from './styles'
import { ButtonProps } from './interface.ts'

export const Button: React.FC<ButtonProps> = (props, style) => {
  return <StyledButton style={style} {...props} />
}
