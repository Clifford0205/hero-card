import { useState, useEffect, useRef } from 'react';

import { Box, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { debounce } from 'lodash-es';
import { useSelector } from 'react-redux';
import { isEmpty, isEqual } from 'lodash-es';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import { selectHeros, selectListIsLoading } from 'STORE/heros/heros.selector';
import {
	StyledHeroProfile,
	StyledCounterArea,
	StyledSaveBtn,
	StyledAbilityArea,
	StyledSaveArea,
} from './HeroProfile.styles';
import HeroContext from 'SRC/contexts/hero.context';
import useHeroProfile from 'SRC/hooks/useHeroProfile.hooks';
import { editProfile } from 'SRC/api/heros';

const HeroProfile = () => {
	const originProfileSet = useRef(false);
	const theme = useTheme();
	const herosList = useSelector(selectHeros);
	const { heroId } = useParams();
	const heroProfile = useHeroProfile();
	const { profile, point, increase, decrease } = heroProfile;

	const [errorHint, setErrorHint] = useState(false);
	const [originProfile, setOriginProfile] = useState(profile);

	useEffect(() => {
		originProfileSet.current = false;
	}, [heroId]);

	useEffect(() => {
		if (!isEmpty(profile) && originProfileSet.current === false) {
			setOriginProfile(profile);
			originProfileSet.current = true;
		}
	}, [profile]);

	const handleEdit = debounce(async () => {
		if (point > 0) {
			setErrorHint(true);
			return;
		}
		setErrorHint(false);
		const res = await editProfile({ heroId, profile });
		if (res === 'OK') {
			setOriginProfile(profile);
			toast.success('修改成功!');
		}
	}, 300);

	return (
		<>
			{!isEmpty(herosList) && !isEmpty(profile) && (
				<HeroContext.Provider value={heroProfile}>
					<StyledHeroProfile>
						<Grid container spacing={2}>
							<StyledAbilityArea item xs={12} sm={6}>
								<div>
									{Object.keys(profile).map((ability) => (
										<Box marginBottom='10px' key={ability} display='flex'>
											<Typography variant='h3' sx={{ width: '30px' }}>
												{ability}
											</Typography>
											<StyledCounterArea display='flex' marginLeft={2} alignItems='center'>
												<Button color='info' variant='contained' onClick={() => decrease(ability)}>
													-
												</Button>
												<Box width='20px' textAlign='center'>
													{profile[ability]}
												</Box>
												<Button color='info' variant='contained' onClick={() => increase(ability)}>
													+
												</Button>
											</StyledCounterArea>
										</Box>
									))}
								</div>
							</StyledAbilityArea>
							<StyledSaveArea item xs={12} sm={6} display='flex'>
								<Box display='flex' flexDirection='column'>
									<Typography variant='h2'>剩餘點數:{point}</Typography>
									<Box mt='auto'>
										{errorHint && (
											<Typography variant='alert' component='h4'>
												還有剩餘點數
											</Typography>
										)}

										<StyledSaveBtn
											disabled={isEqual(profile, originProfile)}
											color='secondary'
											variant='contained'
											onClick={handleEdit}
										>
											儲存
										</StyledSaveBtn>
									</Box>
								</Box>
							</StyledSaveArea>
						</Grid>
					</StyledHeroProfile>
					<ToastContainer position='top-center' theme={theme.palette.mode} />
				</HeroContext.Provider>
			)}
		</>
	);
};

export default HeroProfile;
