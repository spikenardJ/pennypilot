// src/components/HomeDashboard.tsx
import React, { useState, useEffect } from "react";
import { Card, LinearProgress, Typography, Container, Box } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { app } from "../types/firebaseConfig";
import pilotAvatar from "../assets/images/pennypilot.png"; // Using a more standard image format that likely exists

interface UserData {
  budgetSet: boolean;
  taxSavings: number;
}

export default function HomeDashboard() {
  const [userData, setUserData] = useState<UserData>({ budgetSet: false, taxSavings: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const data = querySnapshot.docs[0]?.data() as UserData;
      if (data) setUserData(data);
    };
    fetchData();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          minHeight: "calc(100vh - 64px)",
          justifyContent: "center",
          px: { xs: 2, sm: 0 },
        }}
      >
        <img src={pilotAvatar} alt="Pilot Avatar" style={{ maxWidth: '200px', marginBottom: '20px' }} />
        <Typography variant="h5" gutterBottom>
          Welcome, Captain! Your Flight Path:
        </Typography>
        <Card sx={{ p: 2, mb: 2, width: { xs: "100%", sm: "80%", md: "60%" } }}>
          <Typography>Budget Set</Typography>
          <LinearProgress variant="determinate" value={userData.budgetSet ? 100 : 0} />
        </Card>
        <Card sx={{ p: 2, width: { xs: "100%", sm: "80%", md: "60%" } }}>
          <Typography>Tax Savings</Typography>
          <LinearProgress variant="determinate" value={(userData.taxSavings / 1000) * 100} />
        </Card>
      </Box>
    </Container>
  );
}