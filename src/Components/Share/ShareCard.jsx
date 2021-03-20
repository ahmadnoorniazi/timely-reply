import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkInput from './LinkInput';
import { FaEnvelope } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
	icon: {
		width: '120px',
		height: '92px',
		color: '#3f51b5'
	},
	linkWrapper: {
		marginBottom: '20px'
	},
	wrapper: {
		padding: '28px 10px',
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		backgroundColor: '#EEEEEE',
		borderRadius: '15px'
	},
	topText: {
		fontSize: '18px',
		fontWeight: '700',
		margin: 0
	},
	descriptionText: {
		fontSize: '14px',
		fontWeight: '400'
	},
	iconWrapper: {
		textAlign: 'center',
		width: '100%'
	}
}));

export default function CustomizedInputBase({ text, subText, Icon }) {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<div className={classes.iconWrapper}>
				<Icon className={classes.icon} />
			</div>
			<div className={classes.child}>
				<p className={classes.topText}>{text}</p>
				<p className={classes.descriptionText}>{subText}</p>
			</div>
		</div>
	);
}
