import React, { useState } from "react";
import * as S from "./Style"
import photo1 from "../../../../Images/photo1.jpg"
import photo2 from "../../../../Images/photo2.jpg"
import photo3 from "../../../../Images/photo3.jpg"
import photo4 from "../../../../Images/photo4.jpg"
import photo5 from "../../../../Images/photo5.jpg"
import photo6 from "../../../../Images/photo6.jpg"
import photo7 from "../../../../Images/photo7.jpg"
import photo8 from "../../../../Images/photo8.jpg"
import photo9 from "../../../../Images/photo9.jpg"
import photo10 from "../../../../Images/photo10.jpg"
import photo11 from "../../../../Images/photo11.jpg"
import photo12 from "../../../../Images/photo12.jpg"
import photo13 from "../../../../Images/photo13.jpg"
import photo14 from "../../../../Images/photo14.jpg"
import photo15 from "../../../../Images/photo15.jpg"

export default function Equipe(){

  const equipe = [
    {nome: "Aline Froés", cargo: "CEO", figura: <img src={photo1} alt="foto de perfil"/>, id: 1},
    {nome: "Dimitri Duque", cargo: "Voluntários", figura: <img src={photo2} alt="foto de perfil"/>, id: 2},
    {nome: "Luzia Merlim", cargo: "Agente Socioemocional", figura: <img src={photo3} alt="foto de perfil"/>, id: 3},
    {nome: "Paula Misan", cargo: "Voluntários", figura: <img src={photo4} alt="foto de perfil"/>, id: 4},
    {nome: "Aline Nogueira", cargo: "Agente Socioemocional", figura: <img src={photo5} alt="foto de perfil"/>, id: 5},
    {nome: "Hugo Sabino", cargo: "Voluntários", figura: <img src={photo6} alt="foto de perfil"/>, id: 6},
    {nome: "Mariana Correia", cargo: "Coordenadora Administrativa", figura: <img src={photo7} alt="foto de perfil"/>, id: 7},
    {nome: "Priscila Tufani", cargo: "Agente de Estratégia", figura: <img src={photo8} alt="foto de perfil"/>, id: 8},
    {nome: "Andrea Marinho", cargo: "Psicóloga", figura: <img src={photo9} alt="foto de perfil"/>, id: 9},
    {nome: "Karla de Melo", cargo: "Voluntários", figura: <img src={photo10} alt="foto de perfil"/>, id: 10},
    {nome: "Marina Tiago", cargo: "Agente de Estratégia", figura: <img src={photo11} alt="foto de perfil"/>, id: 11},
    {nome: "Thais Brait", cargo: "Voluntários", figura: <img src={photo12} alt="foto de perfil"/>, id: 12},
    {nome: "Cris dos Prazeres", cargo: "Coordenadora Executiva", figura: <img src={photo13} alt="foto de perfil"/>, id: 13},  
    {nome: "Karynne Moreira", cargo: "Facilitadora Técnica", figura: <img src={photo14} alt="foto de perfil"/>, id: 14},
    {nome: "Marlon Yuri", cargo: "Instrutor Técnico", figura: <img src={photo15} alt="foto de perfil"/>, id: 15}  
  ]

  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search ? equipe : equipe.filter((item) =>
        item.nome.toLowerCase().includes(search.toLowerCase())
      );

  const Content =() => {
    return(
      <S.Container>
      <S.SubTitle id="equipe">Equipe</S.SubTitle>
      <S.Box1>
        <S.Input placeholder="Pesquisar...                🔍" type="text" value={search} onChange={handleSearchChange}/>
      </S.Box1>
        <S.Box2>      
        {filtered.map((item) => {
        return (
          <S.Box3 key={item.id}>
            <b>{item.nome}</b>                  
            {item.figura}    
            #{item.cargo}                  
          </S.Box3>
        );
        })}
        </S.Box2>
    </S.Container>
    )
  }

  return (
    Content()
  );
};
