import { styled } from 'styled-components'

export const FormWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  background-color: #fff; /* Adicionando fundo branco ao formulário */
  padding: 20px; /* Espaçamento interno para o formulário */
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  margin: 0 auto 20px;
  text-align: center; /* Centralizar o título */
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-bottom: 8px;
`

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: center; /* Centralizar o botão no formulário */
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`

export const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 20;
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px 6px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`

export const Spacer = styled.div`
  flex: 1;
`

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px; // Espaço entre a barra superior e o título
`

// MENSAGEM DE ERRO

export const StyledErrorMessage = styled.p`
  color: red;
  font-size: 13px;
  height: 16px;
  margin-top: 2px;
  padding: 0;
  display: flex;
  align-items: center;
  visibility: hidden; // Invisível por padrão
  margin-bottom: 10px; // Espaço reservado, ajuste conforme necessário
`
