import request from './base/request';

export function fetchHeros() {
	return request({
		url: '',
		method: 'get',
	});
}

export default {
	fetchHeros,
};
