import { styled } from '@mui/material/styles';
import isStyledPropsValid from 'UTILS/isStyledPropsValid';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

export const StyledHeroProfile = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	marginTop: '2rem',
	padding: theme.spacing(2),
	backgroundColor: theme.customColors.grey[900],
	borderRadius: '5px',
}));

export const StyledCounterArea = styled(Box, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	button: {
		marginLeft: '5px',
		marginRight: '5px',
	},
}));

export const StyledSaveBtn = styled(Button, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	marginTop: theme.spacing(2),
	width: '214px',
}));

export const StyledAbilityArea = styled(Grid, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	[theme.breakpoints.down('md')]: {
		justifyContent: 'center',
	},
}));

export const StyledSaveArea = styled(Grid, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	[theme.breakpoints.down('md')]: {
		justifyContent: 'center',
	},
}));
