import { styled } from '@mui/material/styles';
import isStyledPropsValid from 'UTILS/isStyledPropsValid';

export const NavigationContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	height: '70px',
	width: '100%',
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	padding: theme.spacing(2),
	backgroundColor: theme.customColors.grey[900],
	position: 'relative',
	zIndex: 1301,
}));
