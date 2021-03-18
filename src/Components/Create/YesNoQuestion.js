import React from 'react';
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "../../Containers/CreateForm";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";

const YesNoQuestion = ({index, handleRemove}) => {
	const classes = useStyles();
	return (
		<Grid item xs={12}>
			<Paper elevation={1} className={classes.paper}>
				<Box width={1 /2} display={'flex'} alignItems={'baseline'}>
					<Box mr={3}><h2>{index + 1}</h2></Box>
					<TextField fullWidth id="standard-basic" label="Type your Question" />
				</Box>
				<Box width={1/2} ml={4}>
					<RadioGroup aria-label="gender" name="gender1" value={''}>
						<FormControlLabel value="female" control={<Radio />} label="Yes" />
						<FormControlLabel value="male" control={<Radio />} label="No" />
					</RadioGroup>
				</Box>

				<Box pt={2}>
					<Button onClick={() => handleRemove(index)} variant="contained" color={'secondary'}>Remove Question</Button>
				</Box>
			</Paper>
		</Grid>
	);
};

export default YesNoQuestion;
