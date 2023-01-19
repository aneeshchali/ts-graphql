import React from "react";
import Layouts from "./Components/Layouts";
import { ApolloClient, InMemoryCache, ApolloProvider  } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layouts />
    </ApolloProvider>
  );
}

export default App;
