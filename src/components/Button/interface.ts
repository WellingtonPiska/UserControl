export interface ButtonProps {
  Text: string
  onClick: () => void
  Type?: 'button' | 'submit' | 'reset'
}
