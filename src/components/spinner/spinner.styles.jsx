import { styled } from '@mui/material/styles';
import isStyledPropsValid from 'UTILS/isStyledPropsValid';
import { keyframes } from '@emotion/react';

export const NavigationContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	height: '70px',
	width: '100%',
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	padding: theme.spacing(2),
	backgroundColor: theme.customColors.primary[400],
	position: 'relative',
	zIndex: 1301,
}));

export const SpinnerOverlay = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(() => ({
	height: '60vh',
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

const spin = keyframes({
	to: {
		'-webkit-transform': 'rotate(360deg)',
	},
});

export const SpinnerContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	display: 'inline-block',
	width: '50px',
	height: '50px',
	border: `3px solid ${theme.customColors.spin.border}`,
	borderRadius: '50%',
	borderTopColor: theme.customColors.spin.borderTop,
	animation: `${spin} 1s ease-in-out infinite`,
	'-webkit-animation': `${spin} 1s ease-in-out infinite`,
}));
