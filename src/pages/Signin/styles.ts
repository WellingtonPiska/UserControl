import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
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
  font-size: 14px;
  color: red;
`

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`

export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 89%;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f0f2f5;
  border: none;
  max-width: 350px;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
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
  margin: 10px auto 0; // Adicionado para centralizar o botão e adicionar espaço acima dele
`

export const LabelFields = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 600;
  margin-left: 10px;
  color: #676767;
`
