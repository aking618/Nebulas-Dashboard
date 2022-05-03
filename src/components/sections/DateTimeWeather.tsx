import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const DateTimeWeather = () => {
  let [ctime, setCTime] = useState<string>("");

  const updateTime = () => {
    var time = new Date().toLocaleTimeString();
    setCTime(time);
  };
  setInterval(updateTime, 1000);

  return (
    <Grid container direction="row" spacing={2} style={{ margin: "0 auto" }}>
      <Grid item xs={4}>
        <Typography
          variant="h6"
          style={{ fontFamily: "JetBrains Mono" }}
          align="center"
        >
          {new Date().toLocaleDateString()}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="h6"
          style={{ fontFamily: "JetBrains Mono" }}
          align="center"
        >
          {ctime}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="h6"
          style={{ fontFamily: "JetBrains Mono" }}
          align="center"
        >
          {234}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DateTimeWeather;
