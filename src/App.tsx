import React, { useEffect, useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./theme";
import {
  persistCache,
  LocalStorageWrapper,
  CachePersistor,
} from "apollo3-cache-persist";

import { Home, Launches, Missions, Launch } from "./Views/index";
import { CircularProgress, ThemeProvider } from "@material-ui/core";
async function createClient() {
  const cache = new InMemoryCache({});
  let persistor = new CachePersistor({
    storage: new LocalStorageWrapper(window.localStorage),
    cache,
  });
  await persistor.restore();
  return new ApolloClient({
    uri: "https://spacexdata.herokuapp.com/graphql",
    cache,
  });
}

const App: React.FC = () => {
  const [client, setClient] = useState<any>();
  useEffect(() => {
    createClient().then((clientX) => setClient(clientX));
  }, []);
  const rendered = client ? (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Switch>
            <Route exact path="/missions" component={Launches} />
          </Switch>
          <Switch>
            <Route exact path="/launches" component={Launches} />
          </Switch>
          <Switch>
            <Route exact path="/launches/:flight_number" component={Launch} />
          </Switch>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  ) : (
    <CircularProgress style={{ margin: "auto" }} />
  );
  return rendered;
};

export default App;
