import { styled } from 'styled-components'

export const FormWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 20px 20px;
  margin-left: 240px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  display: flex;
  align-self: flex-start;
  transform: translateY(-10px);
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-left: 10px;
`

export const Input = styled.input`
  width: calc(97% + 20px);
  padding: 10px 10px 10px 10px;
  margin: 0 auto;
  font-size: 14px;
  background-color: #fbfbfd;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 98.5%;
  background-color: #fbfbfd;
`

export const Button = styled.button`
  margin: 30px auto 10px 1330px;
  //width: calc(100% - 90px); // Ajusta a largura para ser igual à do input
  display: flex;
  padding: 12px 40px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 14px;
  &:hover {
    background-color: #0056b3;
  }
`

export const BackLink = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px 6px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 17px;
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
  margin: 3px 0;
  justify-content: space-between;
  align-items: center;
`

export const StyledErrorMessage = styled.p`
  color: red;
  font-size: 13px;
  height: 15px;
  display: flex;
  margin-top: 6px;
  margin-left: 8px;
  align-items: center;
  visibility: hidden; // Invisível por padrão
  margin-bottom: 10px; // Espaço reservado, ajuste conforme necessário
`
