import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const HeroCard = ({ hero }) => {
	const { image, name } = hero;
	return (
		<Box>
			<Card sx={{ maxWidth: 325 }}>
				<CardActionArea>
					<CardMedia component='img' image={image} alt={name} />
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{name}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Box>
	);
};

HeroCard.propTypes = {
	hero: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
	}),
};

HeroCard.defaultProps = {
	hero: {
		name: '',
		image: '',
	},
};
export default HeroCard;
