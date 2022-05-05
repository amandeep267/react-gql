import { gql, useQuery } from "@apollo/client";

const GetCharacters = gql`
 query {
  getCharacters {
        id
        name
        image
      }}
  
`

export const useCharacters = () => {
  let { data, loading, error } = useQuery(GetCharacters);
  return {data, loading, error };
};
