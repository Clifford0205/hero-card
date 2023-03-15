import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getHerosItems } from 'STORE/heros/heros.reducer';
import HerosList from '../HerosList.component';
import Hero from '../Hero.component';
import { StyledHerosContainer } from './HerosContainer.styles';

const HerosContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getHerosItems());
	}, []);
	return (
		<StyledHerosContainer>
			<HerosList />
			<Routes>
				<Route path=':hero' element={<Hero />} />
			</Routes>
		</StyledHerosContainer>
	);
};

export default HerosContainer;
