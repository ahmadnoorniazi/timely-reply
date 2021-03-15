import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import Circle from '@material-ui/icons/AddCircleOutline';
import Box from "@material-ui/core/Box";
import {template} from "../../theme/colors";
import Avatar from "@material-ui/core/Avatar";
import  TemplateMenu from '../Create/TemplateMenu'
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
	footer: {
		marginTop: -60,
		backgroundColor: theme.palette.primary.main,
		borderRadius: '8px'
	},
	test: {
		border: '4px solid'
	}
}));
const NewForm = (props) => {
	const classes = useStyles(props);

	return (
		<Card className={classes.root}>
			<CardContent className={classes.content}>
				<Box>
					<Typography className={classes.title}>
					Contact Us
				</Typography>
				</Box>
			</CardContent>
			<CardActions className={classes.footer}>
				<Box width={1} display={'flex'} justifyContent={'space-between'}>
					<Box display={'flex'} alignItems={'center'}>
						<Avatar>12</Avatar>
						<Box ml={1}>Responses</Box>
					</Box>
					<TemplateMenu />
				</Box>

			</CardActions>
		</Card>
	);
};

export default NewForm;