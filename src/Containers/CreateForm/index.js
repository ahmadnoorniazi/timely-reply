import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "@material-ui/core";
import Circle from '@material-ui/icons/AddCircleOutline';
import Box from "@material-ui/core/Box";
import {ReactComponent as PlusIcon} from "../../images/plus.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import {Alert} from "@material-ui/lab";
import DateQuestion from "../../Components/Create/DateQuestion";
import LongQuestion from "../../Components/Create/LongQuestion";
import EmailQuestion from "../../Components/Create/EmailQuestion";
import YesNoQuestion from "../../Components/Create/YesNoQuestion";

export const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: 600
	},
	formControl: {
		minWidth: 220,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	paper: {
		padding: theme.spacing(3)
	}
}));
const mapping = {
	date: DateQuestion,
	email: EmailQuestion,
	long: LongQuestion,
	yesno: YesNoQuestion

}

const CreateForm = () => {
	const classes = useStyles();
	const [qType, setQType] = useState('');
	const [questions, setQuestions] = useState([])
	const [questionError, setQuestionError] = useState(false)
	const addQuestion = () => {
		if(!qType) {
			setQuestionError(true)
			return
		}
		setQuestionError(false)

		questions.push(mapping[qType])
	}

	const onRemove = (index) => {
		questions.splice(index, 1 )
		setQuestions([...questions])
	}

	return (
      <Grid container spacing={3} className={classes.root} direction={'column'}>
				{questionError &&
				<Grid item xs={12}>
					<Alert severity="error">Please choose question type first</Alert>
				</Grid>
				}
				<Grid item>

						<Link href={'#'}>
							<Box display={'flex'} alignItems={'center'}>
								<SvgIcon viewBox='0 0 30 30' component={PlusIcon} />
								<Box ml={1} onClick={addQuestion}>Add More Questions</Box>
							</Box>
							</Link>



				</Grid>

				<Grid item xs={12}>
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="age-native-simple">Question Type</InputLabel>
						<Select
							native
							value={qType.name}
							onChange={({target: {value}}) => setQType(value)}
						>
							<option aria-label="None" value="" />
							<option value={'email'}>Email</option>
							<option value={'date'}>Date</option>
							<option value={'yesno'}>Yes/No</option>
							<option value={'long'}>Long Text</option>
						</Select>
					</FormControl>
        </Grid>

				{questions.map((question, index) => {
					const Comp = question
					return <Comp index={index} handleRemove={onRemove} />
				})}

      </Grid>
    )
}

export default CreateForm
