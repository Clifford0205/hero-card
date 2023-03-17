import { useEffect, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getHerosItems } from 'STORE/heros/heros.reducer';
import HerosList from 'COMPONENTS/herosList/HerosList.component';
import HeroProfile from './HeroProfile/HeroProfile.component';
import { StyledHerosContainer } from './HerosContainer.styles';
import ToastContext from 'CONTEXTS/toast.context';

const HerosContainer = () => {
	const dispatch = useDispatch();
	const { handleToast } = useContext(ToastContext);

	useEffect(() => {
		dispatch(getHerosItems({ errCb: () => handleToast('error', '返回資料有誤') }));
	}, []);
	return (
		<StyledHerosContainer>
			<Routes>
				<Route path='/' element={<HerosList />}>
					<Route path='*' element={<Navigate to='/heros' />} />
					<Route path=':heroId' element={<HeroProfile />} />
				</Route>
			</Routes>
		</StyledHerosContainer>
	);
};

export default HerosContainer;
