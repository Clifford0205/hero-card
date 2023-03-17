import { createContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import { useTheme } from '@mui/material';

export const ToastContext = createContext({
	handleToast: () => {},
});

export const ToastProvider = ({ children }) => {
	const theme = useTheme();

	const handleToast = useCallback((toastType, toastText, toastConfig) => {
		toast[toastType](toastText, toastConfig);
	}, []);

	const value = { handleToast };

	return (
		<ToastContext.Provider value={value}>
			{children}
			<ToastContainer position='top-center' theme={theme.palette.mode} />
		</ToastContext.Provider>
	);
};

export default ToastContext;

ToastProvider.defaultProps = {
	children: null,
};
ToastProvider.propTypes = {
	children: PropTypes.node,
};
