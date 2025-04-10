import React, { useState } from "react";
import { Button, TextField, Typography, Card, Container, Box } from "@mui/material";
import { useSpring } from "react-spring";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../types/firebaseConfig";
import PilotAvatar from "./PilotAvatar";


export default function BudgetPlanner() {
  const [income, setIncome] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);
  const [saved, setSaved] = useState(false);

  const checkProps = useSpring({
    opacity: saved ? 1 : 0,
    from: { opacity: 0 },
  });

  const handleSaveBudget = async () => {
    try {
      await addDoc(collection(db, "users"), {
        budgetSet: true,
        income,
        expenses,
        timestamp: new Date(),
      });
      setSaved(true);
    } catch (e) {
      console.error("Error saving budget: ", e);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",

          minHeight: "calc(100vh - 128px)",
          justifyContent: "center",
          px: { xs: 2, sm: 0 },
        }}
      >

        <PilotAvatar message={saved ? "Budget set! Ready for takeoff!" : "Let's plan your financial flight path!"} />

        <Typography variant="h5" gutterBottom>
          Set Your Flight Plan
        </Typography>
        <Card sx={{ p: 2, mb: 2, width: { xs: "100%", sm: "80%", md: "60%" } }}>
          <TextField
            label="Monthly Income"
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Monthly Expenses"
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(Number(e.target.value))}
            fullWidth
          />
          <Button
            variant="contained"
            onClick={handleSaveBudget}
            sx={{ mt: 2 }}
            disabled={saved}
          >
            Generate Budget
          </Button>
          {saved && (
            <div style={{ opacity: checkProps.opacity.get() }}>
              <Typography color="green">✓ Budget Set! +20 Pilot Points</Typography>
            </div>
          )}
        </Card>
      </Box>
    </Container>
  );

} 
