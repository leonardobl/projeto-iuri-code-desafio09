import React from 'react'
import * as S from "./styles"

import smile from "../../../public/imgs/smile.svg"
import mail from "../../../public/imgs/mail.svg"
import insta from "../../../public/imgs/instagram.svg"
import phone from "../../../public/imgs/phone.svg"

import Image from 'next/image'

type ImgTypeProps = "SMILE" | "EMAIL" | "INSTAGRAM" | "PHONE"

type SocialIconProps = {
  imgType: ImgTypeProps
  textBody: string
}

type IDataProps = (type: ImgTypeProps) => ({text: string, icon: HTMLImageElement})

export const SocialIcon = ({imgType, textBody} : SocialIconProps) => {
  
  const typeTextReturn: IDataProps = (type: "SMILE" | "EMAIL" | "INSTAGRAM" | "PHONE" ) => {
    
    switch (type) {
      case "SMILE":
      return {text: "My name is", icon: smile as HTMLImageElement }
      
      case "EMAIL":
      return {text: "E-mail", icon: mail as HTMLImageElement }
      
      case "INSTAGRAM":
      return {text: "Instagram", icon: insta as HTMLImageElement}
      
      case "PHONE":
      return {text: "Phone", icon: phone as HTMLImageElement}
      
    }
    
  }

  
  const { icon, text } = typeTextReturn(imgType)
  
  return (
    <S.Container>
      <S.WrapImg>
        <Image src={icon}/>
      </S.WrapImg>
      <span>{text}</span>
      <p data->{textBody}</p>
    </S.Container>
    )
  }
