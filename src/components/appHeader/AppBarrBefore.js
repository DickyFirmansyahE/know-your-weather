import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CardMedia from '@mui/material/CardMedia';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function HideOnScroll(props) {
  const { children, window } = props;
  
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function AppBarBefore(props) {
  const { window } = props;
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: "white" }}>
      <List>
          <ListItem className="drawer-list" disablePadding sx={{ display: "block"}}>
            <ListItemButton component={Link}
              to="/"
              className="drawer-button"
              sx={{ textAlign: 'left', borderRadius: 14 }}>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
            <ListItemButton component={Link}
              to="/favorite"
              className="drawer-button"
              sx={{ textAlign: 'left', borderRadius: 14 }}>
              <ListItemText>Favorite</ListItemText>
            </ListItemButton>
            <ListItemButton component={Link}
              to="/about-us"
              className="drawer-button"
              sx={{ textAlign: 'left', borderRadius: 14 }}>
              <ListItemText>About Us</ListItemText>
            </ListItemButton>
            <ListItemButton component={Link}
              to="/login"
              className="drawer-button"
              sx={{ textAlign: 'left', borderRadius: 14 }}>
              <ListItemText>Login</ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );
    
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className='appheader' sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#404258", fontFamily: '"Roboto","Helvetica","Arial",sans-serif'}}>
          <Toolbar className='header-title' sx={{ width: "auto" }}>
            <CardMedia
        component="img"
        sx={{ width: 40, marginRight: "2px" }}
        image="./logo.png"
        alt="Live from space album cover"
      />
            <Typography className="headerTitle" variant="h6" component="div" sx={{ width: "auto", textAlign: "left" }}>
              Know Your Weather
            </Typography>
          </Toolbar>
          <Toolbar className='nav' sx={{ maxWidth: "100", justifyContent: "right" }}>
          <Stack sx={{ display: "flex", width: "auto", flexDirection: "row", alignItems: "right"}}
              className="nav-button">
              <Button component={Link}
                to="/"
                className="button-nav"
                sx={{ color: '#fff', maxWidth: "100%", borderRadius: 14, margin: "0 1px" }}>
                Home
              </Button>
              <Button component={Link}
                to="/favorite"
                className="button-nav"
                sx={{ color: '#fff', maxWidth: "100%", borderRadius: 14, margin: "0 1px" }}>
                Favorite
              </Button>
              <Button component={Link}
                to="/about-us"
                className="button-nav"
                sx={{ color: '#fff', maxWidth: "100%", whiteSpace: "nowrap", borderRadius: 14, margin: "0 1px" }}>
                About Us
              </Button>
              <Button component={Link}
                to="/login"
                className="button-nav"
                sx={{ color: '#fff', maxWidth: "100%", borderRadius: 14, margin: "0 1px" }}>
                Login
              </Button>
           </Stack>
          <IconButton
            className='burger'
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginLeft: 2 }}
          >
            <MenuIcon className='logo' />
          </IconButton>
        </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="nav" sx={{}}>
        <Drawer
          className='drawer'
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: "auto", top: 57, borderRadius: 1, backgroundColor: "#E14D2A" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </React.Fragment>
  );
}
