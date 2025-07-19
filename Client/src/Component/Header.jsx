import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles'; // Import styled and alpha
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; // For "New Note"
import EventIcon from '@mui/icons-material/Event'; // For "Event"
import DeleteIcon from '@mui/icons-material/Delete'; // For "Delete"
import MailIcon from '@mui/icons-material/Mail'; // For "Mail"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'; // For "New User"

// --- Styled Components for Search Bar (Copied from MUI AppBar examples) ---
// This creates a styled div for the search input container
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

// This styles the wrapper for the search icon
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// This styles the actual input field
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handler for navigation items (e.g., "New Note", "Mail")
  const handleNavigationClick = (path) => {
    console.log(`Navigating to: ${path}`);
    // In a real app, you would use React Router or similar
    // to change the view/page here, e.g., navigate('/new-note');
    handleClose(); // Close menu if applicable
  };
  const handlechange =(e)=>{
console.log(e.target.value)
  }

  return (
    <Box sx={{ flexGrow: 1, marginBottom:'50vw'}}>
      <AppBar position="static">
        <Toolbar>
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* App Title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, marginRight:'2vh' }} // Hide on small screens
          >
            My Organizer App
          </Typography>

          {/* Navigation/Action Items (visible on larger screens) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center', gap: 3 }}>
            <MenuItem onClick={() => handleNavigationClick('/new-note')}>
              <AddCircleOutlineIcon sx={{ mr: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 'bold' ,marginRight:'20vh'}}>NEW NOTE</Typography>
            </MenuItem>
             {/* Search Bar */}
          <Search sx={{ ml: { xs: 'auto', md: 20 } }}> 
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>handlechange(e)}
            />
          </Search>
            <MenuItem onClick={() => handleNavigationClick('/mail')}>
              <MailIcon sx={{ mr: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>MAIL</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleNavigationClick('/events')}>
              <EventIcon sx={{ mr: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>EVENT</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleNavigationClick('/users')}>
              <PersonAddAlt1Icon sx={{ mr: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>NEW USER</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleNavigationClick('/delete')}>
              <DeleteIcon sx={{ mr: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>DELETE</Typography>
            </MenuItem>
          </Box>


          {/* Account Settings / Avatar */}
          <Box sx={{ ml: 2 }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>😀</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Account Menu */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Header;
