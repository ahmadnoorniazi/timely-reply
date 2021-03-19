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
import Select from '../Dashboard/Select'

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
		margin: '20px',
	},
	button:{
		backgroundColor: '#7459D9',
		fontWeight: 600,
		fontSize: "14px",
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
				<Select width="300px" placeholder="Seach by Question Name"/>
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
			<div>
		<Button className={classes.button} variant="contained" color="primary">
        Download all Responses
      </Button>
			</div>
		</React.Fragment>
	);
}

// import React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import { withStyles } from '@material-ui/core/styles';
// import TableCell from '@material-ui/core/TableCell';
// import Paper from '@material-ui/core/Paper';
// import { AutoSizer, Column, Table } from 'react-virtualized';
// import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
// import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

// const styles = (theme) => ({
// 	flexContainer: {
// 		display: 'flex',
// 		alignItems: 'center',
// 		boxSizing: 'border-box'
// 	},
// 	table: {
// 		// temporary right-to-left patch, waiting for
// 		// https://github.com/bvaughn/react-virtualized/issues/454
// 		'& .ReactVirtualized__Table__headerRow': {
// 			flip: false,
// 			paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined
// 		}
// 	},
// 	tableRow: {
// 		cursor: 'pointer'
// 	},
// 	tableRowHover: {
// 		'&:hover': {
// 			backgroundColor: theme.palette.grey[200]
// 		}
// 	},
// 	tableCell: {
// 		flex: 1
// 	},
// 	noClick: {
// 		cursor: 'initial'
// 	}
// });

// class MuiVirtualizedTable extends React.PureComponent {
// 	static defaultProps = {
// 		headerHeight: 48,
// 		rowHeight: 48
// 	};

// 	getRowClassName = ({ index }) => {
// 		const { classes, onRowClick } = this.props;

// 		return clsx(classes.tableRow, classes.flexContainer, {
// 			[classes.tableRowHover]: index !== -1 && onRowClick != null
// 		});
// 	};

// 	cellRenderer = ({ cellData, columnIndex }) => {
// 		const { columns, classes, rowHeight, onRowClick } = this.props;
// 		return (
// 			<TableCell
// 				component="div"
// 				className={clsx(classes.tableCell, classes.flexContainer, {
// 					[classes.noClick]: onRowClick == null
// 				})}
// 				variant="body"
// 				style={{ height: rowHeight }}
// 				align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
// 			>
// 				{cellData}
// 			</TableCell>
// 		);
// 	};

// 	headerRenderer = ({ label, columnIndex }) => {
// 		const { headerHeight, columns, classes } = this.props;

// 		return (
// 			<TableCell
// 				component="div"
// 				className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
// 				variant="head"
// 				style={{ height: headerHeight }}
// 				align={columns[columnIndex].numeric || false ? 'right' : 'left'}
// 			>
// 				<span>{label}</span>
// 			</TableCell>
// 		);
// 	};

// 	render() {
// 		const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
// 		return (
// 			<AutoSizer>
// 				{({ height, width }) => (
// 					<Table
// 						height={height}
// 						width={width}
// 						rowHeight={rowHeight}
// 						gridStyle={{
// 							direction: 'inherit'
// 						}}
// 						headerHeight={headerHeight}
// 						className={classes.table}
// 						{...tableProps}
// 						rowClassName={this.getRowClassName}
// 					>
// 						{columns.map(({ dataKey, ...other }, index) => {
// 							return (
// 								<Column
// 									key={dataKey}
// 									headerRenderer={(headerProps) =>
// 										this.headerRenderer({
// 											...headerProps,
// 											columnIndex: index
// 										})}
// 									className={classes.flexContainer}
// 									cellRenderer={this.cellRenderer}
// 									dataKey={dataKey}
// 									{...other}
// 								/>
// 							);
// 						})}
// 					</Table>
// 				)}
// 			</AutoSizer>
// 		);
// 	}
// }

// MuiVirtualizedTable.propTypes = {
// 	classes: PropTypes.object.isRequired,
// 	columns: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			dataKey: PropTypes.string.isRequired,
// 			label: PropTypes.string.isRequired,
// 			numeric: PropTypes.bool,
// 			width: PropTypes.number.isRequired
// 		})
// 	).isRequired,
// 	headerHeight: PropTypes.number,
// 	onRowClick: PropTypes.func,
// 	rowHeight: PropTypes.number
// };

// const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// // ---

// const sample = [
// 	[ 'Frozen yoghurt', 159, 6.0, 24, 4.0 ],
// 	[ 'Ice cream sandwich', 237, 9.0, 37, 4.3 ],
// 	[ 'Eclair', 262, 16.0, 24, 6.0 ],
// 	[ 'Cupcake', 305, 3.7, 67, 4.3 ],
// 	[ 'Gingerbread', 356, 16.0, 49, 3.9 ]
// ];

// function createData(id, dessert, calories, fat, carbs, protein) {
// 	return { id, dessert, calories, fat, carbs, protein };
// }

// const rows = [];

// for (let i = 0; i < 200; i += 1) {
// 	const randomSelection = sample[Math.floor(Math.random() * sample.length)];
// 	rows.push(createData(i, ...randomSelection));
// }

// export default function ReactVirtualizedTable() {
// 	return (
// 		<Paper style={{ height: 400, width: '100%' }}>
// 			<VirtualizedTable
// 				rowCount={rows.length}
// 				rowGetter={({ index }) => rows[index]}
// 				columns={[
// 					{
// 						width: 200,
// 						label: 'Total Responses',
// 						dataKey: 'responses'
// 					},
// 					{
// 						width: 120,
// 						label: 'Calories\u00A0(g)',
// 						dataKey: 'calories',
// 						numeric: true,
// 						render: () => <h1>Lol</h1>
// 					}
// 				]}
// 			/>
// 		</Paper>
// 	);
// }
