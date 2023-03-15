import { createContext } from 'react';

const HeroContext = createContext({
	profile: {},
	point: 0,
	isLoading: false,
	increase: () => {},
	decrease: () => {},
});

export default HeroContext;
