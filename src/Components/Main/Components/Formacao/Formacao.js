import React from 'react'
import * as S from './Style'
import code from "../../../../Images/code.png"
import tec from "../../../../Images/tec.png"

const Content = () => {
  return(
    <S.Container>
          <S.Box1>
            <S.SubTitle>Formação</S.SubTitle>  
            <S.SubBox>
            <S.Box1a>
              <S.Img src={tec} />
              <S.Img src={tec} />
            </S.Box1a>
            <S.Box1b>
              <S.Info>FRONT-END</S.Info>
              <S.Line>Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.</S.Line>
              <S.Info>BACK-END</S.Info>
              <S.Line>O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).</S.Line>
            </S.Box1b>
            </S.SubBox>                         
          </S.Box1>
          <S.Box2>
            <S.Img2 src={code} />
          </S.Box2>            
        </S.Container>
  )
}

export default function Formacao(){

  return(
      Content()
    )
}