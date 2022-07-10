import React from 'react'
import Sobre from './Components/Sobre/Sobre'
import Formacao from './Components/Formacao/Formacao'
import Equipe from './Components/Equipe/Equipe'
import Eventos from './Components/Eventos/Eventos'


export default function Main(){

    return(
        <>
          <Sobre />
          <Formacao />
          <Equipe />
          <Eventos />    
        </>         
    )
}