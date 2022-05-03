import React from "react";
import { Grid } from "@mui/material";

type GridRowProps = {
  children: React.ReactNode;
  size: number;
};

const GridRow = ({ children, size }: GridRowProps) => {
  return (
    <Grid
      item
      xs={size}
      style={{
        padding: "1rem",
      }}
    >
      {children}
    </Grid>
  );
};

export default GridRow;
