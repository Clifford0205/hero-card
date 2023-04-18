import request from './base/request';

export function fetchHeros() {
	return request({
		url: '/heroes',
		method: 'get',
	});
}

export function fetchHeroProfile(heroId) {
	return request({
		url: `/heroes/${heroId}/profile`,
		method: 'get',
	});
}

export function editProfile({ profile, heroId }) {
	const config = {
		data: {
			...profile,
		},
	};
	return request({
		url: `/heroes/${heroId}/profile`,
		method: 'PATCH',
		config,
	});
}

export default {
	fetchHeros,
	fetchHeroProfile,
	editProfile,
};
