import React from "react";
import { searchPokemon } from "./pokeApi";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const colors = ["B1C12E","4F3A2D","755EDF","FCBC17","F4B1F4","823551D","E73B0C","A3B3F7","6060B2", "74C236","D3B357","A3E7FD","C8C4BC","934594","ED4882","B9A156","B5B5C3","3295F6"]; 

const Sprite = styled.img`
    width: 14rem;
    height: 14rem;
    display: none;
    @media (min-width: 576px) and (max-width: 768px) {
        width: 7rem;
        height: 7rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 7rem;
        height: 7rem;
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        width: 12rem;
        height: 12rem;
    }
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none
    
`

const StyledLink = styled(Link)`
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: #ef5350;
    }
`

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState("");

  // const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;


  const onChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  }

  const onClick = async () => {
    const data  = await searchPokemon(search);
    setPokemon(data);
  }

  return(
    <div>
      <div className="d-flex mb-3">
        <div className="col-11 mx-2">
          <input className="inputMedia form-control me-2" placeholder="Search Pokemon" onChange={onChange}/>
        </div>
        <div className="col-3">
          <button className="btn btnMedia" onClick={onClick} style={{backgroundColor: "#c62828", color: "#fff"}}>Search</button>
        </div>
      </div>

      <div>
        {pokemon &&
        <div className="mb-5">
          <StyledLink to={`pokemon/${pokemon.id}`}>
              <Card className="card" style={{backgroundColor: `#${colors[Math.floor(Math.random() * colors.length)]}`}}>
                  <div className="d-flex flex-row">
                      <div>
                        <h3 className="badge bg-light text-dark opacity-75 fs-5  text-muted mb-0 mt-4 ms-5">#{pokemon.id}</h3>
                        <h3 className="fw-bolder ps-5 pt-2 text-light pokeName">{pokemon.name.toLowerCase().split(" ").map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(" ")}</h3>
                      </div>
                    
                      <Sprite className="ms-auto m-3 p-3" src={pokemon.sprites.other.dream_world.front_default} style={{display: "block"}} />
                  </div>
              </Card>
          </StyledLink>
        </div>
        }
      </div>
    </div>
  )
}

export default SearchBar;