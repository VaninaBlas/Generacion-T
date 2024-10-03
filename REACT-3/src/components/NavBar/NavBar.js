import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../assets/styles/styles.css";

function Navbar() {
  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mi Tienda
        </Typography>
        <Box>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">Contacto</Button>
          <Button color="inherit" startIcon={<ShoppingCartIcon />}>
            Carrito
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
