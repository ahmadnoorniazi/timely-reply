import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinkInput from './LinkInput'
import { FaEnvelope} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
 
  icon:{
      width: "120px",
      height: "92px",
      color: "#3f51b5",
  },
  linkWrapper: {
    marginBottom: "20px"
  },
  wrapper:{
    padding: "15px 55px",
    display: "flex",
    JustifyContent: "space-between",
    height: "100%",
    alignItems: "center",
  },
  topText: {
      fontSize: "16px",
      fontWeight: "600",
      textAlign: "center",
      marginBottom: "25px"
  },
  descriptionText: {
       fontSize: "14px",
      fontWeight: "400",
  }
  

}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <div className={classes.child}>
            <p className={classes.topText}>Launch in an email</p>
            <p className={classes.descriptionText}>Your first question loads in an email. Interacting with it  launches the full typeform.</p>
        </div>
        <div className={classes.child}>
            <FaEnvelope className={classes.icon} />
        </div>
      </div>
    </React.Fragment>
  );
}
