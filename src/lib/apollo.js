import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8w2lp1b5m01xm5b7nd2rq/master',
    cache: new InMemoryCache()
})