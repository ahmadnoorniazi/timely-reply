import React from 'react';
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer'
	},
	delete: {
		color: theme.palette.error.main,
		paddingTop: theme.spacing(4),
		textAlign: 'center'
	},
	menu: {
		paddingLeft: '8px',
		width: '150px'
	}
}));
const TemplateMenu = () => {
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
				<Box onClick={handleClick} className={classes.root}>
				<IconButton>
					<MoreVertIcon />
				</IconButton>
				</Box>
			</Box>
			<Menu
				PaperProps={{
					style: {
						width: '20ch',
						backgroundColor: 'lightgrey',
						borderRadius: '12px'
					},
				}}
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

				<MenuItem>View</MenuItem>
				<MenuItem>Rename</MenuItem>
				<MenuItem>Duplicate</MenuItem>
				<MenuItem>Share</MenuItem>
				<MenuItem>Results</MenuItem>
				<MenuItem>Copy To</MenuItem>
				<MenuItem>Move To</MenuItem>
				<MenuItem className={classes.delete}>Delete</MenuItem>

			</Menu>
		</React.Fragment>
	);
};

export default TemplateMenu;