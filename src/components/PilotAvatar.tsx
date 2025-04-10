// src/components/PilotAvatar.tsx
import * as React from "react";
import { Typography, Paper, Box } from "@mui/material";
import { useSpring } from "react-spring";
import avatarImage from "/images/pennypilot.png";

interface PilotAvatarProps {
  message: string;
}

export default function PilotAvatar({ message }: PilotAvatarProps) {
  const avatarProps = useSpring({
    from: { rotate: 0 },
    to: { rotate: 10 },
    loop: { reverse: true },
    config: { duration: 1000 },
  });

  const bubbleProps = useSpring({
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 },
    config: { duration: 500 },
  });

  return (
    <Box sx={{ position: "relative", mb: 4, display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
      <Box
        component="img"
        src={avatarImage}
        sx={{
          width: { xs: "280px", sm: "320px", md: "400px" },
          height: "auto",
          transform: `rotate(${avatarProps.rotate.get()}deg)`,
          objectFit: "contain",
          maxWidth: "100%"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "60%",
          opacity: bubbleProps.opacity.get(),
          transform: `translateX(-50%) scale(${bubbleProps.scale.get()})`
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 2,
            borderRadius: "20px",
            backgroundColor: "#f5f5f5",
            maxWidth: { xs: "220px", sm: "300px", md: "400px" },
          }}
        >
          <Typography variant="body1" sx={{ wordWrap: "break-word", fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}>
            {message}
          </Typography>
        </Paper>
      </div>
    </Box>
  );
}