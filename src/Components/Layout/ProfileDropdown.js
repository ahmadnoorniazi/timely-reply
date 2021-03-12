import React from 'react';
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer'
	},
}));
const ProfileDropdown = ({ name, designation }) => {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};


	return (
		<React.Fragment>
			<Box display={'flex'}>
				<Box pr={2}>
					<p>Bessie Cooper</p>
				</Box>
				<Box onClick={handleClick} className={classes.root}>
				<Avatar />
				<ArrowDropDownIcon />
				</Box>
			</Box>
			<Menu
				anchorEl={anchorEl}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				open={open}
				onClose={handleClose}
			>

				<MenuItem>My  Profile</MenuItem>
				<MenuItem>Logout</MenuItem>

			</Menu>
		</React.Fragment>
	);
};

export default ProfileDropdown;