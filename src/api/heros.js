import request from './base/request';

export function fetchHeros() {
	return request({
		url: '',
		method: 'get',
	});
}

export function fetchHeroProfile(heroId) {
	return request({
		url: `${heroId}/profile`,
		method: 'get',
	});
}

export default {
	fetchHeros,
};
