import { StyledErrorMessage } from './styles.ts'
import { ErrorMessageProps } from './interface.ts'

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  visible = true,
}) => {
  return (
    <StyledErrorMessage style={{ visibility: visible ? 'visible' : 'hidden' }}>
      {children}
    </StyledErrorMessage>
  )
}
