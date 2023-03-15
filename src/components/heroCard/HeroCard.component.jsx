import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import { HeroCardLink } from './HeroCard.styles';

const HeroCard = ({ hero }) => {
	const { image, name, id } = hero;
	return (
		<Card sx={{ maxWidth: 325 }}>
			<HeroCardLink to={id}>
				<CardMedia component='img' image={image} alt={name} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{name}
					</Typography>
				</CardContent>
			</HeroCardLink>
		</Card>
	);
};

HeroCard.propTypes = {
	hero: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
		id: PropTypes.string,
	}),
};

HeroCard.defaultProps = {
	hero: {
		name: '',
		image: '',
		id: '',
	},
};
export default HeroCard;
