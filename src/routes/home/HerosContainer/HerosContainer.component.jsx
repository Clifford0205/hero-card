import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getHerosItems } from 'STORE/heros/heros.reducer';
import HerosList from '../HerosList.component';
import HeroProfile from '../HeroProfile/HeroProfile.component';
import { StyledHerosContainer } from './HerosContainer.styles';

const HerosContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getHerosItems());
	}, []);
	return (
		<StyledHerosContainer>
			<Routes>
				<Route path='/' element={<HerosList />}>
					<Route path=':heroId' element={<HeroProfile />} />
				</Route>
			</Routes>
		</StyledHerosContainer>
	);
};

export default HerosContainer;
