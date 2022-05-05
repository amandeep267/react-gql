import { gql, useQuery } from "@apollo/client";
import "../styling/characterList.css";
import React from "react";
import { useCharacters} from "../hooks/useCharacters";
import { Link } from "react-router-dom";


function CharactersList() {
  const { data, loading, error } = useCharacters();

  if (loading) return <div>Spinner ....</div>;
  if (error) return <div>error ....</div>;
  return (
    <div className="characterList">
      {data.getCharacters.map((character: any) => {
        return (
          < Link to={`/${character.id}`}>
            <img src={character.image}></img>
            <h2>{character.name}</h2>
          </Link>
        )
      })}
    
    </div>
  );
}

export default CharactersList;
