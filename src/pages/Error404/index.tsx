import { Container, Description, LogoImage, Title } from './styles'
import error404 from '../../assets/error404.jpg'
import React, { useEffect } from 'react'

export function Error404() {
  useEffect(() => {
    // Aplicar estilo ao corpo da página para ocultar a rolagem
    document.body.style.overflow = 'hidden'

    // Limpar o estilo quando o componente for desmontado
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <Container>
      <Title>Erro 404</Title>
      <Description>Página não encontrada</Description>
      <LogoImage src={error404} />
    </Container>
  )
}
