import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f1f1f1;
  margin: 0;
  padding: 0;
`

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
`

export const Description = styled.p`
  font-size: 24px;
  color: #666;
  text-align: center;
  max-width: 80%; /* Aumentei a largura máxima do texto */
  margin: 0 auto; /* Centralizei horizontalmente o texto */
`

export const LogoImage = styled.img`
  max-width: 30%; /* Reduzi um pouco o tamanho da imagem */
  height: auto;
  margin-top: 10px;
  border: 4px solid #333;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`
