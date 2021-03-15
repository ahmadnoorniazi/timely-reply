import React from 'react';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "@material-ui/core";
import Circle from '@material-ui/icons/AddCircleOutline';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 220,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const CreateForm = () => {
	const classes = useStyles();

	return (
      <Grid container spacing={3}>
				<Grid item>

						<Link href={'#'}>
							<Box display={'flex'} alignItems={'center'}>
							<Circle />
								<Box ml={1}>Add More Questions</Box>
							</Box>
							</Link>



				</Grid>
        <Grid item xs={12}>
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="age-native-simple">Question Type</InputLabel>
						<Select
							native
							value={''}
							onChange={() => {}}
						>
							<option aria-label="None" value="" />
							<option value={10}>Ten</option>
							<option value={20}>Twenty</option>
							<option value={30}>Thirty</option>
						</Select>
					</FormControl>
        </Grid>
      </Grid>
    )
}

export default CreateForm