import { useState, useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { createAction } from 'UTILS/reducer.utils';
import { fetchHeroProfile } from 'SRC/api/heros';

const handleIncrease = (profile, ability) => {
	const newProfile = { ...profile, [ability]: profile[ability] + 1 };
	return newProfile;
};

const handleDecrease = (profile, ability) => {
	const newProfile = { ...profile, [ability]: profile[ability] < 1 ? 0 : profile[ability] - 1 };
	return newProfile;
};

const HERO_ACTION_TYPE = {
	SET_HERO_PROFILE: 'SET_HERO_PROFILE',
	INIT_HERO_PROFILE: 'INIT_HERO_PROFILE',
};

const INITIAL_STATE = {
	profile: {},
	point: 0,
	isLoading: false,
};

const heroReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case HERO_ACTION_TYPE.SET_HERO_PROFILE:
			return {
				...state,
				...payload,
			};
		case HERO_ACTION_TYPE.INIT_HERO_PROFILE:
			return {
				...state,
				profile: payload,
				point: 0,
			};
		default:
			throw new Error(`Unhandled type ${type} in heroReducer`);
	}
};

const useHeroProfile = () => {
	const { heroId } = useParams();
	const [isLoading, setLoading] = useState(false);

	const [{ profile, point }, dispatch] = useReducer(heroReducer, INITIAL_STATE);

	const initProfile = async () => {
		try {
			setLoading(true);
			const profile = await fetchHeroProfile(heroId);
			dispatch(createAction(HERO_ACTION_TYPE.INIT_HERO_PROFILE, profile));
		} catch (error) {
			throw new Error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		initProfile();
	}, [heroId]);

	const updateProfile = (newProfile) => {
		const oldProfilePoint = Object.values(profile).reduce(
			(total, abilityPoint) => total + abilityPoint,
			0,
		);
		const newProfilePoint = Object.values(newProfile).reduce(
			(total, abilityPoint) => total + abilityPoint,
			0,
		);
		const lastPoint = oldProfilePoint - newProfilePoint + point;
		const payload = {
			profile: newProfile,
			point: lastPoint,
		};
		dispatch(createAction(HERO_ACTION_TYPE.SET_HERO_PROFILE, payload));
	};

	const increase = (ability) => {
		if (point < 1) {
			return;
		}
		const newProfile = handleIncrease(profile, ability);
		updateProfile(newProfile);
	};
	const decrease = (ability) => {
		if (profile[ability] < 1) {
			return;
		}
		const newProfile = handleDecrease(profile, ability);
		updateProfile(newProfile);
	};

	return {
		profile,
		point,
		isLoading,
		increase,
		decrease,
	};
};

export default useHeroProfile;
