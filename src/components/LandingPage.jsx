import { Box, makeStyles, Typography } from "@material-ui/core";
import Flower1 from "../components/Assets/Images/Flower1.jpeg";
import heart from "../components/Assets/Images/heart.jpeg";

const useStyles = makeStyles({
	image: {
		width: "50%",
		height: "60%",
	},
	component: {
		margin: 50
	}
});
const LandingPage = () => {
	const classes = useStyles();
	return (
		<Box>
			<Typography className={classes.component} variant="h4" style={{marginBottom: 50}}>Landing page</Typography>
			<Box style={{ display: "flex" }}>
				<img className={classes.image} src={Flower1} alt='' style={{width: "65%", height:"374px"}} />
				<img className={classes.image} src={heart} alt='' />
			</Box>
		</Box>
	);
};

export default LandingPage;
