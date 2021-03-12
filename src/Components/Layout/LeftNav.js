import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItemText from "@material-ui/core/ListItemText";
import {CastConnected, Create, ExpandLess, ExpandMore, Share} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9),
		},
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));
const drawerWidth = 240;

const LeftNav = () => {
	const classes = useStyles();

	const [subMenuOpen, setSubMenuOpen] = React.useState(false);

	const handleOpenSubMenu = () => {
		setSubMenuOpen(!subMenuOpen);
	};

	return (
		<List>
			<div>
				<ListItem button  onClick={handleOpenSubMenu}>
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
					{subMenuOpen ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<Create />
							</ListItemIcon>
							<ListItemText primary="Create" />
						</ListItem>

						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<CastConnected />
							</ListItemIcon>
							<ListItemText primary="Connect" />
						</ListItem>

						<ListItem button className={classes.nested}>
							<ListItemIcon>
								<Share />
							</ListItemIcon>
							<ListItemText primary="Share" />
						</ListItem>

					</List>
				</Collapse>
			</div>
		</List>
	);
};

export default LeftNav;