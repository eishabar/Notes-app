import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Paper, Container } from "@material-ui/core";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

// REACT APP IMPORTS
import Home from "./Pages/Home";
import Notes from "./Pages/Notes";
import Reminders from "./Pages/Reminders";
import Calendar from "./Pages/Calendar";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <BrowserRouter>
          <AppBar>
            <Toolbar>
              <Typography
                variant="h5"
                component="p"
                color="textSecondary"
                className={classes.title}
              >
                Clockwise
              </Typography>
              {isMobile ? (
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                  >
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/"
                    >
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Home</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/Notes"
                    >
                      <ListItemIcon>
                        <SchoolIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Notes </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/Reminders"
                    >
                      <ListItemIcon>
                        <CircleNotificationsIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Reminders</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/Calendar"
                    >
                      <ListItemIcon>
                        <BookmarksIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Calendar </Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "2rem" }}>
                  <Button
                    variant="text"
                    component={Link}
                    to="/"
                    color="default"
                  >
                    Home
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/College"
                    color="default"
                  >
                    Daily Check-In
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/College"
                    color="default"
                  >
                    Habit Tracker
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/College"
                    color="default"
                  >
                    Notes
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/About"
                    color="default"
                  >

                    Reminders
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/Personal"
                    color="default"
                  >

                    Calendar
                  </Button>
                </div>
              )}
            </Toolbar>
          </AppBar>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/Notes" component={Notes} />
            <Route exact path="/Reminders" component={Reminders} />
            <Route exact path="/Calendar" component={Calendar} />
          </Routes>
        </BrowserRouter>
      </HideOnScroll>
    </div>

  );
};

export default Header;
