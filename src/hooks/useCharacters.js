import { gql, useQuery } from "@apollo/client";
//onsole.log(fetchedData);
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
  //  data= require('../pages/data');
  console.log(data);
// let d= JSON.stringify(data);
 
  return {data, loading, error };
};
