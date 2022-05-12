import React from 'react'
import * as S from "./styles"

type ButtonProps = {
  text: string
  isFill: boolean
}

export const CustomButton = ({ text, isFill }: ButtonProps) => {

  return (
    <S.Button isFill={isFill}>{text}</S.Button>
  )
}
