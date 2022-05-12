import React from 'react'
import { Container } from './styles'
import Image from 'next/image'
import html from "../../../public/imgs/html.svg"
import css from "../../../public/imgs/css3.svg"
import js from "../../../public/imgs/js.svg"
import equal from "../../../public/imgs/ondas.svg"
import react from "../../../public/imgs/atom.svg"
import next from "../../../public/imgs/next.svg"


type ImgType = "HTML" | "CSS" | "JS" | "EQUAL" | "REACT" | "NEXT"

type CardSkillProps =  {
  icon: ImgType
}

export const CardSkill = ({ icon } : CardSkillProps) => {
  
  function getCard(type: ImgType) {
    switch (type) {
      case "HTML":
      return <Image src={html} />
      case "CSS":
      return <Image src={css} />
      case "JS":
      return <Image src={js} />
      case "EQUAL":
      return <Image src={equal} />
      case "REACT":
      return <Image src={react} />
      case "NEXT":
      return <Image src={next} />
    }
  }
  
  
  return (
    <Container>
      {getCard(icon)}
    </ Container>
    )
  }
