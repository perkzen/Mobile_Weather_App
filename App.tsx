
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from "@apollo/client";
import HomePage from "./Components/HomePage";
import React from "react";

export const App: React.FC = () => {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: 'https://graphql-weather-api.herokuapp.com/'
    })

    return (
        <ApolloProvider client={client}>
            <HomePage/>
        </ApolloProvider>
    );
}



export default App;