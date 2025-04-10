import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSpring } from "react-spring";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Animation for the logo
  const logoProps = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    config: { duration: 1000 },
    reset: true,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Budget", path: "/budget" },
    { label: "Tax Prep", path: "/tax-prep" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            to={item.path}
            sx={{ color: "inherit", textDecoration: "none" }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: 0, left: 0, right: 0, zIndex: 1100 }}>
        <Toolbar>
          {/* Logo */}
          <div
            style={{ 
              width: "40px", 
              height: "40px", 
              marginRight: "16px",
              backgroundImage: "url('https://via.placeholder.com/40?text=P')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `rotate(${logoProps.rotate.get()}deg)`
            }}
          />
          {/* Title */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            PennyPilot
          </Typography>
          {/* Desktop Nav Buttons */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{ mx: 1 }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { sm: "none" }, "& .MuiDrawer-paper": { width: 250 } }}
      >
        {drawer}
      </Drawer>
      {/* Spacer to push content below fixed AppBar */}
      <Box sx={{ height: "64px" }} />
    </>
  );
}