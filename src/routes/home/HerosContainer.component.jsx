import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getHerosItems } from 'STORE/heros/heros.reducer';
import HerosList from './HerosList.component';
import Hero from './Hero.component';

const HerosContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getHerosItems());
	}, []);
	return (
		<>
			<HerosList />
			<Routes>
				<Route path=':hero' element={<Hero />} />
			</Routes>
		</>
	);
};

export default HerosContainer;
