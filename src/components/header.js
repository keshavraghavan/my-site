import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const pages = ['Home', 'The Library', 'The Blog', 'The Googles', 'Career', 'Contact'];

function Header() {

  //This is for the font.  
  const headerFont = createTheme({
    typography: {
      fontFamily: [
        'EB Garamond',
        'serif'
      ].join(','),    
    }
  });

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={headerFont}>
        <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                {/* Mobile Menu */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between' }}>
                    <IconButton
                    size="large"
                    aria-label="open navigation menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                {/* Desktop Menu */}
                <Box
                  sx={{ 
                    flexGrow: 2, 
                    display: { xs: 'none', md: 'flex' }, 
                    justifyContent: 'flex-start' // Align buttons to the left
                  }}>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page}
                    </Button>
                    ))}
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  );
}

export default Header;