import React from 'react'
import { useWidth } from '../../hooks/useWidth'
import { CardService } from '../CardService'
import * as S from "./styles"

export const Services = () => {

  const width = useWidth()

  return (
    <S.Container>
      <h2>Services</h2>
      <S.CardWrap>
        <CardService iconType='CODE' wd={width} />
        <CardService iconType='FIGMA' wd={width} />
        <CardService iconType='MOBILE' wd={width} />
      </S.CardWrap>
    </S.Container>
    )
  }
