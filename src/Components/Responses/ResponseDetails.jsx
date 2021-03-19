import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import SearchInput from './SearchInput'
import ShortTextIcon from '@material-ui/icons/ShortText';
import Select from '../Dashboard/Select'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
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
    inputSection:{
        display: 'flex',
        justifyContent: "flex-end",
        margin: "20px"
    },

	main: {
		margin: '20px',
		padding: '15px',
		borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
	},
	responseCard:{
        width: '100%',
        padding: '10px',
        backgroundColor: '#EEEEEE',
        marginBottom: "20px",
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '15px'
    },
    question:{
        display: 'flex',
        alignItems: 'flex-start',
    },
    questionText:{
      fontSize: "16px",
        fontWeight: "600",
        margin:0
    },
    answerSection: {
        fontSize: "16px",
        fontWeight: "400", 
    },
    icon: {
        marginRight: "5px",
        color: "#7459D9",
    },
    searchInput:{
        marginRight: "30px"
    }
}));

export default function Orders() {
	const classes = useStyles();
	return (
		<React.Fragment>
            <div className={classes.inputSection}>
                <div className={classes.searchInput}>
                <SearchInput />
                </div>
                <div className={classes.selectBar}>
                    <Select placeholder="All the time" />
                </div>
            </div>
			<div className={classes.main}>
            <div className={classes.responseCard}>
            <div className={classes.question}>
                <ShortTextIcon className={classes.icon} />
                <div>
                <p className={classes.questionText}>Your Name?</p>
                <p className={classes.answerSection}>John</p>
                </div>
            </div>
             <div className={classes.question}>
                <ShortTextIcon className={classes.icon} />
                <div>
                <p className={classes.questionText}>Yes Or No?</p>
                <p className={classes.answerSection}>No</p>
                </div>
            </div>
              <div className={classes.question}>
                <ShortTextIcon className={classes.icon} />
                <div>
                <p className={classes.questionText}>Email?</p>
                <p className={classes.answerSection}>johndoe@gmail.com</p>
                </div>
            </div>

            
            </div>
            <div className={classes.responseCard}>
             <div className={classes.question}>
                <ShortTextIcon className={classes.icon} />
                <div>
                <p className={classes.questionText}>Your Name?</p>
                <p className={classes.answerSection}>John</p>
                </div>
            </div>
             <div className={classes.question}>
                <ShortTextIcon className={classes.icon} />
                <div>
                <p className={classes.questionText}>Yes Or No?</p>
                <p className={classes.answerSection}>No</p>
                </div>
            </div>
              <div className={classes.question}>
                <ShortTextIcon className={classes.icon} />
                <div>
                <p className={classes.questionText}>Email?</p>
                <p className={classes.answerSection}>johndoe@gmail.com</p>
                </div>
            </div>
            </div>
			</div>
		</React.Fragment>
	);
}
