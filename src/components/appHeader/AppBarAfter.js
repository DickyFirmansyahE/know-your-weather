/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useEffect, useState } from "react";
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
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";


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

export default function AppBarAfter(props) {
  const { window } = props;
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, `users/${user?.uid}/auth`), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;

    fetchUserName();
  }, [user, loading]);

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
              to="/about"
              className="drawer-button"
              sx={{ textAlign: 'left', borderRadius: 14 }}>
              <ListItemText>About Us</ListItemText>
            </ListItemButton>
            <ListItemButton component={Link}
              to="/"
              className="drawer-button"
              onClick={logout}
              sx={{ textAlign: 'left', borderRadius: 14 }}>
              <ListItemText>Logout</ListItemText>
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
          <Stack sx={{ display: "flex", width: "auto", flexDirection: "row", alignItems: "center", marginRight: 1 }}
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
                to="/aboutus"
                className="button-nav"
                sx={{ color: '#fff', maxWidth: "100%", borderRadius: 14, margin: "0 1px" }}>
                About Us
              </Button>
           </Stack>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AccountCircle sx={{color: "white"}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', '& .MuiMenu-list': {
                backgroundColor: "#E14D2A", color: "white"
              }, }}
              className="drawer-list"
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
                <MenuItem
                  sx={{ borderRadius: 14 }}
                  className="drawer-button"
                  onClick={handleCloseUserMenu}>
                  <Typography textAlign="left" sx={{fontWeight: "bold"}}>{name}</Typography>
                </MenuItem>
                <MenuItem
                  sx={{ borderRadius: 14 }}
                  className="drawer-button" 
                  component={Link}
                  to="/"
                  onClick={logout}>
                  <Typography textAlign="left">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
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
