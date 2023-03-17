import axios from 'axios';
import { set, unset, get, debounce } from 'lodash-es';

export const debounceErrorAlert = debounce(() => {
	alert('伺服器連線異常');
}, 500);

const baseURL = 'https://hahow-recruit.herokuapp.com/heroes';

let apiStatus = {};

export default ({ method, url, config = {} }) => {
	let isStillGetting = get(apiStatus, url, false);

	if (isStillGetting) {
		return;
	}

	set(apiStatus, url, true);

	let defaultConfig = {
		baseURL,
		method,
		url,
	};

	let usingConfig = Object.assign(defaultConfig, config);

	return axios(usingConfig)
		.then((response) => {
			unset(apiStatus, url);

			const code = get(response, 'status');

			const data = get(response, 'data');

			if (code === 200) {
				return data;
			}
			throw new Error(response);
		})
		.catch((error) => {
			unset(apiStatus, url);

			throw new Error(error);
		});
};
