import { styled } from 'styled-components'

export const StyledInput = styled.input`
  margin: 0.6rem 0;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 1px 1px 6px #0000001c;
  font-size: 0.8rem;
  width: 100%;

  &:hover {
    background-color: #eeeeee75;
  }

  &:focus-visible {
    outline: 1px solid #6c63ff;
  }
`
