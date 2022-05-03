import { Grid } from "@mui/material";
import React from "react";

type GridContainerProps = {
  children: React.ReactNode;
};

const GridContainer = ({ children }: GridContainerProps) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
    >
      {children}
    </Grid>
  );
};

export default GridContainer;
