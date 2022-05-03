import { Typography } from "@mui/material";
import React from "react";
import GridColumn from "./components/GridColumn";
import GridContainer from "./components/GridContainer";
import GridRow from "./components/GridRow";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <GridContainer>
        <GridColumn>
          <GridRow size={6}>
            <div style={{ border: "1px solid #000", height: "100%" }} />
          </GridRow>
          <GridRow size={6}>
            <div style={{ border: "1px solid #000", height: "100%" }} />
          </GridRow>
        </GridColumn>
        <GridColumn>
          <GridRow size={3}>
            <div style={{ border: "1px solid #000", height: "100%" }} />
          </GridRow>
          <GridRow size={5}>
            <div style={{ border: "1px solid #000", height: "100%" }} />
          </GridRow>
          <GridRow size={2}>
            <div style={{ border: "1px solid #000", height: "100%" }} />
          </GridRow>
          <GridRow size={2}>
            <div style={{ border: "1px solid #000", height: "100%" }} />
          </GridRow>
        </GridColumn>
        <GridColumn>
          <GridRow size={6}>
            <div style={{ border: "1px solid #000", height: "100%" }} />
          </GridRow>
          <GridRow size={6}>
            <div style={{ border: "1px solid #000", height: "100%" }} />
          </GridRow>
        </GridColumn>
      </GridContainer>
    </React.Fragment>
  );
}

export default App;
