import React, { useContext } from "react";
import List from "./components/List";
import Card from "./components/Card";
import Hero from "./components/Hero";
import { ThemeProvider } from "styled-components";
import "./App.css";
import useAirtable from "./api/hooks/useAirtable";
import styled from 'styled-components';

const theme = {
  /* Blue */
  color: "#0C2358",
  secondColor: "#5BC9BF",
  headerTextColor: "#ffffff",
  headerButtonColor: "#9013FE"
};

const createList = (title,data) => (
  <List key={title} title={title}>
    {data.map((data,idx) => (
      <Card 
        key={idx} 
        source={data.Afbeelding[0].url}  
        title={data.Naam}
        text={data.Beschrijving}
        />
    ))}
  </List>
);

const AppContainer = styled.div`
  width: cacl(100% - 40px);
  padding:20px 20px;
  max-width:1160px;
  position:absolute;
  left:50%;
  transform:translate(-50%,0);
`
const App = () => {
  const [listData] = useAirtable();
  // console.log('listData',listData)
  return (
    <ThemeProvider theme={theme}>
      <AppContainer style={{}} >
        <Hero />
        {Object.keys(listData).map(key=>createList(key,listData[key]))}
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
