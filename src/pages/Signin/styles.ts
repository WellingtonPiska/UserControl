import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 98vh;
`

export const Content = styled.div`
  gap: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`

export const labelError = styled.label`
  min-height: 20px; /* Ajuste para a altura da mensagem de erro */
  font-size: 14px;
  color: red;
  margin-bottom: 8px;
  margin-left: 10px;
`

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;

    &:hover {
      color: #00050a;
    }
  }
`

export const Input = styled.input`
  padding: 16px 19px 16px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  background-color: #fbfbfd;
  border: 1px solid #ccc;
  max-width: 310px;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const InputContainerForPassword = styled.div`
  position: relative;
`

export const IconPassword = styled.span`
  position: absolute;
  right: 20px;
  cursor: pointer;
  height: 100%;
  top: 25px;

  &:hover {
    color: #0056b3;
  }
`

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  margin: 10px auto 0;

  &:hover {
    background-color: #0056b3;
  }
`

export const LabelFields = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 600;
  margin-left: 10px;
  color: #676767;
`
