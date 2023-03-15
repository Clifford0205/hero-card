import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import { StyledHeroProfile, StyledCounterArea } from './HeroProfile.styles';
import HeroContext from 'SRC/contexts/hero.context';
import useHeroProfile from 'SRC/hooks/useHeroProfile.hooks';

const HeroProfile = () => {
	const heroProfile = useHeroProfile();
	const { profile, point, increase, decrease } = heroProfile;

	return (
		<HeroContext.Provider value={heroProfile}>
			<StyledHeroProfile>
				<Grid container spacing={2}>
					<Grid item xs={6} display='flex' justifyContent='center'>
						<Box>
							{Object.keys(profile).map((ability) => (
								<Box marginBottom='10px' key={ability} display='flex'>
									<Typography variant='h3' sx={{ width: '30px' }}>
										{ability}
									</Typography>
									<StyledCounterArea marginLeft={2}>
										<Button color='info' variant='contained' onClick={() => decrease(ability)}>
											-
										</Button>
										<span>{profile[ability]}</span>
										<Button color='info' variant='contained' onClick={() => increase(ability)}>
											+
										</Button>
									</StyledCounterArea>
								</Box>
							))}
						</Box>
					</Grid>
					<Grid item xs={6}>
						<Typography variant='h2'>剩餘點數:{point}</Typography>
						<Box></Box>
					</Grid>
				</Grid>
			</StyledHeroProfile>
		</HeroContext.Provider>
	);
};

export default HeroProfile;
