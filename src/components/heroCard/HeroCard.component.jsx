import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { HeroCardContainer, HeroCardLink, HeroCardImage, HeroCardContent } from './HeroCard.styles';

const HeroCard = ({ hero }) => {
	const { heroId } = useParams();
	const { image, name, id } = hero;
	return (
		<HeroCardContainer isActive={heroId === id}>
			<HeroCardLink to={id}>
				<HeroCardImage component='img' image={image} alt={name} />
				<HeroCardContent>
					<Typography variant='h5' component='div'>
						{name}
					</Typography>
				</HeroCardContent>
			</HeroCardLink>
		</HeroCardContainer>
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
