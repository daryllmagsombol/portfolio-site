import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='snapPageScroll'>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position='sticky'
            style={{
              backgroundColor: 'rgba(0,0,0,.0)',
              boxShadow: 'none',
              padding: '18px',
            }}
          >
            <Toolbar>
              <Typography
                variant='h6'
                component='div'
                className='logoName'
                sx={{ flexGrow: 1 }}
              >
                Daryll Magsombol
              </Typography>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
        <div className='nameDiv'>
          <h1 className='nameHeader'>
            DARYLL
            <br />
            MAGSOMBOL
          </h1>
          <small className='namePosition'>Software Engineer</small>
        </div>
      </div>
      <div className='snapPageScroll'>TEST</div>
    </div>
  );
}

export default App;
