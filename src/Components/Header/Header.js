import React from 'react'
import logo from '../../Images/logo.png'
import * as S from "./Style"

const Content = () => {
    return(
        <S.Container>      
        <S.Box1>
          <S.Img src={logo} alt="" />
          <S.Nav>
            <S.List>
              <S.Path href='#sobre'><S.ListItem>Sobre</S.ListItem></S.Path>
              <S.Path href='#formacao'><S.ListItem>Formação</S.ListItem></S.Path>
              <S.Path href='#equipe'><S.ListItem>Equipe</S.ListItem></S.Path>
              <S.Path href='#eventos'><S.ListItem>Eventos</S.ListItem></S.Path>
              <S.Path href='#contatos'><S.ListItem>Contatos</S.ListItem></S.Path>
            </S.List>
          </S.Nav>       
        </S.Box1>
        <S.Box2>
          <S.Title>
          <font color="#FF611E">//</font> Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end?
          </S.Title>
        </S.Box2>
        <S.Box3>
          <S.Box4>
            <S.Circle></S.Circle>
            <S.Circle></S.Circle>
            <S.Circle></S.Circle>
          </S.Box4>
          <S.Arrow></S.Arrow>
          <S.SubTitle>Inscreva-se no Vai na Web!</S.SubTitle>
          <S.Line>Inscrições 02 a 21 de Agosto</S.Line>
        </S.Box3>
        <S.Line2><b>Link para o formulário:</b> <a style={{color: "#FED5B2", textDecoration: "none"}} href="bit.ly/CarreiraVaiNaWeb" target="_blank">bit.ly/CarreiraVaiNaWeb</a></S.Line2>
      </S.Container>
    )
}
 
export default function Header(){

  return(    
    Content()
  )
}