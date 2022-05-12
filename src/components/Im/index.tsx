import React from 'react'
import * as S from "./styles"
import Image from 'next/image'
import Img from "../../../public/imgs/about.svg"
import { CustomButton } from '../CustomButton'
import { useWidth } from '../../hooks/useWidth'

export const Im = () => {
  const width = useWidth()


  return (
    <S.Container>
      <S.TextContent>
        <h1>Hi, im Leonardo Lima</h1>
        <p>Front-End Development</p>
        <S.BtnWrap>
          <CustomButton text='Download CV' isFill={true} />
          <CustomButton text='Entrar em contato' isFill={false} />
        </S.BtnWrap>
      </S.TextContent>
      { width > 600 &&  <Image src={Img} /> }
    </S.Container>
  )
}
