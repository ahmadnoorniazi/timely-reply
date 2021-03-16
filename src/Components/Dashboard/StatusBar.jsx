import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: "#3f51b5",
    margin: "0px 20px",
    borderRadius: "15px",
    marginTop: "30px"
  },
  icon:{
    color: "red",
    marginRight: "10px"
  },
  wrapper:{
      display: "flex",
      flexDirection: "row",
  },
  labelIcon:{
      marginRight: "5x",
  },
  tabContainer:{
    display: "flex",
    justifyContent: "space-around",
  },
  tabItem: {
    margin: "10px 20px",
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    boxSizing: "border-box",
    borderRadius:"10px",
    display: "flex",
    flexDirection: "column",
  },
  tabText: {
     margin: 0,
      padding: 0,
      fontSize: "16px",
      fontWeight: 600,
      fontFamily: "Poppins",
      color: "white",
  }
  
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.tabContainer}>
        <div className={classes.tabItem}>
            <p className={classes.tabText}>Views</p>
           <p className={classes.tabText}>235</p>
        </div>
         <div className={classes.tabItem}>
           <p className={classes.tabText}>Starts</p>
           <p className={classes.tabText}>235</p>
        </div>
        <div className={classes.tabItem}>
          <p className={classes.tabText}>Responses</p>
           <p className={classes.tabText}>235</p>
        </div>
         <div className={classes.tabItem}>
          <p className={classes.tabText}>Views</p>
           <p className={classes.tabText}>235</p>
        </div>
         <div className={classes.tabItem}>
          <p className={classes.tabText}>Average Time To Response</p>
           <p className={classes.tabText}>235</p>
        </div>
      </div>
    </div>
  );
}