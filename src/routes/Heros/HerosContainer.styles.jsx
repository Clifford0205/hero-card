import { styled } from '@mui/material/styles';
import isStyledPropsValid from 'UTILS/isStyledPropsValid';

export const StyledHerosContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	height: '100%',
	padding: theme.spacing(5, 40),
	[theme.breakpoints.down('lg')]: {
		padding: theme.spacing(5, 32),
	},
	[theme.breakpoints.down('md')]: {
		padding: theme.spacing(5, 24),
	},
	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(5, 8),
	},
}));
