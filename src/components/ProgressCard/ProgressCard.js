import React from "react";
import { Card, CardContent, Box, Typography, LinearProgress } from "@mui/material";

const ProgressCard = ({ label, value, color }) => (
  <Card
    sx={{
      boxSizing: "border-box",
      width: "440px",
      height: "122.67px",
      border: "0.5px solid #B4B7B7",
      borderRadius: "8px",
      position: "relative",
      flexGrow: 1,
      overflow: "hidden",
      marginBottom:"16px",
      backgroundColor:"#FBF7FA"
    }}
  >
    <CardContent sx={{ padding: 1, height: "100%" }}>
      <Box
        sx={{
          marginBottom: 2,
          position: "relative",
          height: "100%",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            width: "40px",
            height: "15px",
            left: "44px",
            top: "10.33px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "15px",
            textAlign: "center",
            color: "#1E1E1E",
          }}
        >
          {label}
        </Typography>
        <Box
          sx={{
            position: "absolute",
            width: "16px",
            height: "15px",
            left: "20px",
            top: "10.33px",
            backgroundColor: color,
          }}
        />
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            position: "absolute",
            width: "calc(100% - 40px)",
            height: "31px",
            left: "20px",
            top: "50px",
            borderRadius: "5px",
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: color,
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: "10px",
            top: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            gap: "8px",
          }}
        >
          <Box
            sx={{
              width: "54px",
              height: "400px",
              background:
                "linear-gradient(180deg, #D9D9D9 50%, #6975FF 50%)",
              border: "1px solid #FFFFFF",
              transform: "matrix(0, -1, -1, 0, 0, 0)",
            }}
          />
          <Typography
            sx={{
              width: "25px",
              height: "15px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "15px",
              textAlign: "center",
              color: "#333333",
            }}
          >
            {value}%
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default ProgressCard;
