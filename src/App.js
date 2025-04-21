import './App.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';  
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Header from './components/header.js';


function App() {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ my: 4 }}>
          
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome!
          </Typography>

          <Typography variant="body1" gutterBottom>
            Thanks for taking the time to check out my website. I wanted to share a little bit about myself to you, and I hope you choose to check out the rest of this page.
            I've been working in the finanical technology industry since March 2024, and lately I've been wanting to share a little piece of myself and some of my abilities, and more importantly hobbies somewhere. 
            I was out with a friend a few months ago talking about the golden era of the early internet. Things like MySpace, and how it was a place where people could share their hobbies and interests. I wanted to create a space like that for myself, and I hope you enjoy it.
          </Typography>
          
        </Box>
      </Container>
    </>
  );
}

export default App;