import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./theme";
import { Home, Launches, Missions, Launch } from "./Views/index";
import { ThemeProvider } from "@material-ui/core";
const client = new ApolloClient({
  uri: "https://spacexdata.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
const App: React.FC = () => {
  return (
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
  );
};

export default App;
