import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    height: 73vh;
    display: flex;
    margin-top: 10vh;
    @media only screen and (max-width: 500px){
    margin-top: 19vh;   
    flex-direction: column;
  }
`

export const Box1 = styled.div` 
 width: 51%; 
 @media only screen and (max-width: 500px){
    display: flex;
    flex-direction: column;
    width: 100% ;       
  }
`

export const Line = styled.p`
    margin-bottom: 5vh;
`

export const SubTitle = styled.h2`
    color: #0F2260;
    font-size: 3.2vw;
    margin-left: 21.3%;
    margin-bottom: 3vh;
    @media only screen and (max-width: 500px){
    margin-left: 0;
    text-align: center;
    font-size: 5vw;
    margin-bottom: 6vh;
  }
    
`

export const Box1a = styled.div`
   display: flex;
   flex-direction: column;
   width: 37%;   
   margin-top: 3vh;
`

export const Img = styled.img`
    width: 37%;
    height: 15vh;
    margin-left: 58%;
    margin-bottom: 13vh;
    @media only screen and (max-width: 500px){
    margin-left: 40% ;  
    width: 50%;
    margin-bottom: 16vh;
  }
`

export const Info = styled.h3`
    color: #0F2260;
    margin-bottom: 2vh;      
`

export const Box1b = styled.div`
    width: 40.2%;
    @media only screen and (max-width: 500px){
    width: 80% ;       
    margin-top: 3vh;
  }
`

export const SubBox = styled.div`
    display: flex;    
`

export const Box2 = styled.div`
    width: 49%;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 500px){
    width: 90% ;   
    margin-left: 5%;
    justify-content: center;
  }
    
`

export const Img2 = styled.img`
    width: 100%;
    @media only screen and (max-width: 500px){
    width: 80% ;   
  }
`