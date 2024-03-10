import { Alert } from "@mui/material";
import React from "react";

const Description = ({ description }) => {
  return (
    <div>
      <Alert
        variant="filled"
        severity="info"
        sx={{ backgroundColor: "#A495E7", color: "black" }}
      >
        {description}
      </Alert>
    </div>
  );
};

export default Description;
