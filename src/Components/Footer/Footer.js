import React from 'react'
import * as S from './Style'

import facebook from "../../Images/facebook.png"
import insta from "../../Images/insta.png"
import linkedin from "../../Images/linkedin.png"
import medium from "../../Images/medium.png"
import youtube from "../../Images/youtube.png"

const Content = () => {
    return(
        <S.Container>
            <S.SubTitle id='contatos'>Contato</S.SubTitle>
            <S.Box1>
              <S.Line>Siga nossas redes sociais e fique conectado com todas as novidades.</S.Line>
              <S.Nav>
                <S.List>
                  <S.ListItem><a href="https://www.facebook.com/vainaweb" target="_blank"><S.Img src={facebook} /></a></S.ListItem>
                  <S.ListItem><a href='https://www.instagram.com/vainaweb/' target="_blank"><S.Img src={insta} /></a></S.ListItem>
                  <S.ListItem><a href='https://medium.com/@olavainaweb' target="_blank"><S.Img src={linkedin} /></a></S.ListItem>
                  <S.ListItem><a href='https://www.linkedin.com/company/vainaweb/?originalSubdomain=br' target="_blank"><S.Img src={medium} /></a></S.ListItem>
                  <S.ListItem><a href='https://www.youtube.com/channel/UCzUldn76ZB0b-g6WOij9m3w' target="_blank"><S.Img src={youtube} /></a></S.ListItem>  
                </S.List>
              </S.Nav>
            </S.Box1>
        </S.Container>
    )
}

export default function Footer(){

    return(
        Content()
    )
}