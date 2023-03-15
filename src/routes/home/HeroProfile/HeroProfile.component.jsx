import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { debounce } from 'lodash-es';

import { StyledHeroProfile, StyledCounterArea, StyledSaveBtn } from './HeroProfile.styles';
import HeroContext from 'SRC/contexts/hero.context';
import useHeroProfile from 'SRC/hooks/useHeroProfile.hooks';
import { editProfile } from 'SRC/api/heros';

const HeroProfile = () => {
	const { heroId } = useParams();
	const [errorHint, setErrorHint] = useState(false);

	const heroProfile = useHeroProfile();
	const { profile, point, increase, decrease } = heroProfile;

	const handleEdit = debounce(async () => {
		if (point > 0) {
			setErrorHint(true);
			return;
		}
		setErrorHint(false);
		await editProfile({ heroId, profile });
	}, 300);

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
						<Box>
							{errorHint && (
								<Typography variant='alert' component='h4'>
									還有剩餘點數
								</Typography>
							)}

							<StyledSaveBtn color='secondary' variant='contained' onClick={handleEdit}>
								儲存
							</StyledSaveBtn>
						</Box>
					</Grid>
				</Grid>
			</StyledHeroProfile>
		</HeroContext.Provider>
	);
};

export default HeroProfile;
