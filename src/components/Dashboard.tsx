import React from "react";
import { useState, useEffect } from "react";
import { Card, LinearProgress, Typography, Container, Box } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../types/firebaseConfig";
import PilotAvatar from "./PilotAvatar";
import { useAuth } from "../context/auth";

interface UserData {
  budgetSet: boolean;
  taxSavings: number;
}

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState<UserData>({ budgetSet: false, taxSavings: 0 });

  useEffect(() => {
    if (!currentUser) return;

    const fetchData = async () => {
      const q = query(collection(db, "users"), where("uid", "==", currentUser.uid));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs[0]?.data() as UserData;
      if (data) setUserData(data);
    };

    fetchData();
  }, [currentUser]);

  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          overflowX: "hidden",
          "&::before": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/images/PennyPilot-cloud-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
            zIndex: -1,
          },
        }}
      >
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
          <PilotAvatar
            message={
              currentUser
                ? `Ready for takeoff, ${currentUser.email?.split("@")[0]}?`
                : "Log in to fly!"
            }
          />
          <Typography variant="h5" gutterBottom>
            Welcome, Captain! Your Flight Path:
          </Typography>
          {currentUser ? (
            <>
              <Card
                sx={{
                  p: 2,
                  mb: 2,
                  width: { xs: "100%", sm: "90%", md: "70%", lg: "60%" },
                  backgroundColor: "rgba(255,255,255,0.95)",
                  boxShadow: 6,
                  borderRadius: 4,
                }}
              >
                <Typography>Budget Set</Typography>
                <LinearProgress variant="determinate" value={userData.budgetSet ? 100 : 0} />
              </Card>
              <Card
                sx={{
                  p: 2,
                  width: { xs: "100%", sm: "90%", md: "70%", lg: "60%" },
                  backgroundColor: "rgba(255,255,255,0.95)",
                  boxShadow: 6,
                  borderRadius: 4,
                }}
              >
                <Typography>Tax Savings</Typography>
                <LinearProgress
                  variant="determinate"
                  value={Math.min((userData.taxSavings / 1000) * 100, 100)}
                />
              </Card>
            </>
          ) : (
            <Typography>Please log in to see your flight path.</Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}
