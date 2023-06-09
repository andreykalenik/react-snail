import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AppLogo from '../assets/img/snail-static-white.svg'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {UIorange} from '../assets/UIColors'
import { useNavigate } from "react-router-dom"

type AppBarProps = {
  children: React.ReactNode;
  avatarImg: string ,
  avatarAlt: string ,
}

const theme = createTheme({
  palette: {
    primary: {
        light: '#ff7961',
        main: `${UIorange}`,
        dark: '#ba000d',
        contrastText: 'white',
    },
    secondary: {
        light: '#ff7961',
        main: `${UIorange}`,
        dark: '#ba000d',
        contrastText: 'white',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen',
      'Helvetica Neue',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol'
    ].join(','),
  button: {
        fontStyle: 'bold',
        fontSize: '24px',
        textTransform: 'none',
      },
  },
  components: {
    MuiAppBar:{
        styleOverrides: {
            root: {
              height: '50px',
              minHeight: '50px',
            },
          },
    },
    MuiToolbar:{
        styleOverrides: {
            root: {
              height: '50px',
              minHeight: '50px',
              '@media (min-width:600px)': {
                minHeight: '50px',
              },
            },
          },
    },
 }
});



const  ResponsiveAppBar: React.FC<AppBarProps> = ({children, avatarImg, avatarAlt}) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate()

  return (
    <ThemeProvider theme={theme}>
        <AppBar position="sticky" >
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Typography
                variant="h3"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'sans-serif',
                fontSize: '24px',
                fontWeight: 500,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >

            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
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
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >

                    <MenuItem key={'Map'} onClick={(() => navigate("/map"))}>
                    <Typography textAlign="center">Map</Typography>
                    </MenuItem>

                    <MenuItem key={'Athlete Stat'} onClick={(() => navigate("/stat"))}>
                    <Typography textAlign="center">Athlete Stat</Typography>
                    </MenuItem>

                </Menu>
            </Box>
            <Box sx={{
                marginInlineStart:'-10px',
                marginInlineEnd: '16px'
                }}>
              <img 
                      src = {AppLogo}
                      width = "38px"
                      height= "38px"
                      alt = "React Logo"
                  />
            </Box>
            <Typography
                variant="h3"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'sans-serif',
                fontWeight: 500,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '20px'
                }}
            >
                React Snail App
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '24px' } }}>
              {children}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={avatarAlt} src={avatarImg}/>
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >

                    <MenuItem key={'Profile'} onClick={(() => navigate("/"))}>
                    <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                    <MenuItem key={'Logout'} 
                            onClick={(() => {
                              localStorage.clear()
                              window.location.reload();
                            })}>
                    <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    </ThemeProvider>    
  );
}
export default ResponsiveAppBar;