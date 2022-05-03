import React from "react";
import { Grid } from "@mui/material";

type GridColumnProps = {
  children: React.ReactNode;
};

const GridColumn = ({ children }: GridColumnProps) => {
  return (
    <Grid
      container
      direction="column"
      xs={4}
      style={{
        height: "90vh",
      }}
      alignItems="stretch"
    >
      {children}
    </Grid>
  );
};

export default GridColumn;
