import React from 'react'
import * as S from './Style'

const Content = () => {
    return(
        <S.Container>
        <S.SubTitle id='eventos'>Eventos</S.SubTitle>
        <S.Box1>
            <S.Box2></S.Box2>
            <S.Box3>
                <S.Info>Tech Girls</S.Info>
                <S.Line>Com o objetivo de promover network entre mulheres de tecnologia, conectar talentos femininos com oportunidades no mercado da tecnologia, oferecer experiências de troca através de eventos com mulheres que já têm experiência no mercado da tecnologia, acelerar os talentos com ajuda para custeio de luz e internet para facilitar o processo de estudo, promover mentoria para as participantes do grupo.</S.Line>
            </S.Box3>
        </S.Box1>
      </S.Container>
    )
}

export default function Eventos(){

    return(
        Content()
    )
}