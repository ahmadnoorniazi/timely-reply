import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import Circle from '@material-ui/icons/AddCircleOutline';
import Box from "@material-ui/core/Box";
import {template} from "../../theme/colors";
const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		backgroundColor: template,
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
					New Form
				</Typography>
					<Circle />
				</Box>
			</CardContent>
		</Card>
	);
};

export default NewForm;