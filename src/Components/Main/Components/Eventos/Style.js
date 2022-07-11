import styled from "styled-components"
import evento from "../../../../Images/evento.png"

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    margin-top: 12vh;
    @media only screen and (max-width: 500px){
    margin-top: 8vh;
  }
`

export const SubTitle = styled.h2`
    margin-left: 11%;
    font-size: 3.2vw;
    color: #0F2260;
    @media only screen and (max-width: 500px){   
    font-size: 5vw;
    margin-left: 0;
    text-align: center;    
  }
`

export const Box1 = styled.div`
    display: flex;
    @media only screen and (max-width: 500px){
    display: flex;
    flex-direction: column;     
  }
`

export const Box2 = styled.div`
    background-image: url(${evento});
    margin-left: 3.4%;
    width: 71%;
    background-size: 100% 100%;
    height: 80vh;
    @media only screen and (max-width: 500px){   
    width: 100% ;   
    height: 60vh;
    margin-left: 0;
  }
    `

export const Box3 = styled.div`
    width: 19%;    
    @media only screen and (max-width: 500px){   
    width: 90% ;   
    margin-left: 5%;    
  }
`

export const Info = styled.h3`
    color: #0F2260;
    opacity: 100%;
    margin-top: 18vh;
    @media only screen and (max-width: 500px){   
    margin-top: 3vh;
  }
`

export const Line = styled.p`    
    opacity: 100%;
    margin-top: 3vh;
    @media only screen and (max-width: 500px){   
    margin-top: 3vh;
    }
`