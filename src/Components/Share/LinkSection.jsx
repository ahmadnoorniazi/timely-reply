import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinkInput from './LinkInput'
import { FaLinkedinIn,FaEnvelope, FaFacebookF, FaTwitter, FaLink } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  copyButton:{
    borderRadius: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  linkText:{
      margin: 0,
      marginLeft: "5px"
  },
  socialIcons: {
      display: "flex",
      marginTop: "10px"
  },
  icon:{
      marginRight: "5px",
      marginLeft: "5px",
      width: "30px",
      height: "30px",
      color: "#3f51b5",
  },
  linkIcon:{
    width: "25px",
      height: "25px",
      color: "#3f51b5",
  },
  linkWrapper: {
    marginBottom: "20px"
  },
  wrapper:{
    padding: "15px 30px",
    border: "1px solid black",
    borderRadius: "5px",
  }

}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <div className={classes.linkWrapper}>
          <FaLink className={classes.linkIcon} />
        </div>
        <div>
            <p className={classes.linkText}>Get the link or share on social</p>
            <LinkInput />
            <div className={classes.socialIcons}>
                <FaEnvelope className={classes.icon} />
                <FaTwitter className={classes.icon} />
                <FaFacebookF className={classes.icon} />
                <FaLinkedinIn className={classes.icon}/>
            </div>
        </div>
        </div>
    </React.Fragment>
  );
}
