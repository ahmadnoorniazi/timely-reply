import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkSection from '../../Components/Share/LinkSection';
import EmailSection from '../../Components/Share/EmailSection';
import ShareCard from '../../Components/Share/ShareCard';
import { AiOutlineAppstore } from 'react-icons/ai';
import { MdViewQuilt, MdViewStream } from 'react-icons/md';

const useStyles = makeStyles((theme) => ({
	topSection: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%'
	},
	sectionChild: {
		width: '45%'
	},
	sectionChild2: {
		width: '45%',

		backgroundColor: '#EEEEEE',
		borderRadius: '15px'
	},
	cardsWrapper: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	card: {
		width: '30%'
	},
	bottomText: {
		fontWeight: '700',
		fontSize: '26px',
		marginTop: '50px',
		textAlign: 'center'
	}
}));

const cardData = [
	{ text: 'Standard', subText: 'Embade on your website', icon: AiOutlineAppstore },
	{
		text: 'Slide',
		subText: 'Embade on your website will be displyed on the side of the scren',
		icon: MdViewQuilt
	},
	{
		text: 'Pop Up',
		subText: 'Your form pops up in the center of the screen. Set custom launch options, like a time delay.',
		icon: MdViewStream
	}
];

const SharePage = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<h1>Share Page</h1>
			<div className={classes.topSection}>
				<div className={classes.sectionChild}>
					<LinkSection />
				</div>
				<div className={classes.sectionChild2}>
					<EmailSection />
				</div>
			</div>
			<div style={{ marginTop: '50px', fontWeight: 600, fontSize: '16px' }}>
				<p>Embed in a Webpage</p>
			</div>
			<div className={classes.cardsWrapper}>
				{cardData.map((data) => (
					<div className={classes.card}>
						<ShareCard text={data.text} subText={data.subText} Icon={data.icon} />
					</div>
				))}
			</div>
			<p className={classes.bottomText}>Comming Here</p>
		</React.Fragment>
	);
};

export default SharePage;
