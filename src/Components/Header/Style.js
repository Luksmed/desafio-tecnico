import styled from 'styled-components'
import fundo from "../../Images/wall1.png"

export const Container = styled.section`
  width: 100%;
  height: 115.8vh;
  background-size: 100% 100%;
  background-image: url(${fundo});
  @media only screen and (max-width: 500px){
    height: 73vh ;   
  }
`

export const Box1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 15vh;
`

export const Img = styled.img`
  margin-left: 3.4%;   
`

export const Nav = styled.nav`
  margin-left: 25%; 
  @media only screen and (max-width: 500px){
      margin-left: 5%;
  }
`

export const List = styled.ul`
  display: flex;  
`

export const Path = styled.a`
  padding-right: 8%;
  text-decoration: none;
`

export const ListItem = styled.li`
  list-style: none;
  color: #FFFFFF;
  padding-right: 8%;
  font-size: 1.8vw;
  @media only screen and (max-width: 500px){
    font-size: 3vw; 
  }  
`

export const Box2 = styled.div`
  width: 77.6%;
  height: 27.5vh;
  margin-left: 11.3%;
  margin-top: 10vh; 
  @media only screen and (max-width: 500px){
    margin-top: 5vh; 
    width: 90%;
    margin-left: 5%;
    height: 15vh;
  }
`

export const Title = styled.h1`  
  color: #FFAC2D;  
  font-size: 3.8vw; 
  @media only screen and (max-width: 500px){
    font-size: 4.2vw; 
  }
`

export const Box3 = styled.div`
  width: 45.8%;
  height: 32vh;
  margin-left: 11.3%;
  background-color: #FFFFFF; 
  border-radius: 1.4vw;
  margin-top: 2vh;
  @media only screen and (max-width: 500px){
    height: 23vh;
    width: 65% ;
    margin-left: 5%;
    margin-top: 1vh;
  }
`

export const Box4 = styled.div`
 display: flex;
 margin-left: 2.8%;
`

export const Circle = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: #00145D;
  margin-top: 3vh;
  margin-right: 0.5vw;
  @media only screen and (max-width: 500px){
    width: 10px;
    height: 10px ;
  }
`

export const Arrow = styled.div`
width: 88.5%;
opacity: 1;
border: 2px solid #00145D;
margin-left: 2.8%;
border-radius: 10%;
margin-top: 2vh;
@media only screen and (max-width: 500px){
   width: 80%; 
   border: 1px solid #00145D;
  }
`

export const SubTitle = styled.h2`
  margin-left: 2.8%;
  margin-top: 2vh;
  color: #00145D;
  font-size: 3.3vw;
  @media only screen and (max-width: 500px){
    font-size: 4.2vw; 
  }
`

export const Line = styled.p`
margin-left: 2.8%;
font-size: 2.1vw;
margin-top: 2vh;
@media only screen and (max-width: 500px){
    font-size: 3vw ;
  }
`

export const Line2 = styled.p`
  font-size: 1.8vw;
  margin-left: 11.3%;
  margin-top: 1vh;
  color: #FED5B2;
  @media only screen and (max-width: 500px){
    margin-left: 5%;
    font-size: 3vw;
    margin-top: 3vh;
  }  
`