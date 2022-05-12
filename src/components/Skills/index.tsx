import React from 'react'
import { CardSkill } from '../CardSkill'
import * as S from "./styles"

export const Skills = () => {
  return (
    <S.Container>
      <h2>Skills</h2>
      <S.CardWrap>
        <CardSkill icon='HTML' />
        <CardSkill icon='CSS' />
        <CardSkill icon='JS' />
        <CardSkill icon='EQUAL' />
        <CardSkill icon='REACT' />
        <CardSkill icon='NEXT' />
      </S.CardWrap>
    </S.Container>
  )
}
