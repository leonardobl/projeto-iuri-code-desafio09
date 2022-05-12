import React from 'react'
import Image from 'next/image'
import * as S from "./styles"
import code from "../../../public/imgs/code.svg"
import figma from "../../../public/imgs/figma.svg"
import mobile from "../../../public/imgs/smartphone.svg"


type IconType = "CODE" | "FIGMA" | "MOBILE"
type CardServiceProps = {
  iconType: IconType,
  wd: number
}

export const CardService = ({iconType, wd} : CardServiceProps) => {
  
  
  function getDataCard(type: IconType, width: number){
    switch (type) {
      case "CODE":
      return width < 600 ? (
        <>
          <Image src={code} />
          <p>Criação de sites</p>
        </>
      ) : (
        <>
          <Image src={code} />
          <p>Criação<br /> de sites</p>
        </>
      )
      case "FIGMA":
      return width < 600 ? (
        <>
          <Image src={figma} />
          <p>UI Designer</p>
        </>
      ) : (
        <>
          <Image src={figma} />
          <p>UI<br /> Designer</p>
        </>
      )
      case "MOBILE":
      return width < 600 ? (
        <>
          <Image src={mobile} />
          <p>Sites responsivos</p>
        </>
      ) : (
        <>
          <Image src={mobile} />
          <p>Sites<br /> responsivos</p>
        </>
      )
    }
  }
  
  return (
    <S.Container>
      {getDataCard(iconType, wd)}
    </S.Container>
    )
  }
