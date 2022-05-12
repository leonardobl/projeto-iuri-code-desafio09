import React from 'react'
import { SocialIcon } from '../SocialIcon'
import * as S from "./styles"

export const GroupSocialIcons = () => {

 
  return (
    <S.Container>
      <SocialIcon imgType='SMILE' textBody='Leonardo Lima'/>
      <SocialIcon imgType='EMAIL' textBody='leonardo.b.lima1@gmail.com'/>
      <SocialIcon imgType='INSTAGRAM' textBody='@leonardlima_'/>
      <SocialIcon imgType='PHONE' textBody='(86) 99523-3237'/>
    </S.Container>
  )
}
