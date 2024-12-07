import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(135deg, #9B5FC0, #6A0DAD)', // Fundo roxo com gradiente
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', // Sombra suave
          color: '#FFFFFF',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* Aqui você pode adicionar um ícone se necessário */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gerenciamento de Projetos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
