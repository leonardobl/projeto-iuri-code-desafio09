import React from 'react'
import Link from 'next/link'
import * as S from "./styles"
import { HamburguerMenu } from '../HamburguerMenu'
import { useWidth } from '../../hooks/useWidth'


export const Header = () => {

  const width = useWidth()
  
  return (
    <S.Container> 
      <h2>Portifólio</h2>
      <S.WrapLinks>
        <Link href={"#"}>Sobre mim</Link>
        <Link href={"#"}>Projetos</Link>
        <Link href={"#"}>Serviços</Link>
        <Link href={"#"}>Minhas skills</Link>
      </S.WrapLinks>
      { width <= 600 &&  <HamburguerMenu />}
    </S.Container>
  )
}
