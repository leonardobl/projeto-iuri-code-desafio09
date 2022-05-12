import React from 'react'
import MenuHaburguer from "../../../public/imgs/menuHamburguer.svg"
import Image from 'next/image'


export const HamburguerMenu = () => {
  return (
    <a href='#'>
      <Image src={MenuHaburguer} />
    </a>
  )
}
