import { ChangeEvent, useContext, useEffect, useState } from "react";
import "./App.css";
import { AddRecipePage } from "./Pages/AddRecipePage";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <AddRecipePage variant="first" />
            </Route>
            <Route exact path="/addRecipe">
              <AddRecipePage variant="regular" />
            </Route>
            <Route exact path="/home">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
