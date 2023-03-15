import { styled } from '@mui/material/styles';
import isStyledPropsValid from 'UTILS/isStyledPropsValid';
import { keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';

export const HeroCardLink = styled(Link, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	textDecoration: 'none',
	color: theme.customColors.grey[200],
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
		WebkitTransform: 'rotate(360deg)',
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
	WebkitAnimation: `${spin} 1s ease-in-out infinite`,
}));
