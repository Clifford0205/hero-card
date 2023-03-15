import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash-es';

import Grid from '@mui/material/Grid';

import { selectHeros, selectListIsLoading } from 'STORE/heros/heros.selector';
import Spinner from 'SRC/components/spinner/Spinner.component';
import HeroCard from 'COMPONENTS/heroCard/HeroCard.component';

const HerosList = () => {
	const herosList = useSelector(selectHeros);
	const isLoading = useSelector(selectListIsLoading);
	console.log('herosList: ', herosList);

	return (
		<>
			<Grid container spacing={8}>
				{!isEmpty(herosList) &&
					herosList.map((hero) => (
						<Grid
							xs={12}
							sm={6}
							md={3}
							sx={{ display: 'flex', justifyContent: 'center' }}
							item
							key={hero.id}
						>
							<HeroCard hero={hero} />
						</Grid>
					))}
			</Grid>
		</>
	);
};

export default HerosList;
