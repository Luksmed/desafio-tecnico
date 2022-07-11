import styled from "styled-components"
import planet from "../../Images/planet.png"

export const Container = styled.section`
    width: 100%;
    height: 40vh;
    background-image: url(${planet});
    background-size: 100% 100%;
    @media only screen and (max-width: 500px){
    margin-top: 10vh;
    height: 25vh;
  }
`

export const SubTitle = styled.h2`
    font-size: 3.2vw;
    margin-left: 11%;
    padding-top: 7vh;
    color: #FFFFFF;
    opacity: 100%;
    @media only screen and (max-width: 500px){
    padding-top: 0.5vh ;   
    margin-left: 5%;
    font-size: 4vw;
  }
`

export const Box1 = styled.div`
    display: flex;
    margin-left: 11%;
    width: 50%;
    justify-content: space-evenly;
    margin-top: 6vh;
    @media only screen and (max-width: 500px){
    margin-left: 5%;
    width: 90%;
    flex-direction: column;
    margin-top: 1.5vh;    
  }
`

export const Line = styled.p`
    color: #FFFFFF;
    opacity: 100%;
    margin-right: 2vw;
    font-size: 1.4vw;
    @media only screen and (max-width: 500px){
    font-size: 3vw;
  }
`

export const Nav = styled.nav`
    margin-top: 1vh;
    @media only screen and (max-width: 500px){
    margin-top: 3.5vh;
  }   
`

export const List = styled.ul`
    display: flex;
    @media only screen and (max-width: 500px){
    justify-content: center;
  }
`

export const ListItem = styled.li`
    list-style: none;
    padding-right: 1.2vw;
    @media only screen and (max-width: 500px){
    padding-right: 7vw;
  }
`

export const Img = styled.img`
    width: 4.2vw;
    height: 9vh;
    @media only screen and (max-width: 500px){
    width: 5vw;
    height: 5vh;
  }
`