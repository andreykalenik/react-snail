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



const pages = ['Athlete Stat', ' Activites Map'];
const settings = ['Profile', 'Account', '', 'Logout'];

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

  return (
    <ThemeProvider theme={theme}>
        <AppBar position="sticky" >
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                {/* <img 
                            src = {AppLogo}
                            width = "36px"
                            height= "36px"
                            alt = "React Logo"
                        /> */}
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
                fontWeight: 700,
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
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
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
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '24px'
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
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    </ThemeProvider>    
  );
}
export default ResponsiveAppBar;