import { ApolloCache, ApolloClient, ApolloLink, NormalizedCacheObject, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { setContext } from 'apollo-link-context';
import { request } from 'https';
import React, { useEffect, useState } from 'react'

function ApolloWrapper({ children }: any) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [brearerToken, setBearerToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const token = isAuthenticated ? await getAccessTokenSilently() : "";
      setBearerToken(token);
    };
    getToken();

  }, [getAccessTokenSilently, isAuthenticated]);


  const authLink = setContext((request, { headers, ...rest }) => {
    if (!brearerToken) return { headers, ...rest }
    return {

      ...rest,
      headers: {
        ...headers,
        authorization: `Bearer: ${brearerToken}`
      }
    };
  });

  console.log("brearerToken: " + brearerToken);
  console.log("ApolloLink: ", authLink);
  // const httpLink = new HttpLink({
  //   uri: "https://rickandmortyapi.com/graphql",

  // });
  const httpLink1 = new HttpLink({
    uri: "http://localhost:4000/",
  });
  const client = new ApolloClient(
    {
      uri: "http://localhost:4000/",
      cache: new InMemoryCache(),
      link: authLink.concat(httpLink1 as any) as any,
    }
  );
  // const client2 = new ApolloClient(
  //   {
  //     uri: "http://localhost:4000/",
  //     cache: new InMemoryCache(),
  //     link: authLink.concat(httpLink1 as any) as any,
  //   }
  // );
  return (

    <ApolloProvider client={client}>{children}</ApolloProvider>
  );
}

export default ApolloWrapper