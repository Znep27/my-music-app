
import './App.css';
import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
    const loggedIn = useState(false);
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                My Music App
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch'},
          }}
          noValidate
          autoComplete="off"
          className="login"
        >
          <TextField id="username" label="Username*" variant="standard" /><br />
          <TextField id="password" label="Password*" variant="standard" /><br />
        
        </Box>
        <Stack spacing={2} direction="row" className="login">
          <Button variant="contained" className="login">LOGIN</Button>
        </Stack>
      </div>
    );
}

export default App;

