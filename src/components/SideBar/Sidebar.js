import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Breadcrumbs, Link, List } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import MenuIcon from '../../svgs/menuIcon'; // Ensure this path is correct
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const drawerWidth = 210;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getBreadcrumbs = (pathname) => {
  const parts = pathname.split('/').filter(Boolean);
  return parts.map((part, index) => {
    const to = `/${parts.slice(0, index + 1).join('/')}`;
    return (
      <Link
        underline="hover"
        key={to}
        color="inherit"
        component={RouterLink}
        to={to}
      >
        {capitalizeFirstLetter(decodeURIComponent(part))}
      </Link>
    );
  });
};

export default function Sidebar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location.pathname);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getTitle = (pathname) => {
    switch (pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/devices":
        return "Devices";
      default:
        return "User Details";
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: theme.zIndex.drawer + 1, marginTop: "49px" }}
        className={styles.navbar}
        open={open}
      >
        <Toolbar sx={{ minHeight: "48px !important" }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              ...(open && { display: "none" }),
              marginLeft: "10px",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            top: "50px",
            border: "none",
            backgroundColor:"#FBF7FA"
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ minHeight: "46px !important", backgroundColor: "FBF7FA !important" }}>
          <IconButton
            color="black"
            aria-label="Close drawer"
            onClick={handleDrawerClose}
            edge="start"
            sx={{ marginRight: "12px" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={styles.title}
            variant="h6"
            noWrap
            component="div"
          >
            {getTitle(location.pathname)}
          </Typography>
          <ChevronRightIcon />
        </DrawerHeader>
        <Divider />
        <List className={styles.sidenav} sx={{ paddingTop: "20px" }}>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/dashboard">
              <ListItemText primary="Dashboard" className={styles.listItemText} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/devices">
              <ListItemText primary="Devices" className={styles.listItemText} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        {children}
      </Main>
    </Box>
  );
}
