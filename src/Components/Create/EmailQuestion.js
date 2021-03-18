import React from 'react';
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "../../Containers/CreateForm";
import Button from "@material-ui/core/Button";

const EmailQuestion = ({index, handleRemove}) => {
	const classes = useStyles();
	return (
		<Grid item xs={12}>
			<Paper elevation={1} className={classes.paper}>
				<Box width={1 /2} display={'flex'} alignItems={'baseline'}>
					<Box mr={3}><h2>{index + 1}</h2></Box>
					<TextField fullWidth label="Type your Question" />
				</Box>
				<Box width={1/2} ml={4}>
					<TextField label={'Email'} type={'Email'} fullWidth  />
				</Box>

				<Box pt={2}>
					<Button onClick={() => handleRemove(index)} variant="contained" color={'secondary'}>Remove Question</Button>
				</Box>
			</Paper>
		</Grid>
	);
};

export default EmailQuestion;
