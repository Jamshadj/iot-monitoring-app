import React from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPageCard.module.css";
import UserIcon from "../../svgs/userIcon";

const LoginPageCard = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <Container className={styles.profileCard} maxWidth="sm">
      <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
        <UserIcon width="96" height="96" />
      </Box>
      <Typography sx={{ marginTop: "20px", width: "320px", paddingRight: "40px" }}>
        Email
      </Typography>
      <TextField
        type="text" // Fixed the typo here
        variant="outlined"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        sx={{
          width: "320px",
          height: "32px",
          borderRadius: "8px",
        }}
      />
      <Typography sx={{ marginTop: "25px", width: "320px", paddingRight: "10px" }}>
        Password
      </Typography>
      <TextField
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        sx={{
          width: "320px",
          borderRadius: "8px",
        }}
      />
      <Box display="flex" justifyContent="center" mt={4}>
        <Button
          variant="outlined"
          color="success"
          className={styles.logoutButton}
          onClick={handleLogin} // Added onClick event handler
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPageCard;
