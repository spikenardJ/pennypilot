// src/components/TaxPrep.tsx
import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Card,
  LinearProgress,
  Container,
  Box,
} from "@mui/material";
import { useSpring } from "react-spring";
import { collection, addDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig";
import PilotAvatar from "./PilotAvatar";

export default function TaxPrep() {
  const [income, setIncome] = useState<number>(0);
  const [taxSaved, setTaxSaved] = useState<number>(0);
  const taxRate = 0.25;

  const props = useSpring({
    from: { number: 0 },
    to: { number: taxSaved },
    config: { duration: 1000 },
  });

  const handleAddIncome = async () => {
    const taxAmount = income * taxRate;
    try {
      // await addDoc(collection(db, "users"), {
        // income,
        // taxSavings: taxAmount,
        // timestamp: new Date(),
      // });
      setTaxSaved((prev) => prev + taxAmount);
      setIncome(0);
    } catch (e) {
      console.error("Error adding income: ", e);
    }
  };

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
        <PilotAvatar message={taxSaved > 0 ? "Tax runway clear!" : "Log your gigs, Captain!"} />
        <Typography variant="h5" gutterBottom>
          Freelancer's Tax Logbook
        </Typography>
        <Card sx={{ p: 2, mb: 2, width: { xs: "100%", sm: "80%", md: "60%" } }}>
          <TextField
            label="Gig Income"
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Typography>Estimated Tax (25%): ${(income * taxRate).toFixed(2)}</Typography>
          <Button variant="contained" onClick={handleAddIncome} sx={{ mt: 2 }}>
            Log Income & Save
          </Button>
        </Card>
        <Card sx={{ p: 2, width: { xs: "100%", sm: "80%", md: "60%" } }}>
          <Typography>Tax Savings Progress</Typography>
          <LinearProgress variant="determinate" value={(taxSaved / 1000) * 100} />
          <div>${props.number.get().toFixed(2)} Saved</div>
        </Card>
      </Box>
    </Container>
  );
}