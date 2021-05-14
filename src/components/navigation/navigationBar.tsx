import React,{FunctionComponent} from 'react';
import {
  AppBar, Drawer,
  Typography, Toolbar,
  MenuItem, Avatar,Divider,
  IconButton, InputBase, Menu
} from '@material-ui/core';
import BugReportIcon from '@material-ui/icons/BugReport';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import profileImg from "../../assets/profile.png";
import { useTheme } from '@material-ui/core/styles';
import useStyles from "./navigationStyles";
import clsx from 'clsx';

const PrimarySearchAppBar= (props:any)=> {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuState,setMenu] = React.useState(true);
  const isMenuOpen = Boolean(anchorEl);


  const handleDrawerOpen = () => {
    props.togleDrawer(true);
    setMenu(false);
  };

  const handleDrawerClose = () => {
    props.togleDrawer(false);
    setMenu(true);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="static" className={clsx(classes.appBar, {
        [classes.appBarShift]:props.drawerState,
      })}>
        <Toolbar>
          {menuState ? <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={handleDrawerOpen}
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> : <></>}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.bugReport}>
              <BugReportIcon />
              <Typography>Report bug</Typography>
            </div>
            <div>
              <Typography>user</Typography>
            </div>
          </div>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar alt="test user" src={profileImg} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.drawerState}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon  color="primary"/> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.list}>
          <ListItem button className={classes.listItems}>
            <AcUnitIcon className={classes.drawerIcons}/>
          </ListItem>
          <ListItem button className={classes.listItems}>
            <CalendarTodayIcon className={classes.drawerIcons}/>
          </ListItem>
          <ListItem button className={classes.listItems}>
            <AssignmentIcon className={classes.drawerIcons}/>
          </ListItem>
          <ListItem button className={classes.listItems}>
            <BusinessCenterIcon className={classes.drawerIcons}/>
          </ListItem>

          <ListItem button className={classes.listItems}>
            <SettingsIcon className={classes.drawerIcons}/> 
          </ListItem>

        </List>
      </Drawer>
    </div>
  );
}
export default PrimarySearchAppBar