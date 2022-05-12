import React from 'react'
import { About } from '../../About'
import { Footer } from '../../Footer'
import { GroupSocialIcons } from '../../GroupSocialIcons'

import { Header } from '../../Header'
import { Im } from '../../Im'
import { Projetos } from '../../Projetos'
import { Services } from '../../Services'
import { Skills } from '../../Skills'

import * as S from "./styles"

export const AppTemplate = () => {
  return (
    <>
      <S.Container>
        <Header />
        <Im />
        <About />
        <GroupSocialIcons />
        <Projetos />
        <Services />
        <Skills />
      </S.Container>
      <Footer />
    </>
    
  )
}

