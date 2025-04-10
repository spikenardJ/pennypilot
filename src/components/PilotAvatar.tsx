// src/components/PilotAvatar.tsx
import React from "react";
import { Typography, Paper, Box } from "@mui/material";
import { useSpring } from "react-spring";

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
    <Box sx={{ position: "relative", mb: 2 }}>
      <div
        style={{
          width: "100px",
          transform: `rotate(${avatarProps.rotate.get()}deg)`,
          backgroundImage: "url('https://via.placeholder.com/100?text=Pilot')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100px"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-50px",
          left: "120px",
          opacity: bubbleProps.opacity.get(),
          transform: `translateX(-50%) scale(${bubbleProps.scale.get()})`
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 1,
            borderRadius: "16px",
            backgroundColor: "#f5f5f5",
            maxWidth: { xs: "150px", sm: "200px" },
          }}
        >
          <Typography variant="body2" sx={{ wordWrap: "break-word" }}>
            {message}
          </Typography>
        </Paper>
      </div>
    </Box>
  );
}