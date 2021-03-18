import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import {NavLink} from "react-router-dom";
import { ReactComponent as PlusIcon } from '../../images/plus.svg';
import SvgIcon from "@material-ui/core/SvgIcon";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: 8,
		height: (props) => props.height || 320,
	},
	content: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		minHeight: '100%'
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
}));
const NewForm = (props) => {
	const classes = useStyles(props);

	return (
		<Card className={classes.root}>
			<CardContent className={classes.content}>
				<Box>
					<Typography className={classes.title}>
						<Link component={NavLink} color="inherit" to={'/create/form'}>New Form</Link>
				</Typography>
					<Box color={'secondary'} >
						<SvgIcon viewBox='0 0 30 30' component={PlusIcon} />
					</Box>

				</Box>
			</CardContent>
		</Card>
	);
};

export default NewForm;
