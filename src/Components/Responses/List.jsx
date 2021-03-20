import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

// import Title from './Title';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import Select from '../Dashboard/Select';

// Generate Order Data

function createData(id, date, name, shipTo, paymentMethod, amount) {
	return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
	createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
	createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
	createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
	createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
	createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79)
];

function preventDefault(event) {
	event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
	seeMore: {
		marginTop: theme.spacing(3)
	},
	main: {
		margin: '20px',
		borderRadius: '5px'
	},
	topHeader: {
		display: 'flex',
		alignItems: 'center'
	},
	responseHeading: {
		fontWeight: 600,
		lineHeight: '24px',
		fontSize: '16px',
		padding: 0
	},
	tableBody: {
		height: '80vh',
		overflowY: 'scroll'
	},
	inputSection: {
		margin: '20px'
	},
	button: {
		backgroundColor: '#7459D9',
		fontWeight: 600,
		fontSize: '14px',
		borderRadius: '5px',
		textAlign: 'center',
		marginTop: '50px'
	}
}));

export default function Orders() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<div className={classes.inputSection}>
				<Select width="300px" placeholder="Seach by Question Name" />
			</div>
			<div className={classes.main}>
				<div className={classes.topHeader}>{/* <Title>Questions by Question</Title> */}</div>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>
								<CheckCircleRoundedIcon style={{ color: '#2E3A59' }} />
							</TableCell>
							<TableCell className={classes.responseHeading}>Total Responses 2</TableCell>
							<TableCell />
						</TableRow>
						<TableRow />
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.id}>
								<TableCell>
									<CheckCircleOutlinedIcon />
								</TableCell>
								<TableCell>{row.name}</TableCell>
								<TableCell>{row.shipTo}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<div className={classes.seeMore} />
			</div>
			<div style={{ textAlign: 'center' }}>
				<Button className={classes.button} variant="contained" color="primary">
					Download all Responses
				</Button>
			</div>
		</React.Fragment>
	);
}
