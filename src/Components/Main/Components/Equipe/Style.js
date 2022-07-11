import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;  
  margin-top: 20vh;
  @media only screen and (max-width: 500px){    
    margin-top: 60vh;    
  }
`

export const Box1 = styled.div`
   margin-left: 11%;   
   margin-top: 5vh;
   width: 78%;
   height: 10vh;
   background-color: #0F2260;
   display: flex;
   align-items: center;
   @media only screen and (max-width: 500px){
    width: 90% ;
    margin-left: 5%;
    justify-content: center;
  }   
`

export const Box2 = styled.div`  
  width: 78%;
  display: flex;
  margin-left: 11%;
  flex-wrap: wrap;
  justify-content: space-around;  
  @media only screen and (max-width: 500px){
    width: 90% ;
    margin-left: 5%;
  }
`

export const SubTitle = styled.h2`
   font-size: 3.2vw;
   color: #0F2260;
   margin-left: 11%;
   @media only screen and (max-width: 500px){
    font-size: 5vw ;
    text-align: center;
    margin-left: 0;
  }
`

export const Input = styled.input`
   margin-left: 15%;
   height: 6vh;
   background-color: transparent;
   border: 1px solid #FFFFFF;
   border-radius: 4px;   
   color: white;
   font-size: 1vw;
   @media only screen and (max-width: 500px){
    width: 45% ;     
    align-items: center ;
    margin-left: 0;    
    font-size: 3.5vw;
  }
`

export const Box3 = styled.div`
    width: 24%;
    display: flex;
    flex-direction: column;           
    background-size: cover;    
    text-align: center ;    
    margin-top: 2vh;
    &:hover {       
        cursor: pointer;
        transform: scale(1.02);
    }
    @media only screen and (max-width: 500px){
    width: 45% ;    
  }
`

export const Line = styled.p`
  position: absolute; 
  color: black;  
`

export const Line2 = styled.p`
  position: absolute;  
  color: black;  
`