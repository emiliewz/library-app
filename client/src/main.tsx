import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { getSplitLink } from './utils/index.ts';

const client = new ApolloClient({
  link: getSplitLink(),
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
