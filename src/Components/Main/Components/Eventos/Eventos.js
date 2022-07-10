import React from 'react'
import styled from 'styled-components'
import evento from "../../../../Images/evento.png"

const Container = styled.section`
    width: 100%;
    height: 100vh;
    margin-top: 20vh;
    @media only screen and (max-width: 500px){
    margin-top: 58vh;
  }
`

const SubTitle = styled.h2`
    margin-left: 11%;
    font-size: 3.2vw;
    color: #0F2260;
    @media only screen and (max-width: 500px){   
    font-size: 5vw;
    margin-left: 0;
    text-align: center;
    
  }
`

const Box1 = styled.div`
    display: flex;
    @media only screen and (max-width: 500px){
    display: flex;
    flex-direction: column;
     
  }
`

const Box2 = styled.div`
    background-image: url(${evento});
    margin-left: 3.4%;
    width: 71%;
    background-size: 100% 100%;
    height: 80vh;
    border: 1px solid red;
    @media only screen and (max-width: 500px){   
    width: 100% ;   
    height: 60vh;
    margin-left: 0;
  }
    `

const Box3 = styled.div`
    width: 19%;    
    @media only screen and (max-width: 500px){   
    width: 90% ;   
    margin-left: 5%;
    
  }

`


const Info = styled.h3`
    color: #0F2260;
    opacity: 100%;
    margin-top: 21vh;
    @media only screen and (max-width: 500px){   
    margin-top: 3vh;
  }
`

const Line = styled.p`    
    opacity: 100%;
    margin-top: 5vh;
    @media only screen and (max-width: 500px){   
    margin-top: 3vh;
    }
`

export default function Eventos(){

    return(
        <Container>
        <SubTitle>Eventos</SubTitle>
        <Box1>
            <Box2></Box2>
            <Box3>
                <Info>Tech Girls</Info>
                <Line>Com o objetivo de promover network entre mulheres de tecnologia, conectar talentos femininos com oportunidades no mercado da tecnologia, oferecer experiências de troca através de eventos com mulheres que já têm experiência no mercado da tecnologia, acelerar os talentos com ajuda para custeio de luz e internet para facilitar o processo de estudo, promover mentoria para as participantes do grupo.</Line>
            </Box3>
        </Box1>
      </Container>
    )
}