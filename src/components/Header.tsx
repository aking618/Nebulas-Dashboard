import { Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Typography
        variant="h1"
        style={{
          fontFamily: "JetBrains Mono",
          fontSize: "2rem",
          fontWeight: "bold",
          padding: "1rem",
        }}
      >
        NEBULA'S DASHBOARD
      </Typography>
      <div
        style={{
          width: "inherit",
          height: "1px",
          backgroundColor: "#000",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
      />
    </>
  );
};

export default Header;
