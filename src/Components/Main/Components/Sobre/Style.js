import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 90vh;
    display: flex;
    @media only screen and (max-width: 500px){
    flex-direction: column ;
  }
`

export const Box1 = styled.div`
width: 47%;
display: flex;
justify-content: center;
align-items: center;   
@media only screen and (max-width: 500px){
    width: 100%;
    margin-top: 5vh;
  } 
`

export const Img = styled.img`
    width: 55%;
    @media only screen and (max-width: 500px){
    width: 30% ;   
  }
`

export const Box2 = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 500px){
    width: 90%;
    margin-left: 5%;
    margin-top: 5vh;   
  }
`

export const SubTitle = styled.h2`
    color: #0F2260;
    font-size: 3.2vw;
    @media only screen and (max-width: 500px){
    font-size: 5vw;
  }
`

export const Line = styled.p`
    font-size: 1.5vw;
    margin-top: 3vh;
    opacity: 1;
    @media only screen and (max-width: 500px){
    font-size: 3vw ;
  }
`