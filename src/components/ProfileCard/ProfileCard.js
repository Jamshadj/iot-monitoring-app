import React from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";
import styles from "./ProfileCard.module.css";
import UserIcon from "../../svgs/userIcon";

const ProfileCard = () => {
  return (
    <Container className={styles.profileCard} maxWidth="sm">
      <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
        <UserIcon width="96" height="96" />
      </Box>
      <Typography sx={{ marginTop: "20px", width: "320px",paddingRight: "4px" }}>
        Username
      </Typography>
      <TextField
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
      <Typography
        sx={{ marginTop: "20px", width: "320px", paddingRight: "40px" }}
      >
        Email
      </Typography>
      <TextField
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
          color="error"
          className={styles.logoutButton}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default ProfileCard;
