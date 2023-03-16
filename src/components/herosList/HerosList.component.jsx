import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash-es';
import { Outlet } from 'react-router-dom';

import Grid from '@mui/material/Grid';

import { selectHeros, selectListIsLoading } from 'STORE/heros/heros.selector';
import Spinner from 'SRC/components/spinner/Spinner.component';
import HeroCard from 'COMPONENTS/heroCard/HeroCard.component';

const HerosList = () => {
	const herosList = useSelector(selectHeros);
	const isLoading = useSelector(selectListIsLoading);

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<Grid container rowSpacing={{ xs: 5 }} columnSpacing={{ xs: 5, sm: 15, md: 20 }}>
						{!isEmpty(herosList) &&
							herosList.map((hero) => (
								<Grid xs={12} sm={6} md={3} item key={hero.id}>
									<HeroCard hero={hero} />
								</Grid>
							))}
					</Grid>
					<Outlet />
				</>
			)}
		</>
	);
};

export default HerosList;
