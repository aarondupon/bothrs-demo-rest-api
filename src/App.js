import React, { useContext } from "react";
import List from "./components/List";
import Card from "./components/Card";
import Hero from "./components/Hero";
import { ThemeProvider } from "styled-components";
import Airtable from './api';
import "./App.css";

const theme = {
  /* Blue */
  color: "#0C2358",
  secondColor: "#5BC9BF",
  headerTextColor: "#ffffff",
  headerButtonColor: "#9013FE"
};

const createList = () => (
  <List>
    {[1, 2, 3].map(x => (
      <Card key={x} />
    ))}
  </List>
);

const App = () => {

  console.log('Airtable',Airtable.get())
  return (
    <ThemeProvider theme={theme}>
      <div style={{width:860+40, padding:'20px 20px'}} className="App">
        <Hero />
        {createList()}
        {createList()}
      </div>
    </ThemeProvider>
  );
};

export default App;
