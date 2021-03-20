import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "placeholdercenter",
    boxShadow: "none",
    width: "100%",
    border: "2px solid gray",
    borderRadius: '15px'
  },
  input: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  copyButton:{
    borderRadius: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
  }
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          value="https://harw9sehm.timelyreply.com/to/iBNbaKPS"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <Button variant="contained" color="primary"  className={classes.copyButton}>
          Copy link
        </Button>
      </Paper>
    </React.Fragment>
  );
}
