import React from 'react';
import List from '../../Components/Responses/List';
import ResponseDetails from '../../Components/Responses/ResponseDetails'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	mainSection: {
		display: 'flex',
		width: '100%',
	},
	listSection: {
		width: '40%'
	},
	detailSection: {
		width: '60%'
	}
}));

const Responses = () => {
	const classes = useStyles();

	return (
		<div className={classes.mainSection}>
			<div className={classes.listSection}>
				<List />
			</div>
			<div className={classes.detailSection}>
				<ResponseDetails />
			</div>
		</div>
	);
};

export default Responses;
