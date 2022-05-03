import { Typography } from "@mui/material";
import React from "react";
import GridColumn from "./components/GridColumn";
import GridContainer from "./components/GridContainer";
import GridRow from "./components/GridRow";
import Header from "./components/Header";
import SectionContainer from "./components/SectionContainer";
import ProgrammingQuote from "./components/sections/ProgrammingQuote";
import RandomPokemon from "./components/sections/RandomPokemon";

function App() {
  return (
    <React.Fragment>
      <Header />
      <GridContainer>
        <GridColumn>
          <GridRow size={6}>
            <SectionContainer>Google Calendar</SectionContainer>
          </GridRow>
          <GridRow size={6}>
            <SectionContainer>Gmail</SectionContainer>
          </GridRow>
        </GridColumn>
        <GridColumn>
          <GridRow size={3}>
            <SectionContainer>IDK</SectionContainer>
          </GridRow>
          <GridRow size={5}>
            <SectionContainer>Spotify</SectionContainer>
          </GridRow>
          <GridRow size={2}>
            <SectionContainer
              styles={{ display: "flex", alignItems: "center" }}
            >
              <ProgrammingQuote />
            </SectionContainer>
          </GridRow>
          <GridRow size={2}>
            <SectionContainer>Date / Time / Weather</SectionContainer>
          </GridRow>
        </GridColumn>
        <GridColumn>
          <GridRow size={4}>
            <SectionContainer>GitHub</SectionContainer>
          </GridRow>
          <GridRow size={8}>
            <SectionContainer>
              <RandomPokemon />
            </SectionContainer>
          </GridRow>
        </GridColumn>
      </GridContainer>
    </React.Fragment>
  );
}

export default App;
