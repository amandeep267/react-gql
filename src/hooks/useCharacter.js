import { gql, useQuery } from "@apollo/client";


const GET_CHARACTER=gql`
query GetCharacter($getCharacterId: ID!) {
  getCharacter(id: $getCharacterId) {
    name
    id
    air_date
    episode
  }
}
  
`

export const useCharacter=(getCharacterId)=>{

    const {data,loading,error}=useQuery(GET_CHARACTER,{variables:{getCharacterId
    },}
);
console.log(data);    
return {data,loading,error};
}