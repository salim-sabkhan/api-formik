import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

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

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => navigate("/adduser")}>
            AddUser
          </Button>
          <Button color="inherit" onClick={() => navigate("/edituser")}>
            EditUser
          </Button>
           <Button color="inherit" onClick={() => navigate("/contact")}>
            Contact
          </Button> 
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;