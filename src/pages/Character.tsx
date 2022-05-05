import React from "react";
import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharacter";

function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);
  if (loading) return <>loading......</>;
  if(error) return <>error ...</>;
  return (
    <div className="character">
      <div className="character-content">
        <h1>{data.getCharacter.name}</h1>
        <p>{data.getCharacter.episode}</p>
        <h2>{data.getCharacter.air_date}</h2>
      </div>
  
    </div>
  );
}

export default Character;
