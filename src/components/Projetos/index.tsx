import React from "react"
import { useWidth } from "../../hooks/useWidth"
import { CardProject } from "../CardProject"
import * as S from "./styles"

export const Projetos = () => {
  
  const myWidth = useWidth()
  
  const arrayFake = new Array(6).fill(0)
 
  return (
    <S.Container>
      <h2>Projetos</h2>
      <S.CardsWrap>
        {myWidth > 600 ?  arrayFake.map( (el, index) => <CardProject key={`${index}-${el}`} /> ) : (
          <>
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
          </>
       )}
      
      
      </S.CardsWrap>
    </S.Container>
      )
    }
